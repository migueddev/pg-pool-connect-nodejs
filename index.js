const { Pool } = require("pg");

class DBConnection {
  constructor(db, host, port, user, pass, min, max) {
    this.DATABASE = db;
    this.HOST = host;
    this.DB_PORT = port;
    this.USERNAME = user;
    this.PASSWORD = pass;
    this.MIN_CON = min;
    this.MAX_CON = max;
    this.pool = this.get_pool();
  }
  // Obtiene un pool
  get_pool() {
    if (!this.pool) {
      try {
        this.pool = new Pool({
          database: this.DATABASE, // Nombre de base de datos
          user: this.USERNAME, // Usuario de base de datos
          password: this.PASSWORD, // Contraseña del usuario de la base de datos
          host: this.HOST, // Host de la base de datos
          port: this.DB_PORT, // Puerto de la base de datos
          max: this.MAX_CON, // Máximo número de conexiones
          min: this.MIN_CON, // Mínimo número de conexiones
        });

        console.log(`Creación pool exitosa`);
        return this.pool;
      } catch (error) {
        console.log(`Error al crear el pool de conexiones: ${e}`);
        throw error;
      }
    }
    return this.pool;
  }
  // Obtiene conexión
  async get_connection(task) {
    const pool = this.get_pool();
    const conn = await pool.connect();
    console.log(
      `Conexión obtenida del pool: ${conn.processID} - tarea: ${task}`
    );
    return conn;
  }
  // Libera conexión
  async release_connection(conn, task) {
    console.log(
      `Devolviendo conexión al pool: ${conn.processID} - tarea: ${task}`
    );
    await conn.release();
    return;
  }
}

// Instancia una conexión pool de la base de datos
const pool_connect = new DBConnection(
  "postgres", // Nombre de base de datos
  "localhost", // Host de la base de datos
  5432, // Puerto de la base de datos
  "postgres", // Usuario de base de datos
  "password", // Contraseña del usuario de la base de datos
  0, // Mínimo número de conexiones
  2 // Máximo número de conexiones
);

async function task(taskId) {
  console.log(`Ejecutando tarea: ${taskId}`);
  const client = await pool_connect.get_connection(taskId); // Obtiene conexión
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula una consulta asíncrona de 1 segundo
  await pool_connect.release_connection(client, taskId); // Libera conexión
}

// Genera un array de tareas
const tasks = Array.from({ length: 5 }, (_, i) => task(i));

// Ejecuta el array de tareas
Promise.all(tasks).then(() => {
  console.log("Todas las tareas completadas");
});

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: Path2D.resolve(__dirname, "src", "database", "database.db")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_kneys = ON", cb)
    },
    migration: {
      directory: Path2D.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault: true
  }
};

var dbConfig = {
  server: "VICTORHP\SQLEXPRESS",
  port: 1433,
  database: "SuperheroeDB",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  }
}
module.export = dbConfig
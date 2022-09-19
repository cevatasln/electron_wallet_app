// eslint-disable-next-line no-undef
const sqlite3 = require("sqlite3").verbose();
// eslint-disable-next-line no-undef
const dbfile = __dirname + "/db.db";
let db = new sqlite3.Database(dbfile, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the database.");
  }
});
// db.close();
// eslint-disable-next-line no-undef
exports.db = db;
// eslint-disable-next-line no-undef
exports.dbfile = dbfile;
//export { db };

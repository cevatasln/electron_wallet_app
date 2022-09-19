// eslint-disable-next-line no-undef
var connect = require("../connect");
const db = connect.db;

const listAccounts = new Promise((resolve, reject) => {
  db.all(`SELECT * FROM accounts`, [], (err, rows) => {
    if (err) reject(err);
    resolve(rows);
  });
});
// eslint-disable-next-line no-undef
exports.listAccounts = listAccounts;
//export { listAccounts };

const p = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {

  // console.log("Carrinho de compras:");
  // p.getFullName("408", "mousepad");
  // p.getProductLabel("mousepad");

  // console.log(config.producao);
  // console.log(config.versao);
  // console.log(config.client)

  database.connectToDatabase("sql");
  database.disconnetDatabase();
}

main();
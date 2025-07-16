import { getBaseEmail } from "./services/email"

async function main() {
  console.log(await getBaseEmail("Pedro"))
  
  console.log("finalizado.")
}

main()



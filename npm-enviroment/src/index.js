import connectToDatabase from "./database/data.js"

async function main() {
  const user = process.env.USERDATABASE
  const password = process.env.PASSWORDDATABASE

  await connectToDatabase(user, password)
}

main()

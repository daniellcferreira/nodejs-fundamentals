// Importa o chalk para colorir textos no terminal
import chalk from "chalk"

// Importa a função responsável por gerar a senha
import handle from "./handle.js"

async function createPassword() {
  // Mensagem indicando início da geração de senha
  console.log(chalk.green("🔐 Gerando senha segura..."))

  // Chama a função que gera a senha de forma assíncrona
  const password = await handle()

  // Exibe a senha gerada no terminal
  console.log(chalk.blue("Senha gerada: "), password)
}

// Exporta a função para ser usada no sistema principal
export default createPassword

import chalk from "chalk"

const mainPrompt = [
  {
    name: "select",
    description: chalk.yellow("Escolha a ferramenta (1- QRCODE ou 2- PASSWORD)"),
    pattern: /^[1-2]+$/,
    message: chalk.red("Escolha uma opção válida, 1- QRCODE ou 2- PASSWORD."),
    required: true
  }
]

export default mainPrompt
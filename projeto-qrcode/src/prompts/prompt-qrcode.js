// Importa o chalk para colorir os textos no terminal
import chalk from "chalk"

// Define o prompt para entrada de dados do QR Code
const promptQRCode = [
  {
    name: "link", // Nome do campo para armazenar o link digitado
    description: chalk.yellow("Digite o link para gerar o QR CODE") // Pergunta ao usuário
  },
  {
    name: "type", // Define o tipo de QR Code (1 = normal, 2 = terminal)
    description: chalk.yellow("Escolha entre o tipo de QRcode (1- NORMAL ou 2- TERMINAL)"),
    pattern: /^[1-2]+$/, // Aceita apenas 1 ou 2
    message: chalk.red("Escolha apenas entre 1 e 2"), // Mensagem de erro caso a entrada seja inválida
    required: true // Campo obrigatório
  }
]

// Exporta o prompt para ser usado no serviço de QR Code
export default promptQRCode

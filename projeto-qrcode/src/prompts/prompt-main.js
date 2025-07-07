// Importa a biblioteca chalk para estilizar o texto no terminal
import chalk from "chalk"

// Define o prompt principal com uma pergunta para o usuário
const mainPrompt = [
  {
    name: "select", // Nome da chave que será usada para recuperar a resposta
    description: chalk.yellow("Escolha a ferramenta (1- QRCODE ou 2- PASSWORD)"), // Texto que será exibido no terminal
    pattern: /^[1-2]+$/, // Valida que apenas '1' ou '2' são aceitos
    message: chalk.red("Escolha uma opção válida, 1- QRCODE ou 2- PASSWORD."), // Mensagem de erro se o padrão for quebrado
    required: true // Torna o campo obrigatório
  }
]

// Exporta o prompt para ser usado no arquivo principal
export default mainPrompt

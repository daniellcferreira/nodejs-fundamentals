// Importa a biblioteca prompt para entrada de dados no terminal
import prompt from "prompt"

// Importa o conjunto de perguntas específicas para o QR Code
import promptQRCode from "../../prompts/prompt-qrcode.js"

// Importa a função que trata a resposta do prompt
import handle from "./handle.js"

async function createQRCode() {
  // Inicia o prompt (deve ser chamado antes do get)
  prompt.start()

  // Executa o prompt com as perguntas e envia para o handler
  prompt.get(promptQRCode, handle)
}

// Exporta a função para ser usada no menu principal
export default createQRCode

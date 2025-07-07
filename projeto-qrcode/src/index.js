// Importa a biblioteca prompt para entrada de dados via terminal
import prompt from "prompt"

// Importa o prompt principal com as opções do menu
import mainPrompt from "./prompts/prompt-main.js"

// Importa a função para gerar QR Code
import createQRCode from "./services/qr-code/create.js"

// Importa a função para gerar senha
import createPassword from "./services/password/create.js"

async function main() {
  // Inicia o prompt (obrigatório antes de usá-lo)
  prompt.start()

  // Exibe o prompt principal e trata a escolha do usuário
  prompt.get(mainPrompt, async (err, choose) => {
    if (err) {
      console.error("Erro ao capturar entrada:", err)
      return
    }

    // Executa a função correspondente à opção selecionada
    if (choose.select === "1") await createQRCode()
    if (choose.select === "2") await createPassword()
  })
}

// Executa a função principal
main()

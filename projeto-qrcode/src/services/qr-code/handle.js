// Importa o pacote para gerar QR Codes no terminal
import qr from "qrcode-terminal"

// Importa o chalk para colorir mensagens no terminal
import chalk from "chalk"

// Função que lida com a resposta do prompt para gerar o QR Code
async function handle(err, result) {
  // Verifica se houve erro na entrada do usuário
  if (err) {
    console.log(chalk.red("Erro na aplicação"))
    return
  }

  // Verifica se o tipo escolhido foi "2", que significa QR Code compacto
  const isSmall = result.type == 2

  // Gera o QR Code a partir do link fornecido
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso:\n"))
    console.log(qrcode) // Exibe o QR Code no terminal
  })
}

// Exporta a função para ser usada no serviço de criação de QR Code
export default handle

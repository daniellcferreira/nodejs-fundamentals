const mainPrompt = [
  {
    name: "select",
    description: "Escolha a ferramenta (1- QRCODE ou 2- PASSWORD)",
    pattern: /^[1-2]+$/,
    message: "Escolha uma opção válida, 1- QRCODE ou 2- PASSWORD.",
    required: true
  }
]

export default mainPrompt
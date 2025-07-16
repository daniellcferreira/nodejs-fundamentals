async function getBaseEmail(senderName: string) {
  let base = await getHeaderText()
  
  base += `Olá ${senderName}, gostaria de me inscrever para a vega.`
  base += "\n Estou deixando o meu curriculo"

  return base
}

async function getHeaderText(): Promise<string> {
  return "EMAIL PARA VOCÊ\n"
}

export { getBaseEmail }
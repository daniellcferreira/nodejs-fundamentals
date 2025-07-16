async function getBaseEmail(senderName: string): Promise<string> {
  let base = await getHeaderText()
  
  base += `Olá ${senderName}, gostaria de me inscrever para a vaga.`
  base += "\nEstou deixando o meu curriculo"

  return base
}

async function getHeaderText(): Promise<string> {
  return "EMAIL PARA VOCÊ\n"
}

export { getBaseEmail }
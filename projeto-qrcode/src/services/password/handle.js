// Função que gera uma senha baseada nas variáveis de ambiente
async function handle() {
  // Lista de caracteres possíveis para compor a senha
  let characters = []

  // Variável que armazenará a senha final
  let password = ""

  // Lê o tamanho da senha a partir das variáveis de ambiente
  const passwordLength = process.env.PASSWORD_LENGTH

  // Adiciona letras maiúsculas se a variável estiver ativada
  if (process.env.UPPERCASE_LETTERS === "true") {
    characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }

  // Adiciona letras minúsculas se a variável estiver ativada
  if (process.env.LOWERCASE_LETTERS === "true") {
    characters.push(..."abcdefghijklmnopqrstuvwxyz")
  }

  // Adiciona números se a variável estiver ativada
  if (process.env.NUMBERS === "true") {
    characters.push(..."0123456789")
  }

  // Adiciona caracteres especiais se a variável estiver ativada
  if (process.env.SPECIAL_CHARACTERS === "true") {
    characters.push(..."!@#$%^&*()-_")
  }

  // Gera a senha aleatória com base nos caracteres disponíveis
  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length)
    password += characters[index]
  }

  // Retorna a senha gerada
  return password
}

// Exporta a função de geração de senha
export default handle

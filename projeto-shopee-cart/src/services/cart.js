// Adiciona um item ao carrinho de compras
async function addItem(userCart, item) {
  userCart.push(item)
}

// Remove um item do carrinho com base no nome (exclusão total)
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name)

  // Se o item for encontrado, remove ele do array
  if (index !== -1) {
    userCart.splice(index, 1)
  }
}

// Remove uma unidade de um item no carrinho
// Se a quantidade for 1, o item é removido totalmente
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name)

  if (indexFound === -1) {
    console.log("Item não encontrado!")
    return
  }

  // Reduz a quantidade em 1 se houver mais de uma unidade
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1
    return
  }

  // Remove o item se a quantidade for 1
  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1)
    return
  }
}

// Calcula e exibe o total do carrinho somando os subtotais dos itens
async function calculateTotal(userCart) {
  console.log("\nShoppe Cart TOTAL is: ")

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
  console.log(`Total: ${result}`)
}

// Exibe os itens do carrinho com nome, preço, quantidade e subtotal
async function displayCart(userCart) {
  console.log("Shopee cart list: ")
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} |
       ${item.quantity}x | Subtotal = ${item.subtotal()}`)
  });
}

// Exporta as funções para uso externo
export {
  addItem,
  deleteItem,
  removeItem,
  calculateTotal,
  displayCart
}

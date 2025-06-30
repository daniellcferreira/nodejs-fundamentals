// Cria um novo item com nome, preço, quantidade e função para calcular o subtotal
async function createItem(name, price, quantity) {
  return {
    name,           // Nome do produto
    price,          // Preço unitário
    quantity,       // Quantidade no carrinho
    subtotal: () => price * quantity, // Função que retorna o subtotal do item
  }  
}

// Exporta a função para ser usada em outros módulos
export default createItem

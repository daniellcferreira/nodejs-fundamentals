// Importa a função para criar itens
import createItem from "./services/item.js"

// Importa todas as funções do carrinho como um módulo chamado cartService
import * as cartService from "./services/cart.js"

// Inicializa o carrinho e a lista de desejos como arrays vazios
const myCart = []
const myWhishList = [] // Ainda não utilizado no fluxo atual

console.log("Welcome to the your Shopee Cart!\n")

// Cria dois itens com nome, preço e quantidade
const item1 = await createItem("mouse", 20.99, 1)
const item2 = await createItem("pen-drive", 12.99, 3)

// Adiciona os itens ao carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

// Remove uma unidade do segundo item ("pen-drive") do carrinho
await cartService.removeItem(myCart, item2)

// Exibe os itens atuais do carrinho
await cartService.displayCart(myCart)

// Opção de deletar completamente itens do carrinho (comentada)
// await cartService.deleteItem(myCart, item2.name)
// await cartService.deleteItem(myCart, item1.name)

// Calcula e exibe o total do carrinho
await cartService.calculateTotal(myCart)

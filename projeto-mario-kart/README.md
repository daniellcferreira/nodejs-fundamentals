# Corrida de Personagens em JavaScript

![JavaScript](https://img.shields.io/badge/JavaScript-Language%20Programming-yellow?style=flat-square&logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-Terminal%20Runtime-green?style=flat-square&logo=nodedotjs)

## Descrição

Este projeto simula uma corrida entre dois personagens fictícios com atributos distintos, utilizando lógica de sorteio, confronto e pontuação rodada a rodada.  
A corrida é composta por 5 rodadas, onde cada uma sorteia aleatoriamente um tipo de trecho: reta, curva ou confronto.  
Dependendo do tipo de trecho, um atributo do personagem (velocidade, manobrabilidade ou poder) é aplicado ao resultado da rolagem de um dado.  
O personagem com maior desempenho na rodada marca um ponto. Em caso de confronto direto, o perdedor pode perder pontos.  
Ao final das rodadas, o personagem com mais pontos é declarado vencedor.

## Funcionalidades

- Simulação de corrida por turnos entre dois personagens
- Sorteio aleatório do tipo de trecho (reta, curva ou confronto)
- Rolagem de dado para definir o desempenho na rodada
- Cálculo de desempenho com base em atributos únicos de cada personagem
- Sistema de pontuação automática a cada rodada
- Lógica de confronto direto com perda de pontos
- Exibição do vencedor após todas as rodadas

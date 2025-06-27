// Definição dos jogadores com seus atributos
const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0
};

// Função para simular a rolagem de um dado de 6 lados
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Função que sorteia aleatoriamente o tipo de bloco: RETA, CURVA ou CONFRONTO
function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }

  return result;
}

// Função que exibe o resultado da rolagem do dado com o atributo aplicado
function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

// Função principal da corrida, com 5 rodadas
async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`Rodada ${round}`);

    // Sorteia o tipo de bloco
    let block = getRandomBlock();
    console.log(`Bloco: ${block}`);

    // Rola os dados para cada personagem
    let diceResult1 = rollDice();
    let diceResult2 = rollDice();

    // Armazena o total da habilidade aplicada
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    // Se o bloco for RETA, aplica o atributo VELOCIDADE
    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
      logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
    }

    // Se o bloco for CURVA, aplica o atributo MANOBRABILIDADE
    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
      logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
    }

    // Se o bloco for CONFRONTO, aplica o atributo PODER
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}!`);

      logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);
      logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);

      // Quem vencer o confronto faz o outro perder um ponto (caso tenha)
      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto!`);
        character2.PONTOS--;
      }

      if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto!`);
        character1.PONTOS--;
      }

      // Empate no confronto
      if (powerResult1 === powerResult2) {
        console.log("Confronto empatado! Nenhum ponto foi perdido");
      }
    }

    // Ganha ponto quem tiver maior total de habilidade
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    }

    console.log("------------------------------");
  }
}

// Exibe o vencedor com base nos pontos após todas as rodadas
function declareWinner(character1, character2) {
  console.log("Resultado Final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS) {
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns!`);
  } else if (character2.PONTOS > character1.PONTOS) {
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns!`);
  } else {
    console.log("A corrida terminou empatada!");
  }
}

// Função principal que inicia o jogo
(async function main() {
  console.log(`Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);

  await playRaceEngine(player1, player2);
  declareWinner(player1, player2);
})();

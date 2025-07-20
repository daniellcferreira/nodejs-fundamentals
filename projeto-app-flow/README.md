# Projeto API de Podcasts

![TypeScript](https://img.shields.io/badge/TypeScript-Tipagem%20estática-3178C6?style=flat-square&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-Execução%20backend-339933?style=flat-square&logo=node.js)
![Arquitetura](https://img.shields.io/badge/Estrutura-Modular-764ABC?style=flat-square&logo=visual-studio-code)
![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-yellow?style=flat-square)

---

## Descrição

Este projeto é uma API educacional criada com Node.js e TypeScript, com o objetivo de demonstrar boas práticas em organização de código backend puro, sem frameworks.

O principal foco está em:

- Utilizar **TypeScript** com suas vantagens de segurança e organização.
- Criar uma estrutura **modular**, baseada em *controllers*, *services*, *repositories* e *models*.
- Simular a estrutura de uma API REST que acessa dados reais a partir de um arquivo local `.json`.

Essa API foi pensada para fins didáticos, sendo uma base sólida para quem está aprendendo sobre:

- Comunicação HTTP usando Node.js puro (`http.createServer`)
- Separação de responsabilidades entre camadas da aplicação
- Utilização de tipagem com interfaces TypeScript
- Respostas em formato JSON com cabeçalhos HTTP apropriados
- Roteamento simples sem bibliotecas externas

Mesmo sem Express ou bibliotecas externas, o projeto oferece clareza, organização e controle total do fluxo de execução.

---

## Funcionalidades

- **Listagem de episódios**
  - Endpoint: `GET /api/list`
  - Retorna todos os episódios de podcast disponíveis no arquivo `podcasts.json`.

- **Filtragem de episódios por nome do podcast**
  - Endpoint: `GET /api/episode?name=XYZ`
  - Retorna apenas os episódios cujo nome contenha o termo passado como parâmetro `name`.

- **Leitura de dados via repositório**
  - Os dados dos episódios são lidos diretamente de um arquivo JSON, simulando um banco de dados local.

- **Organização por camadas**
  - Cada responsabilidade está separada em pastas específicas: `controllers`, `services`, `repositories` e `models`.

- **Uso de TypeScript com interfaces**
  - Toda a tipagem dos dados é feita com `interface Podcast`, promovendo clareza e validação estática.

- **Roteamento baseado em HTTP nativo**
  - As requisições são roteadas manualmente com base em método e URL, sem dependências externas.

---

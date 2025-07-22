# API Fórmula 1 com Fastify

![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=flat-square&logo=node.js)
![Fastify](https://img.shields.io/badge/Fastify-Framework-000000?style=flat-square&logo=fastify)
![TypeScript](https://img.shields.io/badge/TypeScript-Linguagem-3178C6?style=flat-square&logo=typescript)
![CORS](https://img.shields.io/badge/CORS-Habilitado-FF6F00?style=flat-square&logo=express)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=flat-square)

## Descrição

Este projeto é uma API RESTful construída com **Fastify** e **TypeScript** que simula dados de equipes e pilotos da Fórmula 1. A aplicação permite o consumo de informações de forma simples, rápida e eficiente, ideal para protótipos, testes de frontend ou aprendizado.

A API inclui dados estáticos e está preparada para ser expandida com bancos de dados, filtros por query e testes automatizados.

---

## Funcionalidades

- **Rota GET `/teams`**
  - Retorna uma lista de times de Fórmula 1.
  - Exemplo de resposta:
    ```json
    {
      "teams": [
        { "id": 1, "name": "Mercedes", "base": "Germany" },
        ...
      ]
    }
    ```

- **Rota GET `/drivers`**
  - Retorna uma lista de pilotos e os times aos quais pertencem.

- **Rota GET `/drivers/:id`**
  - Retorna um piloto específico pelo ID.
  - Caso o piloto não exista, retorna um erro 404 com a mensagem:
    ```json
    { "error": "Driver not found" }
    ```

- **CORS habilitado**
  - Permite chamadas de qualquer origem (`origin: "*"`)
  - Facilita o uso com frontends durante o desenvolvimento.

---


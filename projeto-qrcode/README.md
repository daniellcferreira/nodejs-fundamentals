# Projeto QR Code e Gerador de Senhas

[![Node.js](https://img.shields.io/badge/Node.js-runtime-339933?logo=node.js&style=flat-square)](https://nodejs.org)
[![prompt](https://img.shields.io/badge/prompt-interactive_CLI-026AA7?style=flat-square)](https://www.npmjs.com/package/prompt)
[![chalk](https://img.shields.io/badge/chalk-terminal_colors-4A148C?logo=javascript&style=flat-square)](https://www.npmjs.com/package/chalk)
[![qrcode-terminal](https://img.shields.io/badge/qrcode--terminal-terminal_QR-1A237E?style=flat-square)](https://www.npmjs.com/package/qrcode-terminal)
[![dotenv](https://img.shields.io/badge/dotenv-env_config-444444?logo=dotenv&style=flat-square)](https://www.npmjs.com/package/dotenv)

---

## Descrição

Sistema de linha de comando (CLI) desenvolvido com Node.js que oferece duas ferramentas úteis:

- Geração de QR Codes no terminal a partir de qualquer link fornecido.
- Geração de senhas seguras com configurações personalizáveis via variáveis de ambiente.

A interface é feita com prompts interativos, e o código foi estruturado de forma modular para facilitar a manutenção e a escalabilidade.

---

## Funcionalidades

- **Menu interativo via terminal**
  - Escolha entre gerar QR Code ou senha
- **Geração de QR Code**
  - Entrada: link informado pelo usuário
  - Estilos: normal ou formato reduzido para terminal
- **Geração de senha segura**
  - Personalização com variáveis de ambiente:
    - Tamanho da senha (`PASSWORD_LENGTH`)
    - Inclusão de letras maiúsculas/minúsculas, números e caracteres especiais


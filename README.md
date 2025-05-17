# Gerador de Senhas

Um simples gerador de senhas web construído com TypeScript e Vite.
Inspiração Prof Isabela: https://www.youtube.com/watch?v=6M7bXwXOoMQ&list=PLLA7Fl2o0MJpvMFS9IKmk2H2HCBYioA5B

<div align="center">
  <img src="https://github.com/user-attachments/assets/77f3a679-04b8-4317-b450-701faf6aa9f1" alt="Captura de tela do aplicativo Gerador de Senhas">
</div>

## Descrição

Este projeto é uma aplicação web que permite gerar senhas seguras e personalizadas com base em critérios selecionados pelo usuário, como comprimento e tipos de caracteres (letras minúsculas, maiúsculas, números e símbolos).

## Funcionalidades

*   Geração de senhas com comprimento configurável (entre 8 e 20 caracteres).
*   Inclusão opcional de letras minúsculas, maiúsculas, números e símbolos.
*   Validação básica dos inputs do usuário.
*   Funcionalidade para copiar a senha gerada para a área de transferência.

## Tecnologias Utilizadas

*   TypeScript
*   HTML
*   CSS
*   Vite

## Configuração e Instalação

Para configurar e executar o projeto localmente, siga os passos abaixo:

1.  Clone o repositório:
    ```bash
    git clone https://github.com/TheRodrig0/a-ruina-de-arquimedes.git
    cd password-generator
    ```

2.  Instale as dependências usando npm, yarn ou pnpm:
    ```bash
    npm install
    # ou yarn install
    # ou pnpm install
    ```

## Como Usar

1.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    # ou yarn dev
    # ou pnpm dev
    ```
    O aplicativo estará disponível em `http://localhost:8080` (ou outra porta, dependendo da configuração do Vite).

2.  Abra a aplicação no seu navegador.

3.  Defina o comprimento da senha desejada.

4.  Selecione os tipos de caracteres que você quer incluir na senha (letras minúsculas, maiúsculas, números, símbolos).

5.  Clique no botão "Gerar Senha".

6.  A senha gerada aparecerá no campo de resultado.

7.  Clique no botão "Copiar" para copiar a senha para a área de transferência.

## Build para Produção

Para gerar uma build de produção do projeto:

```bash
npm run build
# ou yarn build
# ou pnpm build

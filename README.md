# Treinamento TDD

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

Este repositório é utilizado para simular a criação de um adapter para um cliente http utilizando TDD.

## Autores

- [@lucsimao](https://www.github.com/lucsimao)

# Sumário

- [Objetivo](#Objetivo)
- [Conteúdos](#Conteúdos)
- [Instalação](#Instalação)
- [Testes](#Testes)
- [Tecnologias](#Tecnologias)
- [Referências](#Referências)

# Objetivo

Dado o endpoint [users do site jsonplaceholder](https://jsonplaceholder.typicode.com/users), crie uma classe Cliente cliente que retorne os seguintes pontos:

1.  Um array com o nome de todos os usuários que tem um email terminado com .biz
2.  Username e company name de todos os usuários na forma de um objeto {user: string, company: string}

Exemplo da saída do jsonplaceholder

```
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
]
```

# Conteúdos

Este treinamento aborda os seguintes conteúdos:

- [Test Driven Development](https://dl.acm.org/doi/10.5555/579193)
- [Design Pattern Adapter](https://refactoring.guru/design-patterns/adapter)
- [Design Pattern Factory](https://refactoring.guru/design-patterns/factory-method)
- [Design Pattern Facade](https://refactoring.guru/design-patterns/facade)
- [Mutation Tests](https://stryker-mutator.io/)

# Instalação

To install this project, run the following commands:

```
$ git clone https://github.com/lucsimao/testlink-facade-api
```

- For npm users

```
  $ npm install
  $ npm start
```

- For yarn users:

```
$ yarn install
$ yarn start
```

# Testes

To execute this project tests, you must run the following commands:

- **Unit Tests**

  ```
  $ npm run test:unit
  ```

  or

  ```
  $ yarn test:unit
  ```

- **Functional Tests**

```
$ npm run test:functional
```

```
$ yarn test:functional
```

- **Lint**

```
$ npm run lint
```

or

```
$ yarn lint
```

- **Style Check**
  `` npm run style:check`  ``npm run style:fix`or`yarn style:check` `yarn style:fix`

- **All Tests**
  ```npm test`
  or
  `yarn test`

# Tecnologias

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

In this project, we used the following technologies:

- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)- Text editor with following plugins installed: [DotENV](https://github.com/mikestead/vscode-dotenv), [ESLint](https://github.com/Microsoft/vscode-eslint), [GitLens](https://github.com/eamodio/vscode-gitlens) e [vscode-icons](https://github.com/vscode-icons/vscode-icons).
- [Jest](https://jestjs.io/) - Javascript Test Framework.
- [ESLint](https://github.com/eslint/eslint) - ESLint to padronize the project code.
- [Prettier](https://prettier.io/) - To format code automatically.
- [Stryker](https://stryker-mutator.io/docs/General/dashboard/) - To run mutation tests in project and use mutation badges.

# Referências

Cursos

- [Waldemar Neto - DO ZERO A PRODUÇÃO: APRENDA A CONSTRUIR UMA API NODE.JS COM TYPESCRIPT ](https://github.com/waldemarnt/node-typescript-api)
- [Rodrigo Manguinho - NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID](https://www.udemy.com/course/tdd-com-mango/)
- [@brunohafonso95](https://github.com/brunohafonso95)
- [Glaucia Lemos - Curso Typescript Zero To Hero](https://github.com/glaucia86/curso-typescript-zero-to-hero)
- [Alura - Formação Node JS](https://cursos.alura.com.br/formacao-node-js-12)
- [NodeJS Integration Test Best Practices](https://github.com/testjavascript/nodejs-integration-tests-best-practices)
- [NodeJS Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Javascript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

Livros

- [1999. <i>Refactoring: improving the design of existing code</i>. Addison-Wesley Longman Publishing Co., Inc., USA.](https://dl.acm.org/doi/10.5555/311424)
- [Beck. 2002. <i>Test Driven Development: By Example</i>. Addison-Wesley Longman Publishing Co., Inc., USA.](https://dl.acm.org/doi/10.5555/579193)
- [Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides. 1995. <i>Design patterns: elements of reusable object-oriented software</i>. Addison-Wesley Longman Publishing Co., Inc., USA.](https://dl.acm.org/doi/book/10.5555/186897)
- [Robert C. Martin. 2008. <i>Clean Code: A Handbook of Agile Software Craftsmanship</i> (1st. ed.). Prentice Hall PTR, USA.](https://dl.acm.org/doi/10.5555/1388398)
- [A. Jefferson Offutt and Ronald H. Untch. 2001. Mutation 2000: uniting the orthogonal. <i>Mutation testing for the new century</i>. Kluwer Academic Publishers, USA, 34–44.](https://dl.acm.org/doi/10.5555/571305.571314)

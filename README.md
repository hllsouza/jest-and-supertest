# Supertest - Jest Sample

**Exemplo de estrutura de automação de API feita com [Supertest](https://www.npmjs.com/package/supertest) e [Jest](https://jestjs.io/pt-BR/)**

- [Instalação e execução](#instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonando o repositório](#clonando-o-repositório)
- [Testes de API](#testes-de-api)
  - [Pré-requisito](#pré-requisito)
  - [Executando os testes](#executando-os-testes)
  - [Resultado](#resultado)
- [Sobre o projeto](#sobre-o-projeto)
  - [Dependências utilizadas](#dependências-utilizadas)
  - [Estrutura de diretórios](#estrutura-de-diretórios)
  - [Ambiente](#ambiente)

---

## Instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/download/), [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/) instalados.

### Clonando o repositório

Todos os comandos abaixo são feitos no terminal

**1** - Faça um clone do repositório e acesse o diretório criado pelo clone.

```sh
cd jest-and-supertest
```

**2** - Instale as dependências do projeto:

```sh
yarn install
```

### Testes de API

Os testes foram realizados em cima do [Serviço de ServeRest](https://serverest.dev/#/).

#### Executando os testes

Caso queira apenas rodar os testes, sem precisar subir ambiente, execute o seguinte comando:

> Os testes serão executados em cima da página [serverest](https://serverest.dev/#/)

```sh
yarn run test:e2e:dev
```

As variáveis por ambiente estão definidos dentro dos arquivos [.env](env).

#### Resultado

O resultado dos testes são apresentados no terminal e em report HTML gerado com [jest-html-reporters](https://www.npmjs.com/package/jest-html-reporters).

<img width="1425" alt="Captura de Tela 2023-01-19 às 09 12 12" src="https://user-images.githubusercontent.com/29413179/213440041-9db044e1-ee6e-4008-92f3-ef3f0c9d23a4.png">
<img width="1792" alt="Captura de Tela 2023-01-19 às 09 14 49" src="https://user-images.githubusercontent.com/29413179/213440547-3cc2d431-665d-4b09-9613-875d1362c298.png">

### Dependências utilizadas
| lib | descrição
| --- | ---
| [Supertest](https://www.npmjs.com/package/supertest) | Biblioteca de automação de API
| [Jest](https://jestjs.io/pt-BR/) | Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade.
| [Jest-Html-Reporters](https://www.npmjs.com/package/jest-html-reporters)| Gera report HTML
| [dotenv](https://www.npmjs.com/package/dotenv-override-cli)| Lib para carregar as variáveis do arquivo .env no diretório de trabalho.

As dependências estão definidas no [package.json](./package.json).

### Estrutura de diretórios

```
ze-e2e-api-jest-supertest/
 ├─ .reports/
 |   ├─ jest-html-reporters-attach/e2e-report
 |      ├─ index.js
 |      └─ result.js 
 |   └─ e2e-report.html
 ├─ src/
 |   ├─ __tests__/
 |       ├─ e2e
 |          ├─ __config__
 |               ├─ settings.ts
 |          └─ user
 |               ├─ user.test.ts
 |   └─ service/
 |        ├─ user-service.ts
 ├─ .env.dev
 ├─ .gitignore
 ├─ jest.config.ts
 ├─ package.json
 └─ tsconfig.json
```

- :file_folder: [.reports/](reports): Dir com o relatório dos resultados do teste
- :file_folder: [src/](__tests__): Dir com os testes das rotas e arquivos que auxiliam a automação
  - :file_folder: [e2e/config](e2e/__config__) Dir com arquivos de configuração para carregar a url de acordo com o arquivo de variável de ambiente.
    - :page_with_curl: [settings.ts](src/__tests__/e2e/__config__/settings.ts) Arquivo que contém as configurações para carregar url de com o arquivo de variável de ambiente.
  - :file_folder: [e2e/user]e2e/user): Dir com os testes da rota __user__. O nome do diretório sempre será o da rota validada.
    - :page_with_curl: [user.test.ts](src/__tests__/e2e/user/user.test.ts) Arquivo de teste do verbo GET
- :page_with_curl: [.env.dev](.env.dev): Arquivo que contém variáveis de ambiente de desenvolvimento
- :page_with_curl: [jest.config.ts](jest.config.ts): Arquivo de configuração do [Jest](https://jestjs.io/pt-BR/)
- :page_with_curl: [package.json](package.json): Arquivo com informações das dependências do projeto, licença, scripts, autor, etc. Para saber mais [clique aqui](https://docs.npmjs.com/files/package.json)
- :page_with_curl: [tsconfig.json](tsconfig.json): Arquivo de configuração para typesscript.

### Ambiente

Determinados testes possuem dados atrelados a ambiente, como URL, que varia entre ambiente local, de homologação, produção, etc. Para isso é utilizada a lib [dotenv](https://www.npmjs.com/package/dotenv-override-cli) para gerenciar as variáveis de ambientes diferentes.

Para informar em qual ambiente o seu teste irá rodar, informe em `dotenv`, no script de teste, o nome inicial do arquivo de conf.

##### Exemplo:

Para testar o ambiente `local` deve ser criado o arquivo `.env.local` e o comando de execução fica igual a `dotenv -e ./.env.local -- jest`

#### Scripts atuais do [package.json](package.json)

``` json
"scripts": {
  "test:e2e:dev": "dotenv -e ./.env.dev -- jest --testTimeout 15000"
},
```

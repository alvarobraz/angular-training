
<p align="center">
  Aplicação em Angular/TypeScript - Transações financeiras 🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/alvarobraz/angular-training"/>

  <a href="https://www.udemy.com/?">
    <img alt="Made by Udemy" src="https://img.shields.io/badge/made%20by-Udemy-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/alvarobraz/">
    <img alt="Made by alvarobraz" src="https://img.shields.io/badge/made%20by-alvarobraz-%237519C1">
  </a>

  <a href="https://github.com/alvarobraz/angular-training/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alvarobraz/angular-training">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/alvarobraz/angular-training">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#angular-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#estrutura">Estrurura</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a>
</p>

<br>

## :dart: Sobre ##

Este projeto de transações financeiras foi desenvolvido utilizando Angular CLI 16.X. Ele oferece a funcionalidade de salvar transações financeiras, permitindo a definição se são do tipo entrada ou saída. Além disso, proporciona recursos de edição, exclusão e listagem das transações. No âmbito do Angular, foram aplicados conceitos básicos à avançados, tais como:

+ **Data Binding:** Sincronização eficiente de dados entre a interface do usuário e o modelo.
+ **Environments:** Ambientes configurados para diferentes estágios de desenvolvimento.
+ **Services para Injeção de Dependências:** Utilização de serviços para uma gestão eficaz de dependências.
+ **HttpClient e Observable:** Integração com APIs através do HttpClient e observáveis para tratamento de assincronia
+ **Diretivas Estruturais e de Atributos:** Manipulação dinâmica da estrutura e do estilo dos componentes.
+ **Pipes:** Transformação de dados para apresentação.
+ **Modularização e Componentização:** Organização do projeto em módulos e componentes reutilizáveis.
+ **TypeScript:** Linguagem de programação tipada para desenvolvimento mais robusto.
+ **Comunicação de Dados entre Componentes:** Troca eficiente de informações entre diferentes partes da aplicação.
+ **Reactive Forms com Validators:** Utilização de formulários reativos para validação dinâmica.
+ **Roteamento:** Navegação entre diferentes seções da aplicação.
+ **Getters de Funções para Clean Code:** Utilização de boas práticas para um código limpo e legível.
+ **Snackbar para Alertas e Modal:** Exibição de alertas e modais para uma experiência do usuário mais amigável.
+ **Reducers e Maps:** Manipulação eficaz de estados e coleções de dados.


Um projeto desenvolvido com dedicação e paixão!  

Dev Mais Ágeis

## :angular: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [Angular](https://angular.io/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [@angular/forms](https://angular.io/guide/forms-overview)
- [@angular/material](https://material.angular.io/)

## Estrutura ##
```
.
├── angular.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── model
│   │   │   └── types.ts
│   │   ├── pages
│   │   │   ├── description
│   │   │   │   ├── description.component.html
│   │   │   │   ├── description.component.scss
│   │   │   │   └── description.component.ts
│   │   │   └── home
│   │   │       ├── home.component.html
│   │   │       ├── home.component.scss
│   │   │       └── home.component.ts
│   │   ├── services
│   │   │   └── transactions.service.ts
│   │   ├── shared
│   │   │   ├── alerts
│   │   │   │   ├── alerts.component.html
│   │   │   │   ├── alerts.component.scss
│   │   │   │   └── alerts.component.ts
│   │   │   ├── header
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.scss
│   │   │   │   └── header.component.ts
│   │   │   ├── modal
│   │   │   │   ├── modal.component.html
│   │   │   │   ├── modal.component.scss
│   │   │   │   ├── modal.component.ts
│   │   │   │   └── transaction-type-button
│   │   │   │       ├── transaction-type-button.component.html
│   │   │   │       ├── transaction-type-button.component.scss
│   │   │   │       └── transaction-type-button.component.ts
│   │   │   ├── search
│   │   │   │   ├── search.component.html
│   │   │   │   ├── search.component.scss
│   │   │   │   ├── search.component.ts
│   │   │   │   └── search-form
│   │   │   │       ├── search-form.component.html
│   │   │   │       ├── search-form.component.scss
│   │   │   │       └── search-form.component.ts
│   │   │   └── summary
│   │   │       ├── summary-card
│   │   │       │   ├── summary-card.component.html
│   │   │       │   ├── summary-card.component.scss
│   │   │       │   └── summary-card.component.ts
│   │   │       ├── summary.component.html
│   │   │       ├── summary.component.scss
│   │   │       └── summary.component.ts
│   │   └── utils
│   │       └── utils.ts
│   ├── assets
│   │   └── logo.svg
│   ├── config-scss
│   │   ├── reset.scss
│   │   └── variables.scss
│   ├── environments
│   │   ├── environment.development.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json


```

## :white_check_mark: Requerimentos ##

- [Angular](https://v14.angular.io/docs)
- [Node.js](https://nodejs.org/docs/latest-v14.x/api/cli.html)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/alvarobraz/angular-training

# Version Node.js
$ nvm use 16.14.1

# Access
$ cd angular-training

# Install dependencies
$ npm install

# Run the project
$ ng server

# The server will initialize in the <http://localhost:4200/>
```

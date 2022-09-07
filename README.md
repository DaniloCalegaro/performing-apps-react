# Performando Apps ReactJS
![GitHub repo size](https://img.shields.io/github/repo-size/DaniloCalegaro/performing-apps-react)

### Tabela de conteúdos

- [Performando Apps ReactJS](#performando-apps-reactjs)
    - [Tabela de conteúdos](#tabela-de-conteúdos)
  - [Visão Geral](#visão-geral)
    - [A Página](#a-página)
    - [Recursos utilizados](#recursos-utilizados)
  - [Pré-requisitos](#pré-requisitos)
  - [Autor](#autor)

## Visão Geral
### A Página

Pagina simples para estudo de performance em ReactJS com consumo de uma lista de 1000 pessoas e seus respectivos países.

Para consumo desta lista foram utilizados `json-server` juntamente com a biblioteca `@faker-js/faker` para gerar nomes e países aleatórios. 

E para estudos temos:
- `useMemo` que só recuperará o valor memorizado quando o array receber uma atualização e está otimização ajuda a evitar cálculos caros em cada renderização.
  
- `Memo` terá um aumento no desempenho em alguns casos, através da memorização do resultado. Isto significa que o React vai pular a renderização do componente e reutilizar o último resultado renderizado, mais para isso ele irá fazer uma comparação superficialmente nos objetos nos props.
  
- `useCallback` retornará uma versão memorizada do callback que só muda se uma das entradas tiverem

### Recursos utilizados

- [yarn](https://yarnpkg.com/) - Gerenciador de pacotes do projeto.
- [NextJS](https://nextjs.org/) - Framework React.
- [TypeScrip](https://www.typescriptlang.org/) - Uma linguagem de programação fortemente tipada que se baseia em JavaScript.
- [React Hooks](https://pt-br.reactjs.org/docs/hooks-reference.html) - Eles permitem que você use o state e outros recursos do React sem escrever uma classe

## Pré-requisitos


Para executar o projeto *local* utilizamos os comandos após realizar o download ou clone do repositório:

Instalar a dependencias do projeto:

> yarn install

Em um novo terminar iniciamos o json-server que será montado no [http://localhost:3333/users](http://localhost:3333/users)

> yarn server

Logo em seguida para executarmos a aplicação:

> yarn run dev


E a aplicação estará pronta para ser visualizada no endereço [http://localhost:3000](http://localhost:3000).


## Autor

Portfólio - [danilocalegaro.dev.br](https://danilocalegaro.dev.br/)
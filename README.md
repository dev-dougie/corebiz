# Corebiz - Teste Front-End 💻

## Tecnologias utilizadas 🔧

<ul>
  <li>HTML5 + CSS3 (Sass)</li> 
  <li>ReactJS + NextJS</li>
</ul>


## Como visualizar o projeto? 👀

Obs.: Antes de iniciar, certifique-se de que o git, NodeJS e preferencialmente ( "npm" também funciona ), o gerenciador de pacotes Yarn estão devidamente instalados.
Você pode realizar o download desses carinhas aqui: [GIT](https://git-scm.com/) [NODE](https://nodejs.org/en/) [YARN](https://yarnpkg.com/cli/install)

👉 1 - Realize o clone deste repositório em um diretório de sua preferência:

```bash
git clone https://github.com/dev-dougie/corebiz/
```
👉 2 - Após o primeiro procedimento, vá até a raíz do projeto, abra o terminal e instale a depedência de desenvolvimento necessária. 
Este pacote, simula o servidor de produtos da aplicação com os dados já formatados.

```bash
yarn add server-json -D
```
👉 3 - Instale o Next. Ele será responsável por renderizar o a página no lado do servidor. Você pode saber mais sobre este tipo de arquitetura nesse link [aqui](https://medium.com/techbloghotmart/o-que-%C3%A9-server-side-rendering-e-como-usar-na-pr%C3%A1tica-a840d76a6dca)
```bash
yarn add next
```
👉 4 - Após a instalação do Next, rode o projeto em sua máquina.(Não se esqueça de iniciar aquele servidor lá da 2º etapa)
```bash
yarn server
```
```bash
yarn dev
```

<h4>Mas calma lá, e se você quiser simular o site em produção? 🤔</h4>

É simples! Primeiro temos que buildar nosso projeto. 
```bash
yarn build
```
Agora é hora de iniciar o projeto simulando um ambiente de produção:
```bash
yarn start
```

Pronto! 🚀

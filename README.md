<h1 align="center">NLW Heat</h1>

A nlw-node_heat api serve dados à interface [nlw-react_heat](https://github.com/deivisonresende/nlw-react_heat). Estão listados os casos de uso / serviços atendidos por ela:


- Autenticar-se através do OAuth GitHub:
> POST - localhost:4000/authenticate

- Criar uma mensagem:
> POST - localhost:4000/messages

- Recuperar as últimas 3 mensagens (últimas 3 mensagens geral, não somente do usuário atual):
> GET - localhost:4000/messages/last3

- Recuperar dados do usuário:
> GET - localhost:4000/profile


## Tecnologias

Tecnologias utilizadas neste projeto:

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Utilização

- Clone o repositório;
- Faça uma copia do arquivo `.env.example` para `.env` e preencha com as suas credenciais do GitHub;
- Instale as dependências com `yarn` ou `npm install`;
- Executa as migrations com `yarn prisma migrate dev`;
- Inicie o servidor com `yarn dev`;
- Para uma melhor experiência em manipular o banco de dados, utilize a interface gráfica do prisma `yarn run prisma studio` 

A aplicação pode ser acessada em [`localhost:4000`](http://localhost:4000).

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ♥ by Rocketseat 👋🏻 &nbsp;[Participe da nossa comunidade!](https://discord.gg/Jq3mFeGK)

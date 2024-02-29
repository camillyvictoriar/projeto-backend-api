---

# API CRUD para Lista de Mulheres em Node.js

Esta é uma API CRUD (Create, Read, Update, Delete) simples desenvolvida em JavaScript e Node.js para gerenciar uma lista de mulheres.

## Sobre a API

Esta API permite realizar operações básicas de CRUD em uma lista de mulheres, incluindo adicionar novas mulheres, recuperar informações sobre mulheres existentes, atualizar os dados de mulheres existentes e excluir mulheres da lista.

## Funcionalidades

- **Listar Mulheres**: Retorna uma lista de todas as mulheres cadastradas.
- **Adicionar Mulher**: Adiciona uma nova mulher à lista.
- **Atualizar Mulher**: Atualiza os dados de uma mulher existente na lista.
- **Excluir Mulher**: Remove uma mulher da lista.

## Tecnologias Utilizadas

- Node.js
- MongoDB
  
## Como Usar

1. Clone este repositório para o seu computador.
2. Instale as dependências usando o comando `npm install`.
3. Configure o banco de dados de acordo com suas preferências (por exemplo, MongoDB).
4. Inicie o servidor usando o comando `npm start`.
5. Acesse os endpoints da API utilizando uma ferramenta como Postman ou um navegador web.

## Endpoints

- **GET /mulheres**: Retorna todas as mulheres cadastradas.
- **GET /mulheres/:id**: Retorna os detalhes de uma mulher específica.
- **POST /mulheres**: Adiciona uma nova mulher à lista.
- **PUT /mulheres/:id**: Atualiza os dados de uma mulher específica.
- **DELETE /mulheres/:id**: Remove uma mulher da lista.

## Contribuição

Se você deseja contribuir para este projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça commit de suas alterações (`git commit -am 'Adicionando nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

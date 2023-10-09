# wet-bat-challenge

Wet Bat World Adventure - Protótipo Full-Stack

Bem-vindo ao protótipo full-stack do Wet Bat World Adventure. Este é um projeto de exemplo que demonstra a criação de um aplicativo web com funcionalidades de CRUD (Create, Read, Update, Delete) usando TypeScript, React, Node.js, PostgreSQL, Chakra UI e Styled Components. 

Pré-requisitos

Certifique-se de ter as seguintes ferramentas e tecnologias instaladas em seu sistema:

    Node.js: versão 14 ou superior.
    npm: normalmente é instalado automaticamente com o Node.js.
    PostgreSQL: um servidor PostgreSQL instalado e em execução.
    

Configuração do Banco de Dados

    Crie um banco de dados PostgreSQL chamado wetbat_db.

    Copie o arquivo .env.example para .env e atualize as variáveis de ambiente com as informações do seu banco de dados:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=wetbat_db
```

Execute as migrações para criar as tabelas necessárias no banco de dados:

    npx knex migrate:latest

Configuração do Backend

    Navegue até o diretório backend:
    cd api

Instale as dependências do backend:


    npm install

Inicie o servidor backend:

    npm start

O servidor backend estará em execução em http://localhost:3333.

Configuração do Frontend

    Navegue até o diretório frontend:

    cd web

Instale as dependências do frontend:

    npm install

Inicie o servidor de desenvolvimento do frontend:

    npm start

O aplicativo frontend estará em execução em http://localhost:3000.
Uso

Você pode usar o aplicativo para criar, visualizar e excluir citações de viagem. Certifique-se de que o servidor backend esteja em execução antes de usar o aplicativo.

Estrutura do Projeto

    backend: Contém o código do servidor Node.js usando Express e Knex para interagir com o banco de dados PostgreSQL.

    frontend: Contém o código do aplicativo frontend React, estilizado com Chakra UI e Styled Components.

![image](https://github.com/micaellimedeiros/wet-bat-challenge/assets/54600663/a67f8060-a02c-439e-a3e6-9be2a300710f)


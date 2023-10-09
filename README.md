# wet-bat-challenge

Wet Bat World Adventure - Full-Stack Prototype

Welcome to the Wet Bat World Adventure full-stack prototype. This is an example project that demonstrates the creation of a web application with CRUD (Create, Read, Update, Delete) functionalities using TypeScript, React, Node.js, PostgreSQL, Chakra UI and Styled Components.

Prerequisites

Make sure you have the following tools and technologies installed on your system:

    Node.js: version 14 or higher.
    npm: Typically installed automatically with Node.js.
    PostgreSQL: An installed and running PostgreSQL server.
    

Database Configuration

    Create a PostgreSQL database called wetbat_db.

    Copy the .env.example file to .env and update the environment variables with your database information:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=wetbat_db
```

Run the migrations to create the tables allowed in the database:

    npx knex migrate:latest

Backend Configuration

    Navigate to the backend directory:
    cd api

Install backend dependencies:


    npm install

Start the server backend:

    npm start

The backend server will be running at http://localhost:3333.

Frontend Configuration

    Navigate to the frontend directory:

    cd web

Install frontend dependencies:

    npm install

Start the frontend development server:

    npm start

The frontend application will run at http://localhost:3000.

You can use the app to create, view and delete travel restrictions. Make sure the server is running before using the application.You can use the app to create, view and delete travel restrictions. Make sure the server is running before using the application.

Project Structure

    backend: Contains Node.js server code using Express and Knex to interact with the PostgreSQL database.

    frontend: Contains the React frontend application code, styled with Chakra UI and Styled Components.

![image](https://github.com/micaellimedeiros/wet-bat-challenge/assets/54600663/a67f8060-a02c-439e-a3e6-9be2a300710f)


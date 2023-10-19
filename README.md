<div align="center">
    <img src="https://github.com/micaellimedeiros/wet-bat-challenge/assets/54600663/780f8569-a505-4af9-9c15-3e7f8904dcca">
</div>

# Wet Bat World Adventure - Full-Stack Prototype

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [API Endpoints](#api-endpoints)
5. [Structure decisions](#structure-decisions)

## 💻 Live Demo
<i>A live demo of the Wet Bat Travel Agency prototype is available at [https://wet-bat-client.onrender.com](https://wet-bat-client.onrender.com). Please note that the demo is hosted using free tier services, so performance and availability may vary.</i>

## Project Overview

Welcome to the Wet Bat World Adventure full-stack prototype. This is an example project that demonstrates the creation of a web application with Create, Read, Delete functionalities using TypeScript, React, Node.js, PostgreSQL, Chakra UI and Styled Components.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Knex.js (SQL Query Builder)
- Axios (HTTP client)
- React
- Styled-Components
- Chakra UI
- React Router DOM

## Getting Started

Make sure you have the following tools and technologies installed on your system:

    Node.js: version 14 or higher.
    npm: Typically installed automatically with Node.js.
    PostgreSQL: An installed and running PostgreSQL server.

Database Configuration

    Create a PostgreSQL database called wetbat_db.
    Copy the .env.example file to .env and update the environment variables with your database information:

```
DB_URL= 'postgres://docker:docker@localhost/app'
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

You can use the app to create, view and delete travel restrictions. Make sure the server is running before using the application.

## Project Structure

    backend: Contains Node.js server code using Express and Knex to interact with the PostgreSQL database.
    frontend: Contains the React frontend application code, styled with Chakra UI and Styled Components.

```markdown
wet-bat/
│
├── api/ # Node.js server
│ ├── src/ # Backend source code
│ ├── migrations/ # Database migration scripts
│ ├── seeds/ # Database seed data
│
│
├── web/ # React frontend
│ ├── src/ # Frontend source code
│ ├── components/ # Frontend components
│
├──
```

## API Endpoints

The server provides the following API endpoints:

    GET /api/quotes: Get a list of all quotes.
    GET /api/quotes/:id: Get details of a specific quote.
    POST /api/quotes: Create a new quote.
    DELETE /api/quotes/:id: Delete a quote.

## Structure decisions:

<b>Full-Stack Application:</b>

- The decision was made to build a full-stack application, consisting of both a backend and a frontend. This approach allows for a clear separation of concerns, where the backend handles data storage and retrieval, while the frontend focuses on the user interface and interaction.

<b>Backend Architecture:</b>

- The backend of the application is structured using a modular architecture. It includes separate modules for routes, controllers, services, and database interactions. This separation of concerns makes the codebase more organized and maintainable.

<b>Database Schema:</b>

- A relational database (PostgreSQL) was chosen as the data store. The database schema was designed to support the application's data requirements, including storing quotes, client information, and other relevant data. Knex.js was used for database schema creation and migrations.

<b>Frontend Framework:</b>

- React was selected as the frontend framework. It is a popular choice for building dynamic and responsive user interfaces. Chakra UI and Styled Components were used for styling to ensure a consistent and visually appealing design.

<b>State Management:</b>

- The application employs local state management in the frontend, which is suitable for the project's size and complexity. For more extensive applications, global state management solutions like Redux or MobX might be considered.

<b>Routing:</b>

- React Router was chosen for client-side routing in the frontend. It enables navigation between different views or pages within the application and is well-suited for single-page applications (SPAs).

<b>API Communication:</b>

- Axios, a popular HTTP client for JavaScript, was used to make API requests from the frontend to the backend. Axios simplifies the process of sending HTTP requests and handling responses.

<b>UI Component Library:</b>

- Chakra UI was selected as the UI component library for the frontend. It provides a set of customizable and accessible UI components that helped in building a user-friendly interface quickly.

<b>Version Control:</b>

- The codebase is managed using Git, and the project is hosted on a version control platform like GitHub. This allows for collaborative development, easy tracking of changes, and code version history.

<b>Environment Variables:</b>

- Sensitive information like database credentials and API keys is stored securely in environment variables (e.g., using a .env file) to maintain security best practices.

<b>Error Handling:</b>

- Proper error handling and validation were implemented in both the backend and frontend to provide informative feedback to users and ensure data consistency and security.

![wet-bat](https://github.com/micaellimedeiros/wet-bat-challenge/assets/54600663/875a447a-5751-4a5c-95fa-8403c5615204)


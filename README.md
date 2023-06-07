# UsersDashboard

## Server Dependencies (`package.json`):

-   **`bcryptjs`**: A library for hashing and salting passwords to ensure secure storage.
-   **`concurrently`**: A tool for running multiple commands concurrently, typically used for running the server and client simultaneously during development.
-   **`cookie-parser`**: Middleware for parsing HTTP cookies in the server.
-   **`debug`**: A debugging utility for server-side development.
-   **`dotenv`**: Loads environment variables from a `.env` file into `process.env`.
-   **`express`**: A popular web application framework for Node.js.
-   **`jsonwebtoken`**: Library for generating and verifying JSON Web Tokens (JWT) used for authentication and authorization.
-   **`mongoose`**: An object modeling library for MongoDB that provides a simple way to interact with the database.
-   **`morgan`**: HTTP request logger middleware for the server.
-   **`passport`**: Authentication middleware for Node.js that supports various authentication strategies.
-   **`passport-jwt`**: Passport strategy for authenticating with a JSON Web Token (JWT).
-   **`validator`**: A library for data validation, useful for validating user input.

## Client Dependencies (`package.json`):

-   `@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/user-event`: Libraries for testing React components.
-   `axios`: A library for making HTTP requests from the client to the server.
-   `classnames`: A utility for conditionally joining class names together.
-   `jwt-decode`: Library for decoding JSON Web Tokens (JWT) on the client-side.
-   `react`: A JavaScript library for building user interfaces.
-   `react-dom`: Provides DOM-specific methods for React components.
-   `react-redux`: Official Redux bindings for React, used for managing application state.
-   `react-router-dom`: Library for routing and navigation in React applications.
-   `react-scripts`: Configuration and scripts for creating React applications.
-   `redux`: A predictable state container for JavaScript apps.
-   `redux-devtools-extension`: Integration with the Redux DevTools extension for browser-based debugging.
-   `redux-thunk`: Middleware for Redux that allows writing asynchronous logic.
-   `web-vitals`: Library for measuring real user website performance.



## In summary

This React project consists of a server component built with Express and MongoDB for handling user management and authentication, and a client component built with React, Redux, and React Router for creating a user dashboard interface. The server handles authentication using JWT, and the client communicates with the server using Axios for API requests.

## Server

> npm intsall
>npm run dev

## Client

>npm install
npm start

## Together (concurrently)

>npm run dev


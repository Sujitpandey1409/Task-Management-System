# Task Manager API

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file with the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Run `npm run dev` to start the server

## Endpoints

### User Endpoints

- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Authenticate a user and get a token

### Task Endpoints

- `POST /api/tasks`: Create a new task (Authenticated)
- `GET /api/tasks`: Get all tasks (Authenticated)
- `GET /api/tasks/:id`: Get a task by ID (Authenticated)
- `PUT /api/tasks/:id`: Update a task (Authenticated)
- `DELETE /api/tasks/:id`: Delete a task (Authenticated)

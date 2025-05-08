# Express.js Notes App

A simple REST API for managing notes, built with Express.js and MongoDB.

## Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)

## Features

- Create, read, update, and delete notes.
- Uses MongoDB for data storage.
- Built with Express.js for routing and middleware.
- Written in TypeScript for type safety.
- Uses `dotenv` for managing environment variables.
- Uses `nodemon` for automatic server restarts during development.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version >= 12)
- [MongoDB](https://www.mongodb.com/) (running locally or accessible remotely)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd expressJs
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Configure environment variables:

    - Create a `.env` file in the root directory of the project.
    - Add the following variables to the `.env` file:

      ```
      PORT=8000
      MONGO_URI=mongodb://127.0.0.1:27017/notes_app
      ```

      - `PORT`: The port the server will listen on (default: 8000).
      - `MONGO_URI`: The connection string for your MongoDB database. If running MongoDB locally with the default settings, the provided value should work. Otherwise, update this value with your MongoDB connection string.

### Running the App

1.  Build the TypeScript code:

    ```bash
    npm run build
    ```

2.  Start the server:

    ```bash
    npm run dev
    ```

    This will start the server using `nodemon`, which will automatically restart the server whenever you make changes to the code.

3.  Access the API:

    The API will be available at `http://localhost:8000/notes`.

## API Endpoints

- `GET /notes`: Get all notes.
- `GET /notes?id=<note_id>`: Get a specific note by ID.
- `POST /notes`: Create a new note.
- `PUT /notes?id=<note_id>`: Update an existing note.
- `DELETE /notes?id=<note_id>`: Delete a note.

## Notes

- The `index.js` file is no longer needed and can be removed.
- The `notes.json` file is used for storing example notes.

## License

MIT

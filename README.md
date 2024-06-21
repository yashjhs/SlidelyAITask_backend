# Backend Server for Submissions

This repository contains the code for a backend server built with Express and TypeScript. The server handles form submissions, provides endpoints to submit, and read submissions, and stores data in a JSON file.

## Features

- **Ping Endpoint**: Check if the server is running.
- **Submit Endpoint**: Submit a new form with details such as name, email, phone number, GitHub link, and stopwatch time.
- **Read Endpoint**: Retrieve form submissions based on an index.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js Official Site](https://nodejs.org/).

## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. **Install Dependencies**:

    Navigate to the project directory and install the required dependencies using npm:

    ```bash
    npm install
    ```

## Running the Server

1. **Build the TypeScript Code**:

    Compile the TypeScript files into JavaScript:

    ```bash
    npm run build
    ```

2. **Start the Server**:

    Start the server using the following command:

    ```bash
    npm start
    ```

    The server will start running on `http://localhost:3000`.

## API Endpoints

### Ping

- **Description**: Check if the server is running.
- **Endpoint**: `/ping`
- **Method**: `GET`
- **Response**: `true` if the server is running.

    ```bash
    curl http://localhost:3000/ping
    ```

### Submit

- **Description**: Submit a new form.
- **Endpoint**: `/submit`
- **Method**: `POST`
- **Parameters**:
  - `name`: The name of the submitter.
  - `email`: The email of the submitter.
  - `phone`: The phone number of the submitter.
  - `github_link`: The GitHub repository link.
  - `stopwatch_time`: The recorded stopwatch time.

    ```bash
    curl -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d '{
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "github_link": "https://github.com/johndoe",
      "stopwatch_time": "00:05:00"
    }'
    ```

### Read

- **Description**: Retrieve a submission by its index.
- **Endpoint**: `/read`
- **Method**: `GET`
- **Parameters**:
  - `index`: The 0-based index of the submission to retrieve.

    ```bash
    curl "http://localhost:3000/read?index=0"
    ```

## File Structure

- `src/`: Contains the TypeScript source code.
- `db.json`: The JSON file used to store submissions.
- `package.json`: Contains project metadata and dependencies.
- `tsconfig.json`: TypeScript configuration file.

## Running the Server Locally

To run the server on your local machine:

1. Ensure you have completed the **Installation** steps.
2. Build the project using:

    ```bash
    npm run build
    ```

3. Start the server using:

    ```bash
    npm start
    ```

The server will be accessible at `http://localhost:3000`.

## Troubleshooting

- Ensure that `db.json` exists in the project root directory. If it doesn't, create an empty `db.json` file and populate it with an empty array:

    ```json
    []
    ```

- Ensure all dependencies are installed correctly. If you encounter issues, try deleting `node_modules` and `package-lock.json`, then re-running `npm install`.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

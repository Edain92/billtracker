# BillTracker

BillTracker is a **work-in-progress** full-stack application designed to help users manage and track their bills efficiently. The project is divided into a **frontend** and a **backend**, orchestrated using Docker Compose, ensuring a seamless development and deployment experience. Currently, active development is underway to implement core features and functionalities.

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Docker](https://img.shields.io/badge/docker-supported-blue)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-404D59?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646C9A?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)


## Table of Contents

- [BillTracker](#billtracker)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies](#technologies)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [DevOps](#devops)
  - [Project Structure](#project-structure)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
    - [Description](#description)
  - [Running the Application](#running-the-application)
  - [Scripts](#scripts)
    - [Frontend](#frontend-1)
    - [Backend](#backend-1)
  - [Contributing](#contributing)
  - [License](#license)

## Features

**[WIP]**

## Technologies

### Frontend

- **React:** UI library for building interactive user interfaces.
- **Redux:** State management library.
- **Vite:** Fast build tool for modern web projects.
- **React-Redux & @reduxjs/toolkit:** Simplify Redux usage.

### Backend

- **Node.js:** JavaScript runtime.
- **Express:** Web framework for Node.js.
- **TypeORM:** ORM for managing PostgreSQL interactions.
- **PostgreSQL:** Relational database system.

### DevOps

- **Docker:** Containerization platform.
- **Docker Compose:** Tool for defining and managing multi-container Docker applications.

## Project Structure

```plaintext
/billtracker
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── entities
│   │   ├── routes
│   │   └── index.js
│   ├── ormconfig.json
│   ├── package.json
│   └── Dockerfile
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── store
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
├── .env
├── .gitignore
└── README.md
```

## Prerequisites

- **Docker:** [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose:** [Install Docker Compose](https://docs.docker.com/compose/install/)
- **Git:** [Install Git](https://git-scm.com/downloads)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/tu-usuario/billtracker.git
   cd billtracker
   ```

2. **Create Environment Variables**

   Create a `.env` file in the root directory and add the necessary configurations. Refer to the [Environment Variables](#environment-variables) section for details.

3. **Build and Run Containers**

   ```bash
   docker-compose up --build
   ```

   This command will build the Docker images and start the containers for the frontend, backend, and PostgreSQL database.

## Environment Variables

Create a `.env` file in the root of your project with the following variables:

```dotenv
# General
NODE_ENV=

# Ports
FRONTEND_PORT=
BACKEND_PORT=
DB_PORT=

# Database Configuration
DB_HOST=db
DB_USER=
DB_PASSWORD=
DB_NAME=billtracker
```

### Description

- **NODE_ENV:** Defines the environment (`development`, `production`, etc.).
- **FRONTEND_PORT:** Port for the frontend application.
- **BACKEND_PORT:** Port for the backend server.
- **DB_HOST:** Host for the PostgreSQL database.
- **DB_PORT:** Port for the PostgreSQL database.
- **DB_USER:** Username for the PostgreSQL database.
- **DB_PASSWORD:** Password for the PostgreSQL user.
- **DB_NAME:** Name of the PostgreSQL database.

## Running the Application

1. **Start All Services**

   From the root directory:

   ```bash
   docker-compose up --build
   ```

2. **Access the Application**

   - **Frontend:** [http://localhost:3000](http://localhost:3000)
   - **Backend API:** [http://localhost:5000](http://localhost:5000)

3. **Stopping the Services**

   ```bash
   docker-compose down
   ```

## Scripts

### Frontend

Located in `frontend/package.json`:

- **Start Development Server**

  ```bash
  npm run dev
  ```

- **Build for Production**

  ```bash
  npm run build
  ```

- **Preview Production Build**

  ```bash
  npm run serve
  ```

### Backend

Located in `backend/package.json`:

- **Start Server**

  ```bash
  npm run start
  ```

- **Start Development Server with Nodemon**

  ```bash
  npm run dev
  ```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/new-feature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add new feature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/new-feature
   ```

5. **Open a Pull Request**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
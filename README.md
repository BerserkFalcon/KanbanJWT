# Krazy Kanban Board

A full-stack Kanban board application with JWT authentication, built with React, Express, Sequelize, and PostgreSQL.

---

## Features

- User authentication with JWT
- Create, edit, and delete Kanban tickets
- Drag-and-drop ticket management (if implemented)
- Responsive, modern UI
- PostgreSQL database with Sequelize ORM

---

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

---

### Local Development

#### 1. Clone the repository

```sh
git clone https://github.com/yourusername/KanbanJWT.git
cd KanbanJWT
```

#### 2. Install dependencies

```sh
cd server
npm install
cd ../client
npm install
```

#### 3. Set up environment variables

Create a `.env` file in the `server` directory:

```
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET_KEY=your_jwt_secret
```





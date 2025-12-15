# SoulSpace Backend

The backend server for SoulSpace, providing API endpoints for user authentication, journal entries, reading history, and user statistics.

## Tech Stack

-   **Runtime**: Node.js
-   **Framework**: Express.js
-   **ORM**: Prisma (v5)
-   **Database**: PostgreSQL
-   **Authentication**: JSON Web Tokens (JWT) & bcrypt

## Prerequisites

-   Node.js (v18+)
-   PostgreSQL Database

## Setup Instructions

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Environment Configuration**
    Create a `.env` file in this directory with the following variables:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/soulspace"
    JWT_SECRET="your-secret-key-change-this"
    PORT=3001
    ```

3.  **Database Migration**
    Run Prisma migrations to set up your database schema:
    ```bash
    npx prisma migrate dev --name init
    ```

## Scripts

-   **Start Development Server**:
    ```bash
    npm run dev
    ```
    Runs with `nodemon` for auto-reloading on changes. Default port: `3001`.

-   **Start Production Server**:
    ```bash
    npm start
    ```

-   **Prisma Studio**:
    ```bash
    npx prisma studio
    ```
    Opens a GUI to view and edit database records.

## API Endpoints

All endpoints start with `/api`. Protected routes require a `Authorization: Bearer <token>` header.

### Authentication
-   `POST /auth/signup` - Create a new account
-   `POST /auth/login` - Login and receive JWT

### User
-   `GET /user/profile` - Get current user profile
-   `PUT /user/stats` - Update user statistics (day count, last visited)

### Journal
-   `GET /journal` - Get user's journal entries
-   `POST /journal` - Create a new journal entry

### Quotes
-   `GET /quotes/history` - Get user's reading history
-   `POST /quotes/history` - Add a quote to history

# SoulSpace

A digital sanctuary for mental wellness, mood tracking, and inner peace.

## Overview

SoulSpace is a full-stack web application designed to help users track their emotional journey, find daily inspiration, and visualize their personal growth through a virtual "Peace Garden".

## Architecture

This project is organized as a monorepo with cleanly separated frontend and backend applications:

-   **Frontend**: Next.js (React) application with Tailwind CSS for styling and Framer Motion for animations.
-   **Backend**: Node.js / Express server using Prisma ORM.
-   **Database**: PostgreSQL.

## Technologies

### Frontend
-   **Framework**: Next.js 14 (App Router)
-   **Styling**: Tailwind CSS
-   **State Management**: React Context (`AuthContext`)
-   **Animations**: Framer Motion
-   **HTTP Client**: Axios

### Backend
-   **Runtime**: Node.js
-   **Framework**: Express.js
-   **ORM**: Prisma (v5)
-   **Authentication**: JSON Web Tokens (JWT) & Bcrypt
-   **Database**: PostgreSQL

## Prerequisites

-   Node.js (v18+)
-   PostgreSQL (Local or Remote instance)

## Getting Started

### 1. Database Setup

Ensure you have a PostgreSQL database running and have the connection string ready.

### 2. Backend Setup

```bash
cd backend
npm install

# Create a .env file
echo "DATABASE_URL=\"postgresql://user:password@localhost:5432/soulspace\"" > .env
echo "JWT_SECRET=\"your-secret-key\"" >> .env
echo "PORT=3001" >> .env

# Run database migrations
npx prisma migrate dev --name init

# Start the server
npm run dev
```
*The backend server runs on `http://localhost:3001`.*

### 3. Frontend Setup

```bash
cd frontend
npm install

# Start the development server
npm run dev
```
*The frontend application runs on `http://localhost:3000`.*

## Key Features

-   **Authentication**: Secure Signup and Login system.
-   **Mood Journal**: Track daily moods and thoughts. Entries are stored securely.
-   **Peace Garden**: Visual representation of your consistency. The garden grows as you visit daily.
-   **Peace Jar**: Get random daily affirmations and quotes.
-   **Reading History**: Save and revisit your favorite quotes.

## Contributing

We welcome contributions! Please check out our [Contribution Guidelines](CONTRIBUTING.md) for details on how to get started, our code of conduct, and the pull request process.

## CI/CD

This project uses **GitHub Actions** for continuous integration. The pipeline automatically:
-   Installs dependencies for both frontend and backend.
-   Runs linting checks on the frontend.
-   Verifies the backend Prisma client generation.
-   Builds the frontend application to ensure deployability.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

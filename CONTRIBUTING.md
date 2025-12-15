# Contributing to SoulSpace

First off, thanks for taking the time to contribute!

The following is a set of guidelines for contributing to SoulSpace. These are just guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

-   [Code of Conduct](#code-of-conduct)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Development Workflow](#development-workflow)
    -   [Backend Development](#backend-development)
    -   [Frontend Development](#frontend-development)
-   [Pull Request Process](#pull-request-process)
-   [Coding Standards](#coding-standards)

## Code of Conduct

This project and everyone participating in it is governed by the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct). By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites

You need to have the following installed on your machine:

-   [Node.js](https://nodejs.org/) (v18+)
-   [PostgreSQL](https://www.postgresql.org/)

### Installation

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** locally:

    ```bash
    git clone https://github.com/your-username/soulspace.git
    cd soulspace
    ```

3.  **Setup the Database**:
    Ensure your PostgreSQL server is running and you have a database created.

4.  **Install Dependencies**:

    *   **Backend**:
        ```bash
        cd backend
        npm install
        ```
    *   **Frontend**:
        ```bash
        cd frontend
        npm install
        ```

## Development Workflow

This project is a monorepo containing both the frontend and backend. You usually need to run both simultaneously for full functionality.

### Backend Development

1.  Navigate to the `backend` directory.
2.  Create a `.env` file based on the example in the README or ask a maintainer for the variables.
3.  Run migrations:
    ```bash
    npx prisma migrate dev
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:3001` (default).

### Frontend Development

1.  Navigate to the `frontend` directory.
2.  Start the development server:
    ```bash
    npm run dev
    ```
    The application will run on `http://localhost:3000`.

## Pull Request Process

1.  Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2.  Update the `README.md` with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3.  Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4.  You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Coding Standards

### Style Guide

-   **JavaScript/React**: We follow the standard Next.js and React patterns. Use functional components and Hooks.
-   **Styling**: Use Tailwind CSS utility classes. Avoid inline styles where possible.
-   **Backend**: Use standard Express middleware patterns and async/await for asynchronous operations.

### Linting

Before submitting a PR, please run the linter to ensure code quality.

*   **Frontend**:
    ```bash
    cd frontend
    npm run lint
    ```

Thank you for contributing!

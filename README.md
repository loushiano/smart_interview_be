# NestJS Backend

This is a NestJS backend application with TypeScript and TypeORM integration.

## Prerequisites

- Node.js (v16 or higher)
- MySQL database
- npm (Node Package Manager)

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```env
# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database_name

# Application Configuration
PORT=3000
NODE_ENV=development
```

3. Run database migrations:
```bash
npm run migration:run
```

4. Start the development server:
```bash
npm run start:dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run start:dev` - Start the application in development mode with hot-reload
- `npm run build` - Build the application
- `npm run start:prod` - Start the application in production mode
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run migration:run` - Run database migrations
- `npm run migration:generate` - Generate new migration files
- `npm run migration:create` - Create a new migration file

## Project Structure

```
src/
├── main.ts              # Application entry point
├── app.module.ts        # Root application module
├── app.controller.ts    # Basic controller
├── app.service.ts       # Basic service
└── ...
```

## API Documentation

Once the application is running, you can access the Swagger API documentation at:
`http://localhost:8080/api`


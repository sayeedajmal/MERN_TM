# Task Manager - Server (API)

This Node.js / Express backend provides the RESTful API and connects to a MongoDB database to support the Task Manager system. 

It handles authentication (JWT), routing, error handling, and database population routines.

## Quick Start
Make sure your local environment has Node.js and npm installed.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Check your `.env` configuration file in this directory and ensure you have valid connections:
   ```bash
   MONGODB_URI="your-mongodb-url"
   JWT_SECRET="any-random-string-used-to-secure-tokens"
   PORT=8800
   NODE_ENV="development"
   ```
3. Boot the API:
   ```bash
   npm start
   ```

Upon a successful boot, the console should output `Server listening on 8800` followed by `Database Connected`.

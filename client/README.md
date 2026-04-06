# Task Manager - Client

This React front-end interacts with the Node.js backend to provide a dynamic interface for the Task Manager. It accesses Firebase Cloud Storage exclusively for uploading and hosting Task assets (images/documents).

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the `.env.example` file to create your own local `.env`:
   ```bash
   cp .env.example .env
   ```
3. Fill in your Backend URL and Firebase details in the new `.env` file. (Read the main `README.md` at the root of the project for a step-by-step guide on how to get your Firebase configuration keys and avoid CORS errors).
4. Run the development server (Defaults to Port 3000):
   ```bash
   npm run dev
   ```

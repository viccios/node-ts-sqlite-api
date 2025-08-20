# Products API — Node.js + TypeScript + SQLite template

## 🧠 About

A small, simple Node.js + Express API demonstrating native TypeScript and
SQLite support. It includes an MVC-like structure, Biome for formatting
and linting, and npm scripts for development.

### Why?

A quickstart for personal back-end practice and school projects
— Feel free to use.

## 🔖 Features

- Native Node.js TypeScript support
- Native Node.js SQLite support (experimental)
- MVC directory structure
- Handy scripts: `start`, `dev`, `format`, `lint`, `check`
- `rest.http` file ready for endpoint testing

## 🚀 Quick start

1. Clone the repository:
   `git clone https://github.com/viccios/node-ts-sqlite-api.git`

2. Install dependencies:
   `npm install`

3. Start the server in development mode (hot reload):
   `npm run dev`

4. Open the server:
   `GET http://localhost:3000/product`

## 📁 Directory structure

```
📁 src/
  📁 config/
  📁 controllers
  📁 database/
  📁 models/
  📁 request/
  📁 routes/
  📁 types/
  server.ts
LICENSE
README.md # You're here ;D
biome.json
package-lock.json
package.json
tsconfig.json

```

## ✨ Scripts (package.json)

- `npm run start`: start the server
- `npm run dev`: start the server in development mode
- `npm run format`: format all files
- `npm run lint`: lint all files
- `npm run check`: format and lint

## 🔌 Examples

Endpoint examples are in the `rest.http` file inside the
`request` directory.

## 📜 License

This code is released under the MIT License.

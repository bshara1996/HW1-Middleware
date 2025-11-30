# 🌐 HW1 - Middleware & Static Files

A Node.js Express server that serves static files and provides a dynamic API with routing and query parameters.

## 📋 Task Requirements

Create a server that serves static files and provides dynamic data via an API. Additionally, implement URL parameter processing.

**Requirements:**
1.  **Static Folder Setup:**
    *   Create an `assets` folder containing: `index.html`, `about.html`, `contact.html`, `styles.css`, `logo.png`.
    *   Configure `express.static()` to serve the `assets` folder.

2.  **Route Implementation:**
    *   `GET /products`: Returns a JSON list of products.
    *   `GET /products/:id`: Returns data for a specific product by ID. If not found, return 404 with "Product not found".
    *   `GET /users`: Accepts an `age` query parameter. If provided, filters users older than the specified age. If missing, returns all users.

3.  **Error Handling:**
    *   If the user navigates to a non-existent route, the server returns a 404 page from the `assets` folder.

## 🚀 How to Run

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the server:
    ```bash
    node app.js
    ```
3.  Open your browser at `http://localhost:3000`

## 💡 Solution Approach

The solution uses:
- **Express.js** framework for creating the server.
- **Middleware** (`express.static`) to serve static HTML, CSS, and images.
- **Dynamic Routing** (`:id`) to fetch specific products.
- **Query Parameters** (`?age=`) to filter users.
- **Error Handling Middleware** to serve a custom 404 page.

## 👥 Students

- Bshara Karkaby [49-2]
- Moner Makhouly [49-2]

---

**Happy coding!** 💻✨



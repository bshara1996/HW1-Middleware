const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { products, users } = require("./assets/data");

app.use(express.static(path.join(__dirname, "assets")));

// Get product by ID
app.get("/products/:id", (req, res) => {
  const { id } = req.params; // Access the ID from the URL
  const singleProduct = products.find((p) => p.id === Number(id));

  if (!singleProduct) {
    return res.status(400).json({ Error: "Product with id:${id} Not Found" });
  }

  return res.json(singleProduct);
});

// Get all products
app.use("/products", (req, res) => {
  res.status(200).json(products);
});

// Filter users by age
app.get("/users", (req, res) => {
  const { age } = req.query; // get query age prams from url

  // If age not given in query
  if (!age) {
    return res.status(200).json(users);
  }

  // If age is not a number
  if (isNaN(age)) {
    return res.status(400).json({ Error: "Age must be number only" });
  }

  // Filter by age
  const filteredUsers = users.filter((user) => user.age > Number(age));

  res.json(filteredUsers);
});

// 404 error handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "assets", "404.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.send("satish reddy become a fullstack deveoper");
});
app.get("/register", (req, res) => {
  res.send("register is successfully...");
});
app.get("/forgot", (req, res) => {
  res.send("password successfully change...");
});
app.get("/login", (req, res) => {
  res.json({ username: "satish", password: "satish reddy" });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running successfully ${port}`);
});

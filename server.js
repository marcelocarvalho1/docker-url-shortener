const express = require("express");
const crypto = require("crypto");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const links = new Map()

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/shorten", (req, res) => {
  const { url } = req.body;

  const codigo = crypto.randomBytes(4).toString("base64url").slice(0, 6);
  links.set(codigo, url);

  res.status(201).json({codigo, url});


});

app.listen(PORT, () => {
  console.log(`Encurtador rodando na porta ${PORT}`);
});
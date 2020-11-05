import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "ok" });
});

app.listen(3333, () => {
  console.log("Server is started on port 3333");
});
import express from "express";

const app = express();

app.get("/health", (request, response) => {
  return response.status(200).json({
    code: 200,
    message: "server is running...",
    now: new Date(),
  });
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});

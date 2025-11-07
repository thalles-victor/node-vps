import express from "express";

const app = express();

app.get("/", (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Servidor Online 🚀</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #0070f3, #00c6ff);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }
        .card {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          backdrop-filter: blur(10px);
        }
        h1 { font-size: 3rem; margin-bottom: 0.5rem; }
        p { font-size: 1.2rem; opacity: 0.9; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 Servidor Online!</h1>
        <p>Seu servidor está rodando perfeitamente!</p>
      </div>
    </body>
    </html>
  `;

  res.send(html);
});

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

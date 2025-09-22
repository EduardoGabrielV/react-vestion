import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());          // permite o front (ex.: http://localhost:5173) chamar a API
app.use(express.json());
app.use(router);

// Middleware de "rota não encontrada" (404)
// É executado se nenhuma rota anterior correspondeu ao caminho requisitado
app.use((req, res) => {
  // Define o status HTTP como 404 e retorna um JSON com uma mensagem de erro
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Middleware de tratamento de erros (captura exceções de rotas/middlewares)
// Tem 4 parâmetros por padrão: (err, req, res, next) para que o Express reconheça como handler de erro
app.use((err, req, res, next) => {
  // Loga no console o erro não tratado para facilitar depuração
  console.error('Erro não tratado:', err);
  // Responde com status 500 (erro interno) e uma mensagem genérica em JSON
  res.status(500).json({ error: 'Erro interno do servidor' });
});

// Inicia o servidor HTTP, fazendo-o "escutar" na porta definida
app.listen(PORT, () => {
  // Quando o servidor subir com sucesso, loga no console a porta utilizada
  console.log(`Server VestiOn rodando na porta ${PORT} 🚀`);
});

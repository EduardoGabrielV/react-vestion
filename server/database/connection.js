import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// Necessário para obter o caminho do arquivo atual (em ESM não existe __filename por padrão)
const __filename = fileURLToPath(import.meta.url);
// Obtém o diretório onde este arquivo (connection.js) está
const __dirname = path.dirname(__filename);

// Monta o caminho absoluto para o arquivo do banco (server/database/vestion.db)
const dbPath = path.join(__dirname, 'vestion.db');

// Coloca o sqlite3 em modo "verbose" (mais logs úteis no console)
sqlite3.verbose();

// Cria/abre a conexão com o SQLite apontando para o arquivo .db
const db = new sqlite3.Database(dbPath, (err) => {
  // Callback executado após tentar abrir o banco
  if (err) {
    // Se deu erro, mostra no console
    console.error('Erro ao conectar ao SQLite:', err.message);
  } else {
    // Se conectou, loga o caminho do banco
    console.log('Conectado ao SQLite em:', dbPath);
  }
});

// Exporta a instância do banco para ser usada nas rotas
export default db;

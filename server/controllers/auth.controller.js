import db from '../database/connection.js';

/**
 * Controller de autenticação
 * - Valida input
 * - Normaliza email/senha (trim; email case-insensitive)
 * - Consulta o SQLite
 * - Retorna 200 com { user } ou 4xx/5xx com { error }
 */

export function login(req, res) {
  // Normalização básica
  const email = String(req.body?.email ?? '').trim();
  const password = String(req.body?.password ?? '').trim();

  // Validação mínima mas ja estou fazendo no front
  if (!email || !password) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' });
  }

  // SQL tolerante a espaços/NBSP e caixa no email
  const sql = `
    SELECT id, name, email, password
    FROM user
    WHERE LOWER(TRIM(REPLACE(email, CHAR(160), ''))) = LOWER(TRIM(?))
    LIMIT 1
  `;

  db.get(sql, [email], (err, row) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err.message);
      return res.status(500).json({ error: 'Erro ao buscar usuário' });
    }

    if (!row) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Comparação simples de senha . Em produção usar bcrypt.
    const storedPassword = String(row.password ?? '').trim();
    if (storedPassword !== password) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Sucesso: nunca devolva a senha
    const user = { id: row.id, name: row.name, email: row.email };
    return res.json({ user });
  });
}

export function register(req, res) {
  const name     = String(req.body?.name     ?? '').trim();
  const emailRaw = String(req.body?.email    ?? '').trim();
  const password = String(req.body?.password ?? '').trim();

  if (!name || !emailRaw || !password) {
    return res.status(400).json({ error: 'Por favor, preencha todos os campos' });
  }

  // Força da senha no BACK também
  const strong =
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%¨&*()]/.test(password) &&
    password.length >= 8 &&
    password.length <= 15;

  if (!strong) {
    return res.status(400).json({
      error: 'Senha fraca: 8–15 dígitos, 1 maiúscula, 1 número e 1 especial (!@#$%¨&*()).'
    });
  }

  const email = emailRaw.toLowerCase();

  const findSql = `
    SELECT id
    FROM user
    WHERE LOWER(TRIM(REPLACE(email, CHAR(160), ''))) = LOWER(TRIM(?))
    LIMIT 1
  `;
  db.get(findSql, [email], (err, row) => {
    if (err) return res.status(500).json({ error: 'Erro ao verificar email' });
    if (row) return res.status(409).json({ error: 'Email já cadastrado' });

    const insertSql = `INSERT INTO user (name, email, password) VALUES (?, ?, ?)`;
    db.run(insertSql, [name, email, password], function (err2) {
      if (err2) return res.status(500).json({ error: 'Erro ao criar usuário' });
      return res.status(201).json({ user: { id: this.lastID, name, email } });
    });
  });
}

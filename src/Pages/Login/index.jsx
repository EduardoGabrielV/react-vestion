import styles from './Login.module.css';
import logo from '../../assets/ui/logo-vestion.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'; // pra onde ir depois do login

  async function handleLogin(e) {
    e.preventDefault();
    setErr('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        // 400/401/500 -> mostrar mensagem simples
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Não foi possível entrar');
      }

      const data = await res.json(); // { user: { id, name, email } }
      login(data.user);

      // redireciona
      navigate(from, { replace: true });
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.loginFormPage} onSubmit={handleLogin} noValidate>
      <img src={logo} alt="Slogan VestiOn" draggable="false" />
      <h2 className={styles.loginFormPage__message}>Bem vindo(a)</h2>

      <input
        name='email'
        type="email"
        required
        maxLength={40}
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
      />

      <input
        name='password'
        type="password"
        required
        maxLength={15}
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />

      {err && <p className={styles.loginFormPage__error}>{err}</p>}

      <button className={styles.loginFormPage__button} disabled={loading}>
        {loading ? 'Entrando...' : 'Fazer login'}
      </button>

      <Link className={styles.loginFormPage__links} to="/recuperar-conta">
        Recuperar conta
      </Link>
      <Link className={styles.loginFormPage__links} to="/cadastro">
        Crie sua conta
      </Link>
    </form>
  );
}

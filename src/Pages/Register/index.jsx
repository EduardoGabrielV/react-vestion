import styles from './Register.module.css'
import logo from '../../assets/logo-vestion.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'; //Guarda de onde ele veio e manda para algum local

  async function handleRegister(e) {
    e.preventDefault();
    setErr('');
    setLoading(true);

    const strong =
      /[A-Z]/.test(password) &&        // 1 maiúscula
      /\d/.test(password) &&           // 1 número
      /[!@#$%¨&*()]/.test(password) && // 1 especial
      password.length >= 8 &&
      password.length <= 15;           // 8+ chars


    try {

      if (!strong) {
        setErr('Senha fraca: 8–15 dígitos, 1 maiúscula, 1 número e 1 especial (!@#$%¨&*()).');
        return;
      }
      if (password !== confirmPassword) {
        setErr('As senhas não conferem');
        return;
      }

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Não foi possível entrar');
      }
      const data = await res.json();
      localStorage.setItem('session_user', JSON.stringify(data.user));

      navigate(from, { replace: true });
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className={styles.registerFormPage} onSubmit={handleRegister} noValidate>
      <img src={logo} alt="Slogan VestiOn" draggable='false' />
      <h2 className={styles.registerFormPage__message}>Crie sua conta</h2>

      <input
        name='name'
        type="text"
        required
        maxLength={40}
        placeholder='Digite seu nome'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        name='email'
        type="email"
        required
        maxLength={40}
        placeholder='Digite seu email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        name='password'
        type="password"
        autoComplete='new-password'
        required maxLength={15}
        placeholder='Digite sua senha'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        name='confirm-password'
        type="password"
        autoComplete='new-password'
        required maxLength={15}
        placeholder='Confirme sua senha'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {err && <p className={styles.registerFormPage__error}>{err}</p>}

      <button className={styles.registerFormPage__button} disabled={loading || !name || !email || !password || !confirmPassword}>
        {loading ? 'Verificando...' : 'Cadastrar'}
      </button>
      <Link className={styles.registerFormPage__links} to='/login'>Já é cadastrado? Fazer Login</Link>
    </form>
  )
}



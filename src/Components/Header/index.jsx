import logo from '../../assets/ui/logo-vestion.png'
import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faShirt, faCartShopping, faContactCard, faUser, faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../auth/AuthContext';

export default function Header() {
  const { user, logout } = useAuth(); //importa do authContext as funcoes de autenticação
  const navigate = useNavigate();//

  const raw = (user?.name ?? '').trim().split(/\s+/)[0]; // primeiro nome
  const firstName = raw
    ? raw[0].toLocaleUpperCase('pt-BR') + raw.slice(1).toLocaleLowerCase('pt-BR')
    : 'Visitante'; // primeira letra maiusculo

  function handleLogout() {
    logout();      // limpa contexto + localStorage
  }

  function goToLogin() {
    navigate('/login')
  }

  return (
    <header id='top' className={styles.header}>
      <Link to='/'><img src={logo} draggable='false' alt='Logo VestiOn' className={styles.logo} /></Link>
      <nav>
        <Link className={styles.header__links} to='/'><FontAwesomeIcon icon={faHouse} /><span>Home</span></Link>
        <Link className={styles.header__links} to='/produtos'><FontAwesomeIcon icon={faShirt} />Produtos</Link>
        <Link className={styles.header__links} to='/carrinho'><FontAwesomeIcon icon={faCartShopping} />Carrinho</Link>
        <a className={styles.header__links} href='#contact'><FontAwesomeIcon icon={faContactCard} />Contato</a>
        {user ? (
          <>
            <Link className={styles.header__links} to="/perfil">
              <FontAwesomeIcon icon={faUser} /> Olá, <span className={styles.userName}>{firstName}</span>!
            </Link>
            <button type="button" className={styles.header__logout} onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} /> Sair
            </button>
          </>
        ) : (
            <button type="button" className={styles.header__login} onClick={goToLogin}>
              <FontAwesomeIcon icon={faRightToBracket} /> Entrar
            </button>
        )}
      </nav>
    </header>
  )
}
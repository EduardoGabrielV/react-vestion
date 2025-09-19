import logo from '../../assets/logo-vestion.png'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faShirt, faCartShopping, faContactCard, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header id='top' className={styles.header}>
      <Link to={'/'}><img src={logo} draggable='false' alt='Logo VestiOn' className={styles.logo} /></Link>
      <nav>
        <Link className={styles.header__links} to={'/'}><FontAwesomeIcon icon={faHouse} /><span>Home</span></Link>
        <Link className={styles.header__links} to={'/produtos'}><FontAwesomeIcon icon={faShirt} />Produtos</Link>
        <Link className={styles.header__links} to={'/carrinho'}><FontAwesomeIcon icon={faCartShopping} />Carrinho</Link>
        <a className={styles.header__links} href='#contact'><FontAwesomeIcon icon={faContactCard} />Contato</a>
        <Link className={styles.header__links} to={'/logout'}><FontAwesomeIcon icon={faUser} />Usuário</Link>
      </nav>
    </header>
  )
}

export default Header
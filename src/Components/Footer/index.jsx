import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const createdYear = 2025
const actualYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div id='contact' className={styles.footer__section}>
        <h3>Contato</h3>
        <p>contato@vestion.com</p>
        <p>(11) 99999-9999</p>
        <p>
          Desenvolvido por <Link className={styles.footer__links} target='__blank' to="https://github.com/EduardoGabrielV">Eduardo Gabriel Vicente</Link>
        </p>
      </div>

      <div className={styles.footer__section}>
        <h3>Navegação</h3>
        <Link className={styles.footer__links} to="/">Home</Link>
        <Link className={styles.footer__links} to="/produtos">Produtos</Link>
        <Link className={styles.footer__links} to="/carrinho">Carrinho</Link>
      </div>

      <div className={styles.footer__section}>
        <h3> Conecte-se conosco </h3>
          <a className={`${styles.footer__linkInstagram} ${styles.footer__linkItems}`} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} /> Instagram
          </a>
          <a className={`${styles.footer__linkYoutube} ${styles.footer__linkItems}`} href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className={styles.icon} /> Youtube
          </a>
          <a className={`${styles.footer__linkWhatsapp} ${styles.footer__linkItems}`} href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} /> Whatsapp
          </a>
      </div>

      <div className={styles.footer__section}>
        <h3>VestiOn</h3>
        <p>&copy; {createdYear === actualYear ? actualYear : `${createdYear} - ${actualYear}`} VestiOn (empresa fictícia). Todos os direitos reservados.</p>
        <a className={styles.footer__links} href="#top">Voltar ao topo</a>
      </div>

    </footer>
  )
}

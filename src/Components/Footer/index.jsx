import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Brands, marcas, etc...
import { faInstagram, faYoutube, faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// SOLID, setas, botoes, etc...
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const createdYear = 2025
const actualYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footer__section}>
        <h3>Desenvolvedor</h3>
        <a className={styles.footer__linkGithub} href="https://www.linkedin.com/in/eduardo-gabriel-vicente-8687b7327/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> Eduardo Gabriel Vicente
        </a>
        <a className={styles.footer__linkLinkedin} href="https://github.com/EduardoGabrielV" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> Eduardo Gabriel Vicente
        </a>
      </div>


      <div id='contact' className={styles.footer__section}>
        <h3>Contato</h3>
        <p>contato@vestion.com</p>
        <p>(11) 99999-9999</p>
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
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a className={`${styles.footer__linkYoutube} ${styles.footer__linkItems}`} href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} /> Youtube
        </a>
        <a className={`${styles.footer__linkWhatsapp} ${styles.footer__linkItems}`} href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
        </a>
      </div>

      <div className={styles.footer__section}>
        <h3>VestiOn</h3>
        <p>&copy; {createdYear === actualYear ? actualYear : `${createdYear} - ${actualYear}`} VestiOn (empresa fictícia).</p>
        <p>Todos os direitos reservados.</p>
        <a className={styles.footer__linkToTop} href="#top">
          <FontAwesomeIcon icon={faChevronUp} /> Voltar ao topo
        </a>
      </div>

    </footer>
  )
}

import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const createdYear = 2025
const actualYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__section}>
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

      <div id='about' className={styles.footer__section}>
        <h3>VestiOn</h3>
        <p>{createdYear === actualYear ? actualYear : `${createdYear} - ${actualYear}`} VestiOn. Todos os direitos reservados.</p>
        <a className={styles.footer__links} href="#top">Voltar ao topo</a>
      </div>
    </footer>
  )
}

export default Footer
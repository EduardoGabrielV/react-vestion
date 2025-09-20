import slogan from '../../assets/slogan-vestion.png'
import styles from './Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faRotate, faShieldHalved, faHeadset } from '@fortawesome/free-solid-svg-icons';

function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.homePage}>

      <section className={styles.homePage__section}>
        <img src={slogan} alt="Slogan VestiOn" draggable='false' className={styles.homePage__slogan} />
        <div className={styles.homePage__about}>
          <h3 className={styles.homePage__titles}>Sobre a VestiOn</h3>
          <p>
            A VestiOn nasceu para simplificar o guarda-roupa: peças essenciais,
            versáteis e com preço justo. Produção consciente e design minimalista.
          </p>
        </div>
      </section>

      <section className={styles.homePage__section}>
        <div className={styles.homePage__vantage}>
          <h3 className={styles.homePage__titles}>Vantagens</h3>
          <ul>
            <li><FontAwesomeIcon className={styles.homePage__icons} icon={faTruckFast} /> <span>Frete rápido</span></li>
            <li><FontAwesomeIcon className={styles.homePage__icons} icon={faRotate} /> <span>30 dias para trocar</span></li>
            <li><FontAwesomeIcon className={styles.homePage__icons} icon={faShieldHalved} /> <span>Pagamento seguro</span></li>
            <li><FontAwesomeIcon className={styles.homePage__icons} icon={faHeadset} /> <span>Suporte humanizado</span></li>
          </ul>
        </div>
        <div className={styles.homePage__reviews}>
          <h3 className={styles.homePage__titles}>O que dizem</h3>
          <div>
            <blockquote>“Peças básicas com qualidade excelente.” — Eduardo</blockquote>
            <blockquote>“Entrega rápida e troca sem dor de cabeça.” — Gabriel</blockquote>
          </div>
        </div>

        <div className={styles.homePage__form}>
          <h3 className={styles.homePage__titles}>Assine e ganhe <span className={styles.homePage__span}>10%</span> off</h3>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Digite seu email' required maxLength={45} />
            <button className={styles.homePage__button} type='submit'>Enviar</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
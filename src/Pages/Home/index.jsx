import slogan from '../../assets/slogan-vestion.png'
import styles from './Home.module.css'
import Contentainer from '../../Components/Container'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faRotate, faShieldHalved, faHeadset } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
      <Header />
      <Contentainer>
        <div className={styles.homePage}>

          <section className={styles.homePage__section}>
            <img src={slogan} alt="Slogan VestiOn" draggable='false' className={styles.homePage__slogan} />
          </section>

          <section className={styles.homePage__section}>
            <div className={styles.homePage__about}>
              <h3>Sobre a VestiOn</h3>
              <p>
                A VestiOn nasceu para simplificar o guarda-roupa: peças essenciais,
                versáteis e com preço justo. Produção consciente e design minimalista.
              </p>
            </div>
            <div className={styles.homePage__vantage}>
              <h3>Vantagens</h3>
              <ul>
                <li><FontAwesomeIcon icon={faTruckFast} /> <span>Frete rápido</span></li>
                <li><FontAwesomeIcon icon={faRotate} /> <span>30 dias para trocar</span></li>
                <li><FontAwesomeIcon icon={faShieldHalved} /> <span>Pagamento seguro</span></li>
                <li><FontAwesomeIcon icon={faHeadset} /> <span>Suporte humanizado</span></li>
              </ul>
            </div>
          </section>

        </div>
      </Contentainer>
      <Footer />
    </>
  )
}

export default Home
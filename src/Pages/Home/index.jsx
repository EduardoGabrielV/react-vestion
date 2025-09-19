import styles from './Home.module.css'
import Contentainer from '../../Components/Container'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <>
      <Header/>
      <Contentainer>
          <div className={styles.HomePage}>
            Home page
          </div>
      </Contentainer>
      <Footer/>
    </>
  )
}

export default Home
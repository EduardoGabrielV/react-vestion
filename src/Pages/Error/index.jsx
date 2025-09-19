import styles from './Error.module.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Container from '../../Components/Container'

function Error (){

    return(
        <>
            <Header/>
                <Container>
                    <div className={styles.errorPage}>
                        Error Page
                    </div>
                </Container>
            <Footer/>
        </>
    )
}

export default Error
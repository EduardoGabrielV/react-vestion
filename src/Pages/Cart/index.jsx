import styles from './Cart.module.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Container from '../../Components/Container'

function Cart (){

    return(
        <>
            <Header/>
                <Container>
                    <div className={styles.cartPage}>
                        Cart Page
                    </div>
                </Container>
            <Footer/>
        </>
    )
}

export default Cart
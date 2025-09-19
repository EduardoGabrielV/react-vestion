import styles from '../Products/Products.module.css'
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Container from "../../Components/Container"


function Products(){
    return(
        <>
            <Header/>
            <Container>
                <div className={styles.productsPage}>Products page</div>
            </Container>
            <Footer/>
        </>
    )
}

export default Products
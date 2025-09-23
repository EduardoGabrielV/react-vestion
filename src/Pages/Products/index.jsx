import styles from '../Products/Products.module.css';
import { products } from '../../data/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../cart/CartContext';

export default function Products() {
const { addItem } = useCart();
  const formatBRL = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  function addToCart(p) {
    console.log('add', p.id);
  }

  return (
    <div className={styles.productsPage}>
      {products.map((p) => {
        const old = +(p.price * 1.10).toFixed(2); // 10% acima (preço "de")
        const cur = p.price;                      // preço atual (preço "por")

        return (
          <article key={p.id} className={styles.productsPage__productCard}>
            <h3 className={styles.productPage__name}>{p.name}</h3>

            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              draggable="false"
              className={styles.productPage__image}
            />

            <div className={styles.productPage__prices}>
              <span className={styles.productPage__priceOld}>
                {formatBRL(old)}
              </span>
              <span className={styles.productPage__priceNew}>
                {formatBRL(cur)}
              </span>
            </div>

            <button
              type="button"
              className={styles.productPage__buttonAddCart}
              onClick={() => addItem(p)}
            >
              <FontAwesomeIcon icon={faCartPlus} />
              Adicionar ao carrinho
            </button>
          </article>
        );
      })}
    </div>
  );
}

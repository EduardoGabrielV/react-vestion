import { useCart } from '../../cart/CartContext';
import styles from './Cart.module.css';

export default function Cart() {
  const { items, setQty, removeItem, clear, subtotal } = useCart();
  const fmt = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  if (!items.length) return <p>Seu carrinho está vazio.</p>;

  return (
    <section className={styles.cartPage}>
      {items.map(it => (
        <article key={it.id} className={styles.cartPage__item}>
          <img src={it.image} alt={it.name} />
          <div>
            <h4>{it.name}</h4>
            <p>{fmt(it.price)}</p>
            <div className={styles.cartPage__qty}>
              <button onClick={() => setQty(it.id, it.qty - 1)}>-</button>
              <input
                type="number"
                min={1}
                value={it.qty}
                onChange={(e) => setQty(it.id, Number(e.target.value))}
              />
              <button onClick={() => setQty(it.id, it.qty + 1)}>+</button>
              <button className={styles.cartPage__remove} onClick={() => removeItem(it.id)}>Remover</button>
            </div>
          </div>
          <strong className={styles.cartPage__lineTotal}>{fmt(it.price * it.qty)}</strong>
        </article>
      ))}

      <footer className={styles.cartPage__footer}>
        <span>Subtotal:</span>
        <strong>{fmt(subtotal)}</strong>
      </footer>

      <button className={styles.cartPage__clear} onClick={clear}>Esvaziar carrinho</button>
      <button className={styles.cartPage__checkout}>Finalizar compra</button>
    </section>
  );
}

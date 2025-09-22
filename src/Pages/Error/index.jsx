import { Link } from 'react-router-dom';
import styles from './Error.module.css';

export default function Error() {
    return (
        <section className={styles.errorPage} role='alert'>
            <div className={styles.errorPage__badge}>404</div>
            <h1 className={styles.errorPage__title}>Página não encontrada</h1>
            <p className={styles.errorPage__subtitle}>
                O link que você tentou acessar pode estar indisponível, quebrado ou teve o endereço alterado.
            </p>

            <div className={styles.errorPage__buttons}>
                <Link
                    to="/"
                    className={`${styles.errorPage__button} ${styles.errorPage__buttonHome}`}
                >
                    Voltar para a Home
                </Link>

                <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className={`${styles.errorPage__button} ${styles.errorPage__buttonReload}`}
                >
                    Tentar novamente
                </button>
            </div>
        </section>
    );
}

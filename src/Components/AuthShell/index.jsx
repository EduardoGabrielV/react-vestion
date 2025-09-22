import styles from './AuthShell.module.css'

// component reutilizavel para formularios: Login, cadastro, recuperar conta, etc...

export default function AuthShell({children}){

    return(
        <div className={styles.authShell}>
            {children}
        </div>
    )
}
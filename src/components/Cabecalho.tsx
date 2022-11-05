import styles from './Cabecalho.module.css'
import Logo from '../assets/Logo.svg'
export const Cabecalho = () =>{
    return(
       <header className={styles.cabecalho}>
            <img src={Logo} alt="" />
       </header>
    );
}
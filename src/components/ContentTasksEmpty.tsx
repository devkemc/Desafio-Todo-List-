import styles from './ContentTasksEmpty.module.css'
import Clipboard from "../assets/Clipboard.svg";
export const ContentTasksEmpty = () =>{
    return(
        <div className={styles.empty}>
            <img src={Clipboard}alt="" />
            <strong>Vocẽ ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
}
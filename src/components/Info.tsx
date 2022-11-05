import styles from './Info.module.css'

interface Info{
    title:'Tarefas criadas' | 'Concluidas',
    concluidas?:number,
    criadas:number
}
export const Info = ({title, concluidas, criadas}:Info) =>{


    return(
        <div className={styles.info}>
            <strong>
                {title}
            </strong>
            <div className={styles.contador}>
               
                 {title == 'Concluidas'? <p>{concluidas}/{criadas}</p> : <p>{criadas}</p>}   
            
               
            </div>
        </div>
    )
}
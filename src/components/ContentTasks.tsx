import {Trash, CheckCircle} from 'phosphor-react'
import { ChangeEvent, HtmlHTMLAttributes, useState } from 'react';
import styles from './ContentTasks.module.css'

interface Task{
    content:string,
    concluido:boolean,
    id:string,
    onConcluded: (id:string) => void,
    onNotConcluded: (id:string) => void,
    onDelete: (id:string) => void,
}

export const ContentTasks = ({concluido, content, id, onConcluded, onNotConcluded, onDelete}:Task )=>{

    function handleClick(){
        onDelete(id);
    }

    function handleConcluded(event:ChangeEvent<HTMLInputElement>){
        const id = event.target.id
        if(!concluido){
            onConcluded(id);
        }else{
            onNotConcluded(id);
        }   
    }
 
    return(
        <div className={styles.content}>
            <div className={styles.check}>
                <input id={id} type="checkbox" checked={concluido} onChange={handleConcluded}/>
                <label htmlFor={id}>{content}</label>
            </div>
            
            <button onClick={handleClick} className={styles.trash} disabled= {!concluido}>
                <Trash  size={24} />
            </button>

        </div>
    )
}
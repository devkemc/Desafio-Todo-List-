import {PlusCircle} from 'phosphor-react'
import { useState, ChangeEvent, FormEvent } from 'react';
import {v4 as uuidv4, v4} from 'uuid'
import styles from './NewTask.module.css'

interface TaskNew{
    task: (task: string, concluido:boolean, id:string) => void;
}


export const NewTask = ({task}:TaskNew) =>{
    const [taskText, setTaskText] = useState('');
    
    function handleNewTask(event:ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setTaskText(event.target.value);
    }
    function handleCreateNewTask(event:FormEvent){

        event.preventDefault();
        const concluido = false
        const id = uuidv4();
        task(taskText, concluido, id);
        setTaskText('');
        
    }
    
    return(
        <form onSubmit={handleCreateNewTask} className={styles.newTask}>
            <input 
                type="text" 
                placeholder='adicione uma nova tarefa' value={taskText}  
                onChange={handleNewTask}/>
            <button type = 'submit'>
                criar 
                <PlusCircle/>
            </button>
        </form>
    );
}
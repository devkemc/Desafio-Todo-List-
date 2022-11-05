import { useState } from 'react';
import {v4 as uuidv4, v4} from 'uuid'
import { ContentTasks } from './ContentTasks';
import { ContentTasksEmpty } from './ContentTasksEmpty';
import { Info } from './Info';
import { NewTask } from './NewTask';
import styles from './Tasks.module.css'

interface Task{
    concluido:boolean,
    conteudo:string,
    id:string
}

export const Tasks = () =>{
    const [newTask, setNewTask] = useState(
        [{id: uuidv4(), content:'terminar trabalho', concluido:false}]);
    const [concluded, setConcluded] = useState(0);

    function taskNew(novaTask:string, concluido:boolean, id:string){
    
        setNewTask([...newTask, {content:novaTask, id:id, concluido:concluido} ]);
    }

    function setNewConcluded(id:string){
        setConcluded((concluidos) =>{
            return concluidos + 1;

        });
        setNewTask(newTask.map((task =>{
            return task.id != id ? task : { ...task, concluido: true };
            
        })));
    }
    function setNotConcluded(id:string){
        setConcluded((concluidos) =>{
            return concluidos -1;
        });
        setNewTask(newTask.map((task =>{
            return task.id != id ? task : {...task, concluido:false};
            
        })));
    }
    function onDeleteTask(id:string){
        const deleteTask = newTask.filter(tasks=>{
            return tasks.id != id;
        });
        setNewTask(deleteTask);
        setConcluded((concluded)=>{
            return concluded - 1
        });
    }
    
    return(
        <div>
            <NewTask task={taskNew}/>
             <div className={styles.tasks} >
                <div className={styles.infoTask}>
                    <Info title='Tarefas criadas' criadas={newTask.length}/>
                    <Info title='Concluidas'concluidas={concluded}criadas={newTask.length}/>
                </div>
                {newTask[0] == null 
                ? <ContentTasksEmpty/> 
                : newTask.map(task =>{ 
                    return  (<ContentTasks 
                                onDelete={onDeleteTask}
                                onConcluded = {setNewConcluded} 
                                onNotConcluded={setNotConcluded} 
                                id= {task.id}
                                key={uuidv4()} 
                                content={task.content}
                                concluido={task.concluido}
                            /> )
                })}
  
            </div>
        </div>
    );
}
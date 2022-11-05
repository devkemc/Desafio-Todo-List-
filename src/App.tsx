import { Cabecalho } from './components/Cabecalho'
import { Tasks } from './components/Tasks'
import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div >
      <Cabecalho/>
      <main className={styles.wrapper}>
        <Tasks/>
      </main>
      
     
    </div>
  )
}

export default App

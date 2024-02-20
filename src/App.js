import styles from './App.module.css'

import { useState, useRef } from 'react'
import { v4 } from 'uuid'

import CurrentTask from './CurrentTask'
import CompletedTask from './CompletedTask'

function App () {
  const [currentTasks, setCurrentTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const inputRef = useRef(null)

  function handleClick () {
    if (inputRef.current.value === '') return
    setCurrentTasks(
      [...currentTasks, { id: v4(), text: inputRef.current.value }])
    inputRef.current.value = ''
  }

  function complete (id) {
    setCurrentTasks(currentTasks.filter((item) => {
      if (item.id === id) {
        setCompletedTasks([...completedTasks, item])
        return false
      }
      return true
    }))
  }

  function remove (id) {
    setCurrentTasks(currentTasks.filter((item) => {
      return (item.id !== id)
    }))
  }

  function handleKeyDown (e) {
    if (e.code === 'Enter') {
      handleClick()
    }
  }

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.header}>Ваш планировщик :)</h1>
      <div className={styles.form}>
        <input className={styles.input}
          onKeyDown={handleKeyDown}
               ref={inputRef}
               placeholder="Введите новую задачу!"/>
        <button className={styles.plus} onClick={handleClick}><img style={{ width: '15px' }} alt="image fail" src="/images/plus.png"/></button>
      </div>
      <ul>
        {currentTasks.map((item) => <CurrentTask
          key={item.id}
          id={item.id}
          text={item.text}
          complete={complete}
          remove={remove}/>,
        )}
      </ul>
      <div>
        <h3 className={styles.header3}>Завершенные:</h3>
        <ul className={styles.ul}>
          {completedTasks.map(
            (item) => <CompletedTask key={item.id} text={item.text}/>)}
        </ul>
      </div>
    </div>
  )
}

export default App

import styles from './CurrentTask.module.css'

function CurrentTask ({ text, id, complete, remove }) {

  return (
    <li className={styles.li}>
      <p className={styles.text}>
        <button className={styles.button1} onClick={() => complete(id)}>
          <img style={{ width: '12px' }} alt="image fail"
               src="/images/check.png"/>
        </button>
        <button className={styles.button2} onClick={() => remove(id)}>
          <img style={{ width: '13px' }} alt="image fail"
               src="/images/trash.png"/>
        </button>
        <span className={styles.span}>{text}</span>
      </p>
    </li>
  )
}

export default CurrentTask

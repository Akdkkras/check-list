import styles from './CompletedTask.module.css'

function CompletedTask ({ text }) {
  return (
    <li className={styles.li}>
      <p className={styles.text}>
        {text}
      </p>
    </li>
  )
}

export default CompletedTask
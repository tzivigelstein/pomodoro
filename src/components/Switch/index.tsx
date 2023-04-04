import styles from './index.module.css'

interface Props {
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function Switch({ id, checked, onChange }: Props) {
  return (
    <div className={styles.switch}>
      <input
        id={id}
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={styles.slider}></span>
    </div>
  )
}

import { Reset } from '../Icons'
import styles from './index.module.css'

interface Props {
  onClick: (value: any) => void
}

export default function ResetButton({ onClick }: Props) {
  return (
    <button type="reset" className={styles.resetButton} onClick={onClick}>
      <Reset width={16} height={16} />
      Reset Value
    </button>
  )
}

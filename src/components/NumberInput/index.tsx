import { defaultSettings, Settings } from '../../hooks/useSettings'
import ResetButton from '../ResetButton'
import styles from './index.module.css'

type SettingsKeys = keyof Omit<Settings, 'showStage'>

type Props = {
  value: number
  name: SettingsKeys
  onChange: (name: SettingsKeys, value: number) => void
  step?: number
}

const UPPER_LIMIT = 55
const LOWER_LIMIT = 5

function NumberInput({ name, value, step = 1, onChange }: Props) {
  const handleDecrement = () =>
    onChange(name, Math.max(value - step, LOWER_LIMIT))
  const handleIncrement = () =>
    onChange(name, Math.min(value + step, UPPER_LIMIT))

  const isDecrementDisabled = value <= LOWER_LIMIT
  const isIncrementDisabled = value >= UPPER_LIMIT

  function handleReset() {
    onChange(name, defaultSettings[name])
  }

  return (
    <div className={styles.container}>
      {value !== defaultSettings[name] && <ResetButton onClick={handleReset} />}
      <div className={styles.numberInput}>
        <button disabled={isDecrementDisabled} onClick={handleDecrement}>
          -
        </button>
        <span>{value}</span>
        <button disabled={isIncrementDisabled} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  )
}

export default NumberInput

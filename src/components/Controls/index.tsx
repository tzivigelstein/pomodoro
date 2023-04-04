import { useMemo } from 'react'
import { Status } from '../../hooks/usePomodoro'
import { Pause, Play, Stop } from '../Icons'
import styles from './index.module.css'

interface Props {
  isCounterRunning: boolean
  startCounter: () => void
  pauseCounter: () => void
  stopCounter: () => void
  counter: number
  currentStatus: Status
}

export default function Controls({
  isCounterRunning,
  startCounter,
  pauseCounter,
  stopCounter,
  counter,
  currentStatus,
}: Props) {
  const color = useMemo(() => {
    return currentStatus === Status.resting ? '--resting-accent' : '--accent'
  }, [currentStatus])

  return (
    <div className={styles.container}>
      <button
        className={styles.toggleButton}
        style={{
          backgroundColor: `var(${color})`,
        }}
        onClick={isCounterRunning ? pauseCounter : startCounter}
      >
        {isCounterRunning ? (
          <Pause className={styles.icon} />
        ) : (
          <Play className={styles.icon} />
        )}
      </button>
      <button
        style={
          counter / 60 !== 25 ? { transform: 'translate(150%, -50%)' } : {}
        }
        className={styles.stopButton}
        onClick={stopCounter}
      >
        <Stop className={styles.stopIcon} />
      </button>
    </div>
  )
}

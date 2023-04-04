import { useMemo } from 'react'
import { Status } from '../../hooks/usePomodoro'
import styles from './index.module.css'

interface Props {
  time: number
  currentStatus: Status
}

export default function Progress({ time, currentStatus }: Props) {
  const divisor = useMemo(() => {
    return 360 / (time / 60)
  }, [currentStatus])

  return (
    <div
      className={styles.progress}
      style={{
        background: `conic-gradient(var(${
          currentStatus === Status.resting ? '--resting-accent' : '--accent'
        }) ${(time / 60) * divisor}deg, white 0deg)`,
      }}
    >
      <span className={styles.time}>{Math.ceil(time / 60)}</span>
    </div>
  )
}

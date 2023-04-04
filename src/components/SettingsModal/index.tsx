import { MouseEvent, ReactElement } from 'react'

import { Times } from '../Icons'
import styles from './index.module.css'

interface Props {
  children?: ReactElement
  title: string
  open: boolean
  setOpen: (open: boolean) => void
}

export default function SettingsModal({
  children,
  title,
  open,
  setOpen,
}: Props) {
  function handleClickOutside() {
    setOpen(false)
  }

  function handleClickInside(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
  }

  return (
    <>
      {open && (
        <div onClick={handleClickOutside} className={styles.wrapper}>
          <div onClick={handleClickInside} className={styles.container}>
            <button onClick={handleClickOutside} className={styles.closeButton}>
              <Times />
            </button>
            <h3 className={styles.title}>{title}</h3>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

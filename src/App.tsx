import { useState } from 'react'
import styles from './app.module.css'
import Controls from './components/Controls'
import { Settings } from './components/Icons'
import NumberInput from './components/NumberInput'
import Progress from './components/Progress'
import SettingsModal from './components/SettingsModal'
import Switch from './components/Switch'
import usePomodoro from './hooks/usePomodoro'
import useSettings from './hooks/useSettings'

function App() {
  const {
    showStage,
    workingTime,
    longRestingTime,
    restingTime,
    toggleShowStage,
    update,
  } = useSettings()

  const {
    counter,
    startCounter,
    pauseCounter,
    stopCounter,
    currentStatus,
    isCounterRunning,
  } = usePomodoro({
    workingTime,
    longRestingTime,
    restingTime,
  })

  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className={styles.container}>
      <button onClick={() => setShowSettings((prev) => !prev)}>
        <Settings />
      </button>
      <SettingsModal
        title="Settings"
        open={showSettings}
        setOpen={setShowSettings}
      >
        <div className={styles.settingsList}>
          <label htmlFor="showStage" className={styles.setting}>
            <p className={styles.settingText}>Show current stage</p>
            <Switch
              id="showStage"
              checked={showStage}
              onChange={toggleShowStage}
            />
          </label>
          <div className={styles.setting}>
            <p className={styles.settingText}>Working time</p>
            <NumberInput
              name="workingTime"
              value={workingTime}
              onChange={update}
              step={5}
            />
          </div>
          <div className={styles.setting}>
            <p className={styles.settingText}>Resting time</p>
            <NumberInput
              name="restingTime"
              value={restingTime}
              onChange={update}
              step={1}
            />
          </div>
          <div className={styles.setting}>
            <p className={styles.settingText}>Long resting time</p>
            <NumberInput
              name="longRestingTime"
              value={longRestingTime}
              onChange={update}
              step={5}
            />
          </div>
        </div>
      </SettingsModal>
      {showStage && <span>{currentStatus}</span>}
      <Progress time={counter} currentStatus={currentStatus} />
      <Controls
        counter={counter}
        isCounterRunning={isCounterRunning}
        pauseCounter={pauseCounter}
        startCounter={startCounter}
        stopCounter={stopCounter}
        currentStatus={currentStatus}
      />
    </div>
  )
}

export default App
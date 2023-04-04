import useLocalStorage from './useLocalStorage'

export const defaultSettings = {
  workingTime: 25,
  restingTime: 5,
  longRestingTime: 15,
  showStage: false,
}

const initialSettings = {
  ...defaultSettings,
}

export type Settings = typeof initialSettings

export default function useSettings() {
  const [localSettings, setLocalSettings] = useLocalStorage(
    'settings',
    initialSettings
  )

  const { longRestingTime, restingTime, showStage, workingTime } = localSettings

  const toggleShowStage = () => {
    setLocalSettings((prev) => ({
      ...prev,
      showStage: !prev.showStage,
    }))
  }

  function update(name: keyof Settings, value: any) {
    setLocalSettings((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return {
    workingTime,
    restingTime,
    longRestingTime,
    showStage,
    toggleShowStage,
    update,
  }
}

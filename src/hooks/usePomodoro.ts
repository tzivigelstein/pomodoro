import { useEffect, useState } from 'react'

const ONE_SECOND = 1
const ONE_SECOND_MS = 60
const POMODOROS_LIMIT = 4

let intervalReference: number | null = null

export enum Status {
  working = 'working',
  resting = 'resting',
  still = 'still',
}

interface Props {
  workingTime: number
  restingTime: number
  longRestingTime: number
}

export default function usePomodoro({
  workingTime,
  restingTime,
  longRestingTime,
}: Props) {
  const WORK_TIME = workingTime * ONE_SECOND_MS
  const REST_TIME = restingTime * ONE_SECOND_MS
  const LONG_REST_TIME = longRestingTime * ONE_SECOND_MS

  const [counter, setCounter] = useState(WORK_TIME)
  const [isCounterRunning, setIsCounterRunning] = useState(false)
  const [currentStatus, setCurrentStatus] = useState(Status.still)
  const [pomodorosCount, setPomodorosCount] = useState(1)

  const listenToSpaceKey = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      isCounterRunning ? pauseCounter() : startCounter()
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', listenToSpaceKey)

    return () => {
      window.removeEventListener('keyup', listenToSpaceKey)
    }
  }, [isCounterRunning])

  useEffect(() => {
    if (counter === 0) {
      if (currentStatus === Status.working) {
        setCurrentStatus(Status.resting)
        setCounter(
          pomodorosCount === POMODOROS_LIMIT ? LONG_REST_TIME : REST_TIME
        )
        startCounter()
      } else {
        setCurrentStatus(Status.working)
        setCounter(WORK_TIME)
        startCounter()
      }
    }
  }, [counter])

  useEffect(() => {
    if (currentStatus === Status.still && isCounterRunning) {
      setCurrentStatus(Status.working)
    }
  }, [isCounterRunning])

  useEffect(() => {
    if (currentStatus !== Status.still) {
      if (pomodorosCount <= POMODOROS_LIMIT) {
        setPomodorosCount((prev) => prev + 1)
      } else {
        setPomodorosCount(0)
      }
    }
  }, [currentStatus])

  function startCounter() {
    setIsCounterRunning(true)

    function updateCounter() {
      setCounter((prev) => {
        const timeInSeconds = (prev / 60).toFixed(2)
        const endReached = Number(timeInSeconds) === 0.02

        if (endReached) {
          intervalReference && window.clearInterval(intervalReference)
          intervalReference = null
          return 0
        } else {
          return prev - ONE_SECOND
        }
      })
    }

    intervalReference = setInterval(updateCounter, 1000)
  }

  function pauseCounter() {
    intervalReference && window.clearInterval(intervalReference)
    setIsCounterRunning(false)
  }

  function stopCounter() {
    intervalReference && window.clearInterval(intervalReference)
    setCounter(WORK_TIME)
    setCurrentStatus(Status.still)
    setIsCounterRunning(false)
  }

  return {
    counter,
    startCounter,
    pauseCounter,
    stopCounter,
    currentStatus,
    isCounterRunning,
  }
}

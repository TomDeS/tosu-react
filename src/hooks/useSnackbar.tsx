import { useEffect, useState } from 'react'
import settings from '@/config/config'

const { MILLISECONDS } = settings.snack

interface SnackProps {
  isActive: boolean
  message: string
  openSnackbar: (message: string) => void
}

export const useSnackbar = (): SnackProps => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    if (isActive === true) {
      setTimeout(() => {
        setIsActive(false)
      }, MILLISECONDS)
    }
  }, [isActive])

  const openSnackbar = (msg = 'Something went wrong...') => {
    setMessage(msg)
    setIsActive(true)
  }

  return { isActive, message, openSnackbar }
}

export default useSnackbar

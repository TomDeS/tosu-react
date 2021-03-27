import React from 'react'

interface SnackBarProps {
  isActive: boolean
  message: string
}

export const Snackbar: React.FC<SnackBarProps> = ({
  isActive = false,
  message = '',
}) => (
  <>
    {isActive && message && (
      <div className="snackbar--wrapper">
        <div className="snackbar--inner">
          <div className="snack--message">{message}</div>
        </div>
      </div>
    )}
  </>
)

export default Snackbar

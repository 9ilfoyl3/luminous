import React, { useState } from 'react'
import classNames from 'classnames';

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

interface BaseAlertProps {
  className?: string;
  type?: AlertType;
  title?: string;
  message?: string;
  closable?: boolean
}

export type AlertProps = BaseAlertProps & React.HTMLAttributes<HTMLElement>

export const LsAlert: React.FC<AlertProps> = (props) => {
  const {
    className,
    type,
    message,
    title,
    closable,
    onClick,
    ...restProps
  } = props

  const classes = classNames('alert', className, {
    [`alert-${type}`]: type
  })

  const [ isShow, setShow ] = useState(true)

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setShow(!isShow)
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <div>
      {isShow ? 
      <div
        className={classes}
        {...restProps}
      >
        <div className='alert-content'>
          <div className='alert-title'>{title}</div>
          {!!message && <div className='alert-message'>{message}</div>}
        </div>
        {closable ? 
        <span
          className='alert-closeIcon'
          onClick={handleClick}
        >
          关闭
        </span> : null}
      </div> : null}
    </div>
  )
}

LsAlert.defaultProps = {
  type: "default",
  closable: true
}

export default LsAlert
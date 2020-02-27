import React from 'react'
import classNames from 'classnames'
import Icon from '../icon'
import { getPrefix } from '../util/method'
import './index.less'
const prefix = getPrefix('button')

const types = <T extends string[]>(...args: T) => args
const ButtonTypes = types('default', 'primary', 'success', 'danger')
const SizeTypes = types('large', 'normal', 'small')

interface BtnProps {
  children: React.ReactNode
  type?: typeof ButtonTypes[number]
  size?: typeof SizeTypes[number]
  style?: Record<string, string>
  disabled?: boolean
  icon?: string
  onClick?: React.MouseEventHandler<HTMLElement>
}

export default ({
  type = 'default',
  size,
  style,
  disabled,
  icon,
  onClick,
  children
}: BtnProps) => {
  const className = classNames(prefix, {
    [`${prefix}-${type}`]: type,
    [`${prefix}-${size}`]: size
  })
  const props = {
    className,
    style,
    onClick,
    disabled
  }
  return (
    <button {...props}>
      {icon ? <Icon type={icon} /> : null}
      <span>{children}</span>
    </button>
  )
}

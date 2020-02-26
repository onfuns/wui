import React from 'react'
import classNames from 'classnames'
import { getPrefix } from '../util/method'
const prefix = getPrefix('button')

interface BtnProps {
  children: any
  type?: 'primary' | 'danger' | 'default'
  size?: 'large' | 'normal' | 'small'
  [propName: string]: string | undefined
}

export default ({ type = 'default', children }: BtnProps) => {
  const className = classNames(prefix, `${prefix}-${type}`)
  return <button className={className}>{children}</button>
}

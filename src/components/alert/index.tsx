import React, { Component } from 'react'
import classNames from 'classnames'
import { getPrefix } from '../util/method'
import './index.less'

const prefix: string = getPrefix('alert')

interface AlertProps {
  type?: 'success' | 'error' | 'warn' | 'info'
  message: React.ReactNode | string
  className?: string
}

export default class Alert extends Component<AlertProps> {
  render() {
    const { type = 'info' } = this.props
    const className = classNames(prefix, `${prefix}-${type}`)
    return <div className={className}>{this.props.message}</div>
  }
}

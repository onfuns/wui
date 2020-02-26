import React from 'react'
import ReactDom from 'react-dom'
import { getPrefix } from '../util/method'
import Icon from '../icon'
import classNames from 'classnames'
import './index.less'

const prefix: string = getPrefix('message')

export interface MsgProps {
  type: 'success' | 'error' | 'warn' | 'info'
  content?: string
}

const icons = {
  success: 'success',
  error: 'reeor',
  warn: 'warning',
  info: 'prompt'
}

const Message = ({ type, content }: MsgProps) => {
  const className = classNames(`${prefix}-content`, `${prefix}-${type}`)
  return (
    <div className={className}>
      <Icon type={icons[type]} />
      <span>{content}</span>
    </div>
  )
}

let timeId: any = null
const removeAll = () => {
  let doms = document.querySelectorAll(`.${prefix}`)
  doms && doms.forEach(d => d.parentNode && d.parentNode.removeChild(d))
  timeId && clearTimeout(timeId)
}

const notice = (
  type: MsgProps['type'],
  content: string,
  duration: number = 2
) => {
  removeAll()
  const div = document.createElement('div')
  const className = classNames(prefix, 'fadeInDown')
  div.setAttribute('class', className)
  document.body.appendChild(div)
  ReactDom.render(<Message type={type} content={content} />, div)
  if (duration || duration === 0) {
    timeId = setTimeout(() => document.body.removeChild(div), duration * 1000)
  }
}

let message: {
  [type: string]: void
} = {}
;['success', 'error', 'warn', 'info'].map((type: string) => {
  message[type] = notice.bind(null, type)
})

export { message }

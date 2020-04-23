import React from 'react'
import classNames from 'classnames'
//字体使用的是阿里巴巴国际站字库
const baseIconClassName = 'iconfont'

interface Props {
  type: string
  className?: string
  style?: Record<string, string>
  [propName: string]: any
}

export default ({ type, className, style }: Props) => {
  const classname = classNames(baseIconClassName, `icon-${type}`, className)
  return <span className={classname} style={style} />
}

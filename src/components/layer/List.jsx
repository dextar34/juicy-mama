import React from 'react'
import { Link } from 'react-router-dom'
import cn from '../../lib/cn'

const List = ({className,item,href}) => {
  return (
    <Link to={href}>
        <li className={cn(className)} >{item}</li>
    </Link>
  )
}

export default List

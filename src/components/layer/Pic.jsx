import React from 'react'
import { Link } from 'react-router-dom'
import cn from '../../lib/cn'

const Pic = ({className,scr,alt,href}) => {
  return (
    <Link to={href}>
        <picture>
            <img src={scr} alt={alt} className={cn(className)} />
        </picture>
    </Link>
  )
}

export default Pic

import React from 'react'

const ItemHeader = ({title, createdAt}) => {
  return (
    <div className='ItemHeader'>
        <h1>{title}</h1>
        <p>{createdAt}</p>
    </div>
  )
}

export default ItemHeader
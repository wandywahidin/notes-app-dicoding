import React from 'react'

const ItemButton = ({id, onDelete, onArsip}) => {
  return (
    <div className='buttons'>
        <button className='btn-delete' onClick={()=> onDelete(id)}>Delete</button>
        <button className='btn-arsip'  onClick={()=> onArsip(id)}>Arsip</button>
    </div>
  )
}

export default ItemButton
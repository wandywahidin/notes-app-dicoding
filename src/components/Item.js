import React from 'react'
import ItemBody from './ItemBody'
import ItemButton from './ItemButton'
import ItemHeader from './ItemHeader'

const Item = ({title, createdAt, body, onDelete, onArsip, id}) => {
  return (
    <div className='Item'>
        <ItemHeader title={title} createdAt={createdAt}/>
        <ItemBody body={body}/>
        <ItemButton id={id} onDelete={onDelete} onArsip={onArsip}/>
    </div>
  )
}

export default Item
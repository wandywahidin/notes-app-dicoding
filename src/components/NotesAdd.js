import React from 'react'

const NotesAdd = () => {
  return (
    <div className='NotesAdd'>
        <h1>Buat Catatan Baru</h1>
        <p>Sisa Karakter</p>
        <form>
            <input type='text' placeholder='Masukan Judul'/>
            <textarea placeholder='Tulis catatanmu disini'/>
            <button type='submit'>Buat</button>
        </form>
    </div>
  )
}

export default NotesAdd
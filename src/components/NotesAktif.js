import React from "react";
import Item from "./Item";

const NotesAktif = ({ dataNotes, onDeleteHandler, onArsipHandler }) => {
  return (
    <div className="NotesAktif">
      <h1>Catatan Aktif</h1>
      <div className="NotesAktif__body">
        {dataNotes.map((note) => {
          return (
            <Item
              key={note.id}
              id={note.id}
              onDelete={onDeleteHandler}
              onArsip={onArsipHandler}
              {...note}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NotesAktif;

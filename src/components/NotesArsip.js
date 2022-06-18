import React from "react";
import Item from "./Item";

const NotesArsip = ({ dataNotes, onDeleteHandler, onArsipHandler }) => {
  return (
    <div className="NotesArsip">
      <h1>Arsip</h1>
      <div className="NotesArsip__body">
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

export default NotesArsip;

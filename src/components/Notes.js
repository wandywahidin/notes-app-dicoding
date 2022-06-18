import React from "react";
import { getInitialData } from "../utils/data";
import NotesAdd from "./NotesAdd";
import NotesAktif from "./NotesAktif";
import NotesArsip from "./NotesArsip";
import NotesHeader from "./NotesHeader";

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataNotes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArsipHandler = this.onArsipHandler.bind(this);
  }

  onDeleteHandler = (id) => {
    const dataNotes = this.state.dataNotes.filter((note) => note.id !== id);
    this.setState({ dataNotes });
    console.log(dataNotes);
  };

  onArsipHandler = () => {};

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <NotesHeader />
        <NotesAdd/>
        <NotesAktif
          onDeleteHandler={this.onDeleteHandler}
          onArsipHandler={this.onArsipHandler}
          dataNotes={this.state.dataNotes}
        />
        <NotesArsip
          onDeleteHandler={this.onDeleteHandler}
          onArsipHandler={this.onArsipHandler}
          dataNotes={this.state.dataNotes}
        />
      </div>
    );
  }
}

export default Notes;

import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions'; 
import NoteStore from '../stores/NoteStore';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = NoteStore.getState();
	}

	componentDidMount() {
		NoteStore.listen(this.storeChanged); 
	}

	componentWillUnmount() { 
		NoteStore.unlisten(this.storeChanged);
  	}

  	 storeChanged = (state) => {
		// Without a property initializer `this` wouldn't
		// point at the right context (defaults to `window`). this.setState(state);
	}

	addNote() { //addNote = () => let bind to this or use this.addNote.bind(this);
		NoteActions.create({task: 'New task'});
	}

	editNote(id, task) {
		NoteActions.update({id, task});
	}

	deleteNote(id) {
		NoteActions.delete(id);
	}

	render() {
		const notes = this.state.notes;

		return (
			<div>
				<button className="add-note" onClick={this.addNote.bind(this)}>+</button>
				<Notes items={notes} 
					onEdit={this.editNote.bind(this)}
					onDelete={this.deleteNote.bind(this)} />
			</div>
		);
	}
}

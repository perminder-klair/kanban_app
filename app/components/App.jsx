import React from 'react';
import Notes from './Notes.jsx';
import uuid from 'node-uuid';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'Learn Webpack'
				},
				{
					id: uuid.v4(),
					task: 'Learn React'
				},
				{
					id: uuid.v4(),
					task: 'Learn Everything'
				}
			]
		}
	}

	renderNote(note) {
		return (
			<li key={note.id}>
				<Note task={note.task} />
			</li>
		);
	}

	addNote() { //addNote = () => let bind to this or use this.addNote.bind(this);
		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),
				task: 'New task'
			}])
		});
	}

	editNote(id, task) {
		const notes = this.state.notes;
		const noteIndex = this.findNote(id);

		if (noteIndex < 0) {
			return;
		}

		notes[noteIndex].task = task;

		//shorthand - {notes} is the same as {notes: notes}
		this.setState({notes});
	}

	deleteNote(id) {
		const notes = this.state.notes;
		const noteIndex = this.findNote(id);

		if (noteIndex < 0) {
			return;
		}

		this.setState({
			notes: notes.slice(0, noteIndex).concat(notes.slice(noteIndex + 1))
		});
	}

	findNote(id) {
		const notes = this.state.notes;
		const noteIndex = notes.findIndex((note) => note.id === id);

		if (noteIndex < 0) {
			console.warn('Failed to find note', notes, id);
		}

		return noteIndex;
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

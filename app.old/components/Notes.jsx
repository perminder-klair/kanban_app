import React from 'react';
import Note from './Note.jsx';

export default class Notes extends React.Component {
	renderNote(note, ev) {
		return (
			<li className="note" key={note.id}>
				<Note task={note.task}
					onEdit={this.props.onEdit(note.id)}
					onDelete={this.props.onDelete(note.id)} />
			</li>
		);
	}

	render() {
		const notes = this.props.items;

		return (
			<ul className="notes">
				{notes.map(this.renderNote.bind(this))}
			</ul>
		)
	}
}

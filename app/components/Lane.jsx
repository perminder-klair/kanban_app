import React from 'react';
import AltContainer from 'alt-container';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions'; 
import NoteStore from '../stores/NoteStore';

export default class Lane extends React.Component {
	addNote() { //addNote = () => let bind to this or use this.addNote.bind(this);
		NoteActions.create({task: 'New task'});
	}

	editNote(id, task) { //addNote = () => let bind to this or use this.addNote.bind(this);
		NoteActions.update({id, task});
	}

	addNote(id) { //addNote = () => let bind to this or use this.addNote.bind(this);
		NoteActions.delete(id);
	}

	render() {
		const (lane, ...props) = this.props;

		return (
			<div {...props}>
				<div className="lane-header">
					<div className="lane-name">
						{lane.name}
					</div>
					<div className="lane-add-note">
						<button onClick={this.addNote}>+</button>
					</div>
				</div>
				<AltContainer
					stores={[NoteStore]}
					inject={{items:() => NoteStore.getState().notes || []}}>
					<Notes
						onEdit={this.editNote}
						onDelete={this.deleteNote} />
				</AltContainer>
			</div>
		);
	}
}

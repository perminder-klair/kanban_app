import React from 'react';

export default class Note extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editing: false
		};
	}

	renderEdit() {
		return (
			<input type="text"
			autoFocus={true}
			defaultValue={this.props.task}
			onBlur={this.finishEdit.bind(this)}
			onKeyPress={this.checkEnter.bind(this)} />
		);
	}

	renderDelete() {
		return (
			<button className="delete"
				onClick={this.props.onDelete}>x</button>
		);
	}

	renderTask() {
		const onDelete = this.props.onDelete;

		return (
			<div onClick={this.edit.bind(this)}>
				<span className="task">{this.props.task}</span>
				{onDelete ? this.renderDelete() : null}
			</div>
		);
	}

	edit() {
		this.setState({
			editing: true
		});
	}

	checkEnter(e) {
		if (e.key === 'Enter') {
			this.finishEdit(e);
		}
	}

	finishEdit(e) {
		this.props.onEdit(e.target.value);

		this.setState({
			editing: false
		});
	}

	render() {
		const editing = this.state.editing;

		return (
			<div>
				{editing ? this.renderEdit() : this.renderTask()}
			</div>
		);
	}
}

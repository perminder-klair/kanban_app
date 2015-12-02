import React from 'react';
import AltContainer from 'alt-container';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions'; 
import LaneStore from '../stores/LaneStore';

export default class App extends React.Component {
	addItem() { //addNote = () => let bind to this or use this.addNote.bind(this);
		LaneActions.create({name: 'New lane'});
	}

	render() {
		return (
			<div>
				<button className="add-lane" onClick={this.addItem.bind(this)}>+</button>
				<AltContainer stores={[LaneStore]}
				inject={{items:() => LaneStore.getState().lanes || []}}>
					<Lanes />
				</AltContainer>		
			</div>
		);
	}
}

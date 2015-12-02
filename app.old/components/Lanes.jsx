import React from 'react';
import Lane from './Lane.jsx';

export default class Lanes extends React.Component {
	renderLane(lane) {
		return (
			<Lane className="lane" 
			key={lane.id}
			lane={lane} />
		);
	}

	render() {
		const lanes = this.props.lanes;

		return (
			<div className="lanes">
				{lanes.map(this.renderLane)}
			</div>
		)
	}
}

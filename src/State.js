import Axios from "axios";
import React, { Component } from "react";

export class State extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [],
			baseUrl:
				"https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
		};
	}

	componentDidMount() {
		Axios.get(this.state.baseUrl)
			.then((response) => response.data)
			.then((res) => {
				var { regionData } = res;
				this.setState({
					lists: regionData
				});
			});
	}

	render() {
		return (
			<div>
				<hr />
				{this.state.lists.map((x, index) => {
					return (
						<div key={index}>
							<h1>{x.region}</h1>
							<h4>Total Infected: {x.totalInfected}</h4>
							<h4>New Infected: {}</h4>
							<h4>Recovered: {x.recovered}</h4>
							<h4>New Recovered: {x.newRecovered}</h4>
							<h4>Deceased: {x.deceased}</h4>
							<h4>New Deceased: {x.newDeceased}</h4>
							<hr />
						</div>
					);
				})}
			</div>
		);
	}
}

export default State;

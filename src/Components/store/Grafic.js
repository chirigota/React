import React, { PureComponent } from 'react';
import {
	BarChart, Bar, XAxis, Tooltip, Legend,
} from 'recharts';
import './Grafic.css';
import DaySelector from './DaySelector'

const data = [
	{
		name: '6', uv: 0
	},
	{
		name: '7', uv: 0
	},
	{
		name: '8', uv: 0
	},
	{
		name: '9', uv: 32
	},
	{
		name: '10', uv: 100
	},
	{
		name: '11', uv: 100
	},
	{
		name: '12', uv: 54
	},
	{
		name: '13', uv: 51
	},
	{
		name: '14', uv: 51
	},
	{
		name: '15', uv: 32
	},
	{
		name: '16', uv: 12
	},
	{
		name: '17', uv: 0
	},
	{
		name: '18', uv: 6
	},
	{
		name: '19', uv: 9
	},
	{
		name: '20', uv: 0
	},
];

export default class Example extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			"value": "monday"
		}
	}



	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

	render() {
		console.log();
		return (
			<div>
				<p className="popularTiming">Horarios populares: <DaySelector value={this.state.value} select={e => this.setState({ ...this.state, "value": e.target.value })} style={{
					background: "transparent",
					color: "white",
					outline: "none",
					border: "none"
				}} /> </p>
				<BarChart
					width={370}
					height={150}
					data={this.props.data[this.state.value].substr(1, this.props.data[this.state.value].length).split(", ").splice(7, 14).map((el, id) => ({ "name": `${id + 8}`, "uv": el }))}
					margin={{
						top: 10, right: 30, left: 20, bottom: 5,
					}}
				>

					<XAxis dataKey="name" height={50} />
					<Tooltip />
					<Legend />
					<Bar dataKey="uv" fill="#00B3BD" radius={[4, 4, 0, 0]} />
				</BarChart>
			</div >
		);
	}
}

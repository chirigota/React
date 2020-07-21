import React, { PureComponent } from 'react';
import {
	BarChart, Bar, XAxis, Tooltip, Legend,
} from 'recharts';
import './Grafic.css';
import DaySelector from './DaySelector'

const data = [
	{
		name: '6am', uv: 0
	},
	{
		name: '7am', uv: 0
	},
	{
		name: '8am', uv: 0
	},
	{
		name: '9am', uv: 32
	},
	{
		name: '10am', uv: 100
	},
	{
		name: '11am', uv: 100
	},
	{
		name: '12pm', uv: 54
	},
	{
		name: '13pm', uv: 51
	},
	{
		name: '14pm', uv: 51
	},
	{
		name: '15pm', uv: 32
	},
	{
		name: '16pm', uv: 12
	},
	{
		name: '17pm', uv: 0
	},
	{
		name: '18pm', uv: 6
	},
	{
		name: '19pm', uv: 9
	},
	{
		name: '20pm', uv: 0
	},
];

// de 8 a 20

export default class Example extends PureComponent {
	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

	render() {
		return (
			<div>
				<p className="popularTiming">Horarios populares: <DaySelector style={{
					background: "transparent",
					color: "white",
					outline: "none",
					border: "none"
				}} /> </p>

				<BarChart
					width={370}
					height={150}
					data={data}
					margin={{
						top: 10, right: 30, left: 20, bottom: 5,
					}}
				>

					<XAxis dataKey="name" height={50} />
					<Tooltip />
					<Legend />
					<Bar dataKey="uv" fill="#00B3BD" radius={[4, 4, 0, 0]} />
				</BarChart>
			</div>
		);
	}
}

// import React, { Component } from 'react';
// import Carousel from 're-carousel'
// import IndicatorDots from './indicator-dots'
// import Buttons from './buttons'
// import './Start.css'

// export default function carousel() {
// 	// loop auto widgets makes the loop movement between divs in return Carousel:loop auto widgets={[IndicatorDots, Buttons]}
// 	return <Carousel widgets={[IndicatorDots, Buttons]}>
// 		<div style={{ backgroundColor: 'green'}, {height: '100%' }}>texto 1</div>
// 		<div style={{ backgroundColor: 'red', height: '100%' }}>texto 2</div>
// 		<div style={{ backgroundColor: 'tea', height: '100%' }}>texto 3</div>
// 	</Carousel>
// }
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
// import Button from 'react-bootstrap/Button'
import './Start.css'

class Start extends Component {

	state = {
		items: [
			{ id: 1, title: 'En la pantalla principal elige la ubicación y el tipo de local al que te gustaría ir y a continuación te mostraremos en el mapa las opciones disponibles', img:'./../../../public/images /house.png'}, 
			{ id: 2, title: 'En el mapa se mostrarán los locales más próximos a tu ubicación y los identificará según su ocupación en tiempo real para que tengas la información antes de ir:' },
			{ id: 3, title: 'Sabemos que te gusta ser fiel a tus tiendas de siempre, pero si la ocupación es muy alta te recomendamos elegir otra hora con menor ocupación o elegir un establecimiento similar que esté en verde. A demás por cada visita que registres en verde, te daremos puntos que podrás canjear por promociones en alguna de tus tiendas favoritas.' },
			
		]
	}

	render() {
		const { items } = this.state;
		return (
			<Carousel>
				{items.map(item => <div key={item.id}>{item.title}, {item.img}</div>)}
			</Carousel>
		)
	}
}
export default Start;


import React, { Component } from 'react'
import Swiper from "better-react-swiper";



class Swiper2 extends Component {
	render() {
		return (
			<div>
					<Swiper items={this.props.items}
						// items={[
						// 	<div>
						// 		<h1>Holi</h1>
						// 		<p>Holaaa</p>
						// 	</div>,
						// 	<img
						// 		alt=""
						// 		src="https://picsum.photos/300/200?image=163"
						// 		style={{ width: '90%' }}
						// 	/>,
						// 	<img
						// 		alt=""
						// 		src="https://picsum.photos/300/200?image=225"
						// 		style={{ width: '90%' }}
						// 	/>,
						// 	<img
						// 		alt=""
						// 		src="https://picsum.photos/300/200?image=292"
						// 		style={{ width: '90%' }}
						// 	/>,
						// ]}
						itemsWide={this.props.items.length}
						infinity
						arrowStyle={{ display: "none" }}
					/>
			</div>
		)
	}
}


export default Swiper2;
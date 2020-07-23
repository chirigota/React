import React, { Component } from 'react'
import Swiper from "better-react-swiper";
	
 class Swipe extends Component {
		render() {
			return (
				<div style={{width: "100vw"}}>
					<div className="wrapper" style={{ margin: '20px'}}>
						<Swiper items={this.props.items}
							itemsWide={this.props.items.length}
							infinity
							arrowStyle={{ display:"none" }}
						/>
					</div>
				</div>
			)
		}
	}

	export default Swipe
	
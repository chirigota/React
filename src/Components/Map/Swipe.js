// import React from "react";
// import ReactDOM from "react-dom";
// import Swiper from "better-react-swiper";

// import "./Swipe.css";

// function Card(props) {
// 	return (
// 		<div
// 			style={{
// 				margin: "0 10px 20px",
// 				width: "100%",
// 				boxShadow: "0 0 6px rgba(0, 0, 0, 0.15)",
// 				borderRadius: "10px",
// 				display: "flex",
// 				flexDirection: "column",
// 				justifyContent: "flex-end",
// 				color: "#105783"
// 			}}
// 		>
// 			<img
// 				src={`https://picsum.photos/300/200?image=${props.id}`}
// 				alt={props.content}
// 				style={{ width: "100%", userSelect: "none", pointerEvents: "none" }}
// 			/>
// 			<div style={{ alignSelf: "flex-start", padding: "7px" }}>
// 				{props.content}
// 			</div>
// 		</div>
// 	);
// }

// function App() {
// 	return (
// 		<div className="App">
// 			<div className="wrapper" style={{ margin: "60px 0" }}>
// 				<Swiper
// 					items={[
// 						<Card id={1084} content="Lorem ipsum" />,
// 						<Card id={1081} content="Lorem ipsum" />,
// 						<Card id={1070} content="Lorem ipsum" />,
// 						<Card id={1050} content="Lorem ipsum" />,
// 						<Card id={1041} content="Lorem ipsum" />,
// 						<Card id={1039} content="Lorem ipsum" />
// 					]}
// 				/>
// 			</div>
// 		</div>
// 	);
// }

// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<App />, rootElement);


// export default Swiper;









// ----- -----  https://swiperjs.com/get-started/    ----- -----
// Import Swiper React components
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import './Swipe.css'
// // Import Swiper styles
// // import 'swiper/swiper.scss';

// export default () => {
// 	return (
// 		<Swiper
// 			spaceBetween={50}
// 			slidesPerView={3}
// 			onSlideChange={() => console.log('slide change')}
// 			onSwiper={(swiper) => console.log(swiper)}
// 		>
// 			<SwiperSlide>Slide 1</SwiperSlide>
// 			<SwiperSlide>Slide 2</SwiperSlide>
// 			<SwiperSlide>Slide 3</SwiperSlide>
// 			<SwiperSlide>Slide 4</SwiperSlide>
    
// 		</Swiper>
// 	);
// };
import React, { Component } from 'react'
import Swiper from "better-react-swiper";


	
 class Swipe extends Component {
		render() {
			return (
				<div>
					<div className="wrapper" style={{ margin: '20px'}}>
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
							arrowStyle={{ display:"none" }}
						/>
					</div>
				</div>
			)
		}
	}

	
	export default Swipe
	

























// import React, { Component } from 'react'
// import { Swiper, Slide, MyNextButton, MyPrevButton } from 'react-dynamic-swiper'
// import 'react-dynamic-swiper/lib/styles.css'

// class MySwiper extends Component {
// 	constructor(props, context) {
// 		super(props, context)
// 		this.state = {
// 			slides: []
// 		}
// 	}

// 	componentWillMount() {
// 		let getAsyncSlideData= getAsyncSlideData().then(slides => this.setState({ slides }))
// 	}
// 	doSomething(){
// 		console.log("holi")
// 	}
		

// 	render() {
// 		const { slides } = this.state

// 		return (
// 			<Swiper
// 				swiperOptions={{
// 					slidesPerView: 'auto'
// 				}}
// 				nextButton={<MyNextButton />}
// 				prevButton={swiper => (
// 					<MyPrevButton onClick={() => swiper.slideNext()} />
// 				)}
// 				onTouchMove={(swiper, event) => doSomething()}
// 			>
// 				{slides.map(slide => (
// 					<Slide {...slide} />
// 				))}
// 			</Swiper>
// 		)
// 	}
// }
// export default MySwiper;

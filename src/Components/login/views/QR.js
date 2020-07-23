import React, {Component} from 'react';
import Rectangle2 from './Rectangle2'
import './../../onboarding/OnBoarding.css'

class QR extends Component{

	render(){
		return(
			<div className="qrContainer">
				<div className="qrHeader">
					<div > <a href="/" className="iconArrowQR"><img  className="iconArrow2" src="images/arrow.png" alt="atrás"></img></a></div>
				<h2 className="qrTitle">Generador de QR</h2>
				</div>
				<div className="qrCode">
					<img className="qrCodeImg"src="images/qrcode.png" alt="código qr"/>
				</div>
				<p className="qrText">Muestra este código al pagar para obtener tus puntos</p>
				<div className="qrFooter">
				<Rectangle2 />
				</div>
			</div>
		)
	}
}
export default QR;
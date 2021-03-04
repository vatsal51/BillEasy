import React, { Component } from 'react'
import './myStyles.css'
class Background extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: null,
			loading: true,

		};
		this.clickHandler = this.clickHandler.bind(this);
	}
	async componentDidMount() {
		const url = 'http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0';
		const response = await fetch(url);
		const data = await response.json();
				this.setState({ items: data, loading: false });
		//    console.log(data.urls.small);
		// console.log(this.state.items)
		// console.log(this.state.loading);
	}

	clickHandler = (elem) => {
		const img = document.querySelectorAll(".g-img");
		if (elem.target.className == "g-img") {
			img.forEach(radi => {
				radi.classList.remove("scale");
				elem.target.classList.add("scale");
			});
		}
		else {
			img.forEach(radi => {
				radi.classList.remove("scale");
			});
		}
	}

	render() {
		return (
			<div>
				{this.state.loading || !this.state.items ? (
					<div>loading...</div>
				) : (
						<div className="gallery">
							{this.state.items.map((item, index) => {
								// console.log(item.urls.small);
								return (<img className="g-img" onClick={this.clickHandler} key={index} src={item.urls.small} alt="altimage" />)
							})
							}
						</div>
					)}
			</div>

		);
	}

}
export default Background;

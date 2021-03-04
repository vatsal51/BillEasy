import React, { Component } from 'react'
class Background extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: null,
			loading: true
		};
	}
	async componentDidMount() {
		const url = 'http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0';
		const response = await fetch(url);
		const data = await response.json();
		// console.log(data.length)
		//    this.setState({items:data[2].urls.small, loading:false});
		this.setState({ items: data, loading: false });

		//    console.log(data.urls.small);
		// console.log(this.state.items)
		// console.log(this.state.loading);
	}

	render() {
		return (
			<div>
				{this.state.loading || !this.state.items ? (
					<div>loading...</div>
				) : (
						<div className="adssa">
							aaa
							{/* {this.state.items} */}
							{this.state.items.forEach((item) => {
								console.log(item.urls.small);
								return (<span>{item.urls.small}</span>)
							})
							}
						</div>
					)}
			</div>

		);
	}

}
export default Background;
// {this.state.items.map((item) => {
// 	console.log(item.urls)
// 	console.log(item.urls.small);
// 	console.log(item.id);
	
// 	{/* <img  key={item.id} src={item[3].urls.small} alt="image" width="500" height="500"/> */}
// 	<img  key={item.id} src={item} alt="image" width="500" height="500"/>
	
	
// 	})}
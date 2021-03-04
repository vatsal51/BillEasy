import React, { Component } from 'react'
import './myStyles.css'

class gallery extends Component {

constructor(props) {
  super(props)

  this.state = {
     photos:[]
  }
}

componentDidMount() {
  // fetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
  fetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
  .then(response =>{
    console.log("response", response);
    if(!response.ok){
      throw Error("Error fetching the cute doggie")
    }
    return response.json()
    .then(allData => {
this.setState({photos: allData});
    })
    .catch(err => {
      throw Error(err.message);
    });
  });
}

    render() {
        return (
            <div className="gallery">
              <h1>Hello</h1>
    <img
      src="./1.jpg"
      alt="flex-gallery" />
    <img
      src="https://images.unsplash.com/photo-1571210059434-edf0dc48e414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      alt="flex-gallery" />
    <img
      src="https://images.unsplash.com/photo-1571030439710-121569126a76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      alt="flex-gallery" />
    <img
      src="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=60"
      alt="flex-gallery" />
    <img
      src="https://images.unsplash.com/photo-1569834381156-7b735e41e57d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      alt="flex-gallery" />
    <img
      src="https://images.unsplash.com/photo-1569493086584-33e0b36f3145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      alt="flex-gallery" />
    <img
      src="https://images.unsplash.com/photo-1569398034126-476b0d96e2d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      alt="flex-gallery" />
    <img
      src="https://images.unsplash.com/flagged/photo-1569430044663-054ffc0c50c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      alt="flex-gallery" />
    <img
      src="https://images.unsplash.com/photo-1569241786334-1214c0f1f3bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      alt="flex-gallery" />
  </div>
        )
    }
}

export default gallery

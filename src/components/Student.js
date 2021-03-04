import React, { Component } from 'react'
class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded: false
        };
    }
    componentDidMount(){
        // fetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
      fetch('https://www.hatchways.io/api/assessment/students')
          .then(res => res.json())
        
          .then(({students}) => {
              
              this.setState({
                  isLoaded: true,
                  items:  students,
              })
          });
  }

    render(){
        const {isLoaded, items} = this.state;
       
        return(
            <div className="App">
              <div className="Data">
                  <div>
                      {items.map(item=>(
                          <p key={item.id}>

<img src={item.pic}/>
                          </p>

                      ))};
                  </div>
              </div>
              </div>

          );

    }

}

export default Student;
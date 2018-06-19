import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      gender: ''
    }

    this.createInfo = this.createInfo.bind(this)
  }


	createInfo() {
		let url = 'https://randomuser.me/api/?nat=us'
    axios.get(url)
      .then(res => {
        let info = res.data.results[0]        
        console.log(info)
        this.setState({
          name: info.name.first + " " + info.name.last          
        })
      })
	}

	render() {
		return (
			<div className="App">
				<button style={divStyle} onClick={this.createInfo}>Create info</button>
        <p>{this.state.name}</p>
			</div>
		);
	}  
}

const divStyle = {
  color: 'blue',
  width: '200px',
  height: '50px'
};

export default App;

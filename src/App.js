import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      gender: '',
      country: 'United States',
      date: ''
    }

    this.createInfo = this.createInfo.bind(this)
    this.randomDate = this.randomDate.bind(this)
  }

  randomDate(date1, date2){
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '01-01-1970'
    var date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()

    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    function formatDate(date) {
      let d = date.toString().split("/")
      let hour = getRandomArbitrary(6, 23)
      let min = getRandomArbitrary(0, 60)
      let sec = getRandomArbitrary(0, 60)
      let formated = d[2] + "-" + d[1] + "-" + d[0] + " " + hour + ":" + min + ":" + sec


      return formated
    }

    if( date1>date2){     
      let date = formatDate(new Date(getRandomArbitrary(date2,date1)).toLocaleDateString()) 
        return date
    } else{
      let date = formatDate(new Date(getRandomArbitrary(date1, date2)).toLocaleDateString())
        return date
    }
}


	createInfo() {
		let url = 'https://randomuser.me/api/?nat=us'
    axios.get(url)
      .then(res => {
        let info = res.data.results[0]        
        console.log(info)
        let first = info.name.first.charAt(0).toUpperCase() + info.name.first.slice(1)
        let last = info.name.last.charAt(0).toUpperCase() + info.name.last.slice(1)
        let date = this.randomDate('02/13/2015', '10/18/2018')
        this.setState({
          name: first + " " + last,
          date
        })
      })
	}

	render() {
		return (
			<div className="App">
				<button style={divStyle} onClick={this.createInfo}>Create info</button>
        <p>{this.state.name}</p>
        <p>{this.state.date}</p>
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

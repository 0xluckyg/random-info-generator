import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: [],
      gender: '',
      country: 'United States',
      date: []
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
      hour = ('0' + hour).slice(-2)
      let min = getRandomArbitrary(0, 60)
      min = ('0' + min).slice(-2)
      let sec = getRandomArbitrary(0, 60)
      sec = ('0' + sec).slice(-2)
      let formated = '20'+('0' + d[2]).slice(-2) + "-" + ('0' + d[0]).slice(-2) + "-" +('0' + d[1]).slice(-2) + " " + hour + ":" + min + ":" + sec


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


	createInfo(num) {
    console.log(num)
    if (num == 0) {
      return 
    }
    let url = 'https://randomuser.me/api/?nat=us'
    axios.get(url)
      .then(res => {
        let info = res.data.results[0]        
        console.log(info)
        let first = info.name.first.charAt(0).toUpperCase() + info.name.first.slice(1)
        let last = info.name.last.charAt(0).toUpperCase() + info.name.last.slice(1)
        let date = this.randomDate('02/13/2015', '10/05/2018')
        this.setState(prevState => ({
          name: [...prevState.name, first + " " + last],
          date: [...prevState.date, date]
        }))
      }).then(() => {
        this.createInfo(num - 1)
      })
	}

	render() {
		return (
			<div className="App">
				<button style={divStyle} onClick={() => this.createInfo(125)}>Create info</button><br/>
        {this.state.name.map(n => {
          return <span style={{lineHeight: 0}}>{n}<br></br></span>
        })} 
        {this.state.date.map(d => {
          return <span style={{lineHeight: 0}}>{d}<br></br></span>
        })}                
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

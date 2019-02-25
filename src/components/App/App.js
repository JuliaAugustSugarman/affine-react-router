import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import '../MonthItem/MonthItem';
// import '..MonthList/MonthList';
import MonthItem from '../MonthItem/MonthItem';

class App extends Component {

  State = {
    monthList: [],
    //month displayed
  }
  componentDidMount() {  //on ready function react function
    this.getCalendar();
  }

  getCalendar = () => {
    axios({
      method: 'GET',
      url: '/calendar'
    }).then( (response) => {
      this.setState({
        monthList: response.data
      });
    }).catch( (error) => {
      alert( 'could not GET Calendar!' );
      console.log('could not get calendar', error);
    })
  };


  render() {

    return (
      <div className = "App" >
        <header className = "App-header" >
          <h1 className = "App-title" > Select a Month </h1>
          <h3> SELECTED MONTH GOES HERE </h3>
          <MonthItem />
          <br />
        </header>
        <br />
        <p> List of months goes here </p>


       
        <MonthList list = {this.state.monthList} />

      </div>
    );
  }
}

export default App;

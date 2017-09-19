import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

//Import components
import NextEvent from './Containers/nextEvent';
import Input from './Containers/input';
import EventList from './Containers/eventList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.fetchEvents();
  }

  createEvent = (data) => {
    console.log('POST');
    fetch('http://localhost:3000/',  {    //http://cw-events.herokuapp.com/events
      method: 'POST',
      headers: {
        // 'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: data.title,
        date: data.date,
        venue: data.venue,
      })
    })
    .then(() => this.fetchEvents())
  }

  fetchEvents() {
    let details = {method: 'GET'};                //is this needed?
    fetch('http://localhost:3000/', details)      ////cw-events.herokuapp.com/events
    .then(response =>response.json())
    .then(result => result.sort((a,b) => {
      if (Date.parse(a.date) > Date.parse(b.date)) return 1;
      if (Date.parse(a.date) < Date.parse(b.date)) return -1;
    }))
    .then(events => {
      this.props.addEvents(events);
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to Your Calendar App</h2>
          <div className="Container">
            <div className="NextEvent">< NextEvent /></div>
            <div className="AddEvent">< Input onCreate={this.createEvent} /></div>
            <div className="EventList">< EventList events={this.props.events}  /></div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addEvents: (events) => dispatch({
      type: 'ADD_EVENTS',
      events
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

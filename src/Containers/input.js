import React from 'react';
import './input.css';
import './eventList'
import EventList from './eventList';

export class Input extends React.Component {
  state = {
    title: '',
    date: undefined,
    venue: '',
  }

  titleChanged = (event) => {
    // called when input[id=title] changes its value
    this.setState({
      title: event.target.value
    })
  }

  dateChanged = (event) => {
    // called when input[id=title] changes its value
    console.log('DATE', event.target.value)
    this.setState({
      date: event.target.value
    })
  }

  venueChanged = (event) => {
    // called when input[id=title] changes its value
    this.setState({
      venue: event.target.value
    })
  }

    render () {
      return (
        <div className = "holder">
          <h3 className="InputTitle"><b>Add Event</b></h3>
          <form action="" id="form" onSubmit={this.eventPost}>
            {/* We set this below input to call this.titleChanged when it changes */}
            <label>Title</label><input type="text" id="title" onChange={this.titleChanged} value={this.state.title}/>
            <label>Date</label><input type="date" id="date" onChange={this.dateChanged} value={this.state.date}/>
            <label>Venue</label><input type="text" id="venue" onChange={this.venueChanged} value={this.state.venue}/>
            <button type="submit" value="Submit">Submit</button>
          </form>
        </div>
      )
    }

    eventPost = (event) => {
      event.preventDefault();
      // Instead of calling fetch here (business logic), we call a function
      // passed to us through the props from the Container (App)
      this.props.onCreate(this.state)
      this.clear(event);
    }

    clear = (event) => {
      event.preventDefault();
      console.log('CLEAR')
      this.setState({
        title: '',
        date: '',
        venue: '',
      })
    }

}

export default Input;

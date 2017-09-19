import React from 'react';
import { connect } from 'react-redux';
import './nextEvent.css';

export class NextEvent extends React.Component {


  nextEvent () {
    let res = []
    let sam = this.props.events;


let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    for (var obj in sam) {
      if (Date.now() < Date.parse(sam[obj].date)) {
    res.push(
      <div>
        <p className="NewDate">{new Date(sam[obj].date).getDate()} {monthArr[new Date(sam[obj].date).getUTCMonth()]}</p>
        <p className="EventTitle">{sam[obj].title}</p>
       <p><img src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/location-alt-512.png"/> {sam[obj].venue}</p>
      </div>
    )

  }

  }
    return res[0];
  }


    render () {
      return (
        <div className = "NextEventContainer">
          <h3 className="NextEventTitle"><b>Next Event</b></h3>
          {this.nextEvent()}
        </div>
      )
    }

}

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, null)(NextEvent);

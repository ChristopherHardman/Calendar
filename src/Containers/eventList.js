import React from 'react';
import './eventList.css';

export class EventList extends React.Component {

  eventSort() {
    let res = [];
    let sam = this.props.events;
    let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      for (var obj in sam) {
        if (Date.now() < Date.parse(sam[obj].date)) {
      res.push(
        <div className="EventList">
          <div className="ListDate">
            <p >{new Date(sam[obj].date).getDate()}</p>
            <p> {monthArr[new Date(sam[obj].date).getUTCMonth()]}</p>
          </div>
            <p className="EventTitle">{sam[obj].title}</p>
            <p>{sam[obj].venue}</p>
        </div>
      )
    }
  }
  return res;
  }

    render () {
      return (
        <div className="ListContainer">
          <h3><b>Upcoming Events</b></h3>
          <div className="ListHolder">{this.eventSort()}</div>
        </div>
      )
    }

}


export default EventList;

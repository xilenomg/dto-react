import React, { Component } from 'react';
import EventsService from '../../service/EventsService';
import Event from './Event';
import './EventsList.scss';

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedEvents: [],
      events: {},
    };

    this.loadEvents = this.loadEvents.bind(this);
  }

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents() {
    EventsService.requestEvents().then((events) => {
      this.setState({
        sortedEvents: events.sortedEvents,
        events: events.finalEvents,
      });
    });
  }

  render() {
    const { events, sortedEvents } = this.state;
    return (
      <div className="EventsList">
        {sortedEvents.map(transactionId => <Event key={`event-${transactionId}`} {...events[transactionId]} />)}
      </div>
    );
  }
}

export default EventsList;

import React, { Component } from 'react';

class RoomList extends Component {
  
  constructor(props) {
    super(props);

    this.roomsRef = this.props.firebase.database().ref('rooms');

    this.state = {
      rooms: [],
    };
  }

  componentDidMount() {
    this.roomsRef.on('child_added', (snapshot) => {
      console.log(snapshot);
      var room = {};
      room.name = snapshot.val();
      room.key = snapshot.key;
      this.setState({
        rooms: this.state.rooms.concat(room)
      });
    });
  }

  render() {
    return (
      this.state.rooms.map(room => {
        return <div key={room.key}>{room.name}</div>
      })
    )
  }
}

export default RoomList;
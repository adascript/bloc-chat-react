import React, { Component } from 'react';

class RoomList extends Component {
  
  constructor(props) {
    super(props);

    this.roomsRef = this.props.firebase.database().ref('rooms');

    this.state = {
      rooms: [],
      newRoomName: "",
    };
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.roomsRef.push(this.state.newRoomName);
    this.setState({newRoomName: ""});
  }

  handleRoomNameChange(e) {
    this.setState({newRoomName: e.target.value});
  }

  componentDidMount() {
    this.roomsRef.on('child_added', (snapshot) => {
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
      <div>
        <ul>
        {this.state.rooms.map(room => <li key={room.key}>{room.name}</li>)}
        </ul>
        <form onSubmit={e => {this.handleFormSubmit(e)}}>
          <input type="text" value={this.state.newRoomName} onChange={e => {this.handleRoomNameChange(e)}} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default RoomList;
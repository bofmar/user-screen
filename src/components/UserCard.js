import React, { Component } from "react";

export default class UserCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, username, avatar, gamesBeaten, gamesInBacklog } = this.props.user;
    console.log(id);
    return (
      <div>
        <img src={avatar} />
        <h1>{username.toUpperCase()}</h1>
        <p>{`User ID: ${id}`}</p>
        <p>{`Games beate: ${gamesBeaten}`}</p>
        <p>{`Games in backlog: ${gamesInBacklog}`}</p>
      </div>
    )
  }
}

import React, { Component } from "react";

export default class UserCard extends Component {
  constructor(props) {
    super(props);
  }

  getPercentageBeaten(total, beaten) {
    return (beaten * 100 / total).toFixed(2);
  }

  render() {
    const { id, username, avatar, gamesBeaten, gamesInBacklog } = this.props.user;
    return (
      <div>
        <img src={avatar} />
        <h1>{username.toUpperCase()}</h1>
        <p>User ID: {id}</p>
        <p>Games beaten: {gamesBeaten}</p>
        <p>Games in backlog: {gamesInBacklog}</p>
        <p>Total games: {gamesBeaten + gamesInBacklog}</p>
        <p>Completion Percentage: {this.getPercentageBeaten((gamesBeaten + gamesInBacklog), gamesBeaten)}%</p>
      </div>
    )
  }
}

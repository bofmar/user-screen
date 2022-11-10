import React from "react";

export default function Header() {
  return (
    <header>
      <div className='left-side'>
        <h1>Backlog.it</h1>
        <input type='search' placeholder='Search For Your Favorite Games...' />
      </div>
      <div className='links'>
        <a>Forum</a>
        <a>Stats</a>
        <a>Submit</a>
        <a>Logout</a>
      </div>
    </header>
  )
}

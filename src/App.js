import './App.css';

const user = {
  id: 12934,
  username: 'bofmar',
  avatar: '', //TODO add avatar location
  gamesBeaten: 9,
  gamesInBacklog: 5,
  beaten: [
    { name: 'Crono Trigger', score: 10 },
    { name: 'Dark Souls', score: 9.5 },
    { name: 'Dark Souls II', score: 7.2 },
    { name: 'Final Fantasy VII', score: 9 },
    { name: 'Shin Megami Tensei', score: 8.2 },
    { name: 'Dragon Quest III', score: 9.1 },
    { name: 'Dragon Age', score: 9 },
    { name: 'Super Mario Odysey', score: 8.7 },
    { name: 'The Legend Of Zelda, Breath Of The Wild', score: 10 },
  ],
  backlog: [
    { name: 'Persona 4 Golden', score: 10 },
    { name: 'Shin Megami Tesnsei: Devil Survivor', score: 9.1 },
    { name: 'Hollow Knight', score: 9.3 },
    { name: 'Final Fantasy IV', score: 8.7 },
    { name: 'Dark Souls III', score: 9 },
  ],
}

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

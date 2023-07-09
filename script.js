const players = ['Player 1', 'Player 2', 'Player 3'];

const person = {
  name: 'John Doe',
  age: 25,
};

const team = players;
const team1 = [...players];
const cap1 = { ...person };

console.log('team:', team);
console.log('team1:', team1);
console.log('cap1:', cap1);

import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);

  const zombiePersons = [
    { id: 1, name: "Survivor", price: 12, strength: 6, agility: 4, img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png" },
    { id: 2, name: "Scavenger", price: 10, strength: 5, agility: 5, img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png" },
    { id: 3, name: "Shadow", price: 18, strength: 7, agility: 8, img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png" },
    { id: 4, name: "Tracker", price: 14, strength: 7, agility: 6, img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png" },
    { id: 5, name: "Sharpshooter", price: 20, strength: 6, agility: 8, img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png" },
    { id: 6, name: "Medic", price: 15, strength: 5, agility: 7, img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png" },
    { id: 7, name: "Engineer", price: 16, strength: 6, agility: 5, img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png" },
    { id: 8, name: "Brawler", price: 11, strength: 8, agility: 3, img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png" },
    { id: 9, name: "Infiltrator", price: 17, strength: 5, agility: 9, img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png" },
    { id: 10, name: "Leader", price: 22, strength: 7, agility: 6, img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png" },
  ];

  const [zombieFighters, setZombieFighters] = useState(zombiePersons);
  function handleAddFighter(fighter) {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setZombieFighters(zombieFighters.filter(fight => fight.id !== fighter.id));
    } else {
      alert("Not enough money lil bro!");
    }
  }

  
  function handleRemoveFighter(fighter) {
    setTeam(team.filter(fight => fight.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  }

  
  const totalStrength = team.reduce((sum, fight) => sum + fight.strength, 0);
  const totalAgility = team.reduce((sum, fight) => sum + fight.agility, 0);

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: ${money}</h2>

      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <>
          <p>Total Strength: {totalStrength}</p>
          <p>Total Agility: {totalAgility}</p>

          {team.map((fighter) => (
            <div key={fighter.id}>
              <img src={fighter.img} width="80" />
              <p>{fighter.name}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>
                Remove
              </button>
            </div>
          ))}
        </>
      )}

      <hr />

      <h2>Available Fighters</h2>
      {zombieFighters.map((fighter) => (
        <div key={fighter.id}>
          <img src={fighter.img} width="80" />
          <p>{fighter.name}</p>
          <p>Price: {fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleAddFighter(fighter)}>Add</button>
        </div>
      ))}
    </>
  );
};

export default App;

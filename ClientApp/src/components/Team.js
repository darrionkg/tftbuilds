import PropTypes from 'prop-types';
import './Team.css';
import React, { Component } from 'react'

export default function Team(props) {

  function addToTeam(index) {
    props.addToTeam(index);
    updateBonuses();
  }

  function findImage(champ) {
    console.log(champ.key);
    let result = null;
    let championNames = ['Aatrox', 'Ahri', 'Akali', 'Anivia', 'Ashe', 'AurelionSol', 'Blitzcrank', 'Brand', 'Braum', 'Chogath', 'Darius', 'Draven', 'Elise', 'Evelynn', 'Fiora', 'Gangplank', 'Garen', 'Gnar', 'Graves', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen', 'Khazix', 'Kindred', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'MissFortune', 'Mordekaiser', 'Morgana', 'Nidalee', 'Poppy', 'Pyke', 'RekSai', 'Rengar', 'Sejuani', 'Shen', 'Shyvana', 'Swain', 'Tristana', 'TwistedFate', 'Varus', 'Vayne', 'Volibear', 'Warwick', 'Yasuo', 'Zed'];
    championNames.map((name, index) => {
      if(champ.key === name) {
        result = index;
      }
    })
    return result;
  }

  function updateBonuses() {
    // order origins - demon, dragon, exile, glacial, imperial, ninja, noble, phantom, pirate, robot, void, wild, yordle
    // order classes - assassin, blademaster, brawler, elementalist, guardian, gunslinger, blademaster, knight, ranger, shapeshifter, sorcerer
    console.log(props.userTeam);
    let origins = {
      'demon': 0,
      'dragon': 0,
      'exile': 0,
      'glacial': 0,
      'imperial': 0,
      'ninja': 0,
      'noble': 0,
      'phantom': 0,
      'pirate': 0,
      'robot': 0,
      'void': 0,
      'wild': 0,
      'yordle': 0
    };
    let classes = {
      'assassin': 0,
      'blademaster': 0,
      'brawler': 0,
      'elementalist': 0,
      'guardian': 0,
      'gunslinger': 0,
      'blademaster': 0,
      'knight': 0,
      'ranger': 0,
      'shapeshifter': 0,
      'sorcerer': 0
    };
    props.userTeam.map((champ) => {
      console.log(champ)
      champ.origin.map((type) => {
        console.log(type);
        origins[type] += 1;
      })
      champ.class.map((type) => {
        console.log(type);
        origins[type] += 1;
      })
    })
    let bonuses = [origins, classes];
    console.log(bonuses);

  }


  return (
    <div>
      <h1>Team Builder</h1>
      <div className='team'>
        {props.userTeam.map((champ) =>
          <img src={props.champIcons[findImage(champ)]} />
        )}
      </div>
      <div className='bonus'>Bonuses</div>
      <div className='champs'>
        {props.champIcons.map((champ, index) => 
          <img onClick={() => addToTeam(index)}  src={champ} />
          )}
      </div>
    </div>
  )
}

Team.propTypes = {
  champs: PropTypes.object,
  champIcons: PropTypes.array,
  items: PropTypes.object,
  itemIcons: PropTypes.array,
  addToTeam: PropTypes.func,
  userTeam: PropTypes.array
}
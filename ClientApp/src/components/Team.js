import PropTypes from 'prop-types';
import './Team.css';
import React, { Component } from 'react'
import Bonus from './Bonus';

export default function Team(props) {

  function addToTeam(index, origins, classes) {
    // let duplicate = checkIfDuplicate();
    props.addToTeam(index);
    updateBonuses();
  }

  function findImage(champ) {
    let result = null;
    let championNames = ['Aatrox', 'Ahri', 'Akali', 'Anivia', 'Ashe', 'AurelionSol', 'Blitzcrank', 'Brand', 'Braum', 'Chogath', 'Darius', 'Draven', 'Elise', 'Evelynn', 'Fiora', 'Gangplank', 'Garen', 'Gnar', 'Graves', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen', 'Khazix', 'Kindred', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'MissFortune', 'Mordekaiser', 'Morgana', 'Nidalee', 'Poppy', 'Pyke', 'RekSai', 'Rengar', 'Sejuani', 'Shen', 'Shyvana', 'Swain', 'Tristana', 'TwistedFate', 'Varus', 'Vayne', 'Volibear', 'Warwick', 'Yasuo', 'Zed'];
    championNames.map((name, index) => {
      if(champ.key === name) {
        result = index;
      }
    })
    return result;
  }

  // function checkIfDuplicate() {
  //   let matches = 0;
  //   for(let i = 0; i < props.userTeam.length; i++) {
  //     for(let j = 0; j < props.userTeam.length; j++) {
  //       if(props.userTeam[i] == props.userTeam[j]) {
  //         matches+= 1;
  //       }
  //     }
  //   }
  //   if(matches > 1) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  function updateBonuses() {
    let origins = {
      Demon : 0,
      Dragon: 0,
      Exile: 0,
      Glacial: 0,
      Imperial: 0,
      Ninja: 0,
      Noble: 0,
      Phantom: 0,
      Pirate: 0,
      Robot: 0,
      Void: 0,
      Wild: 0,
      Yordle: 0
    };
    let classes = {
      Assassin: 0,
      Blademaster: 0,
      Brawler: 0,
      Elementalist: 0,
      Guardian: 0,
      Gunslinger: 0,
      Knight: 0,
      Ranger: 0,
      Shapeshifter: 0,
      Sorcerer: 0
    };
    // for(let i = 0; i < props.userTeam.length; i++) {
    //   for(let j = 0; j < props.userTeam[i].origin.length; j++) {
    //     console.log(duplicate);
    //     if(duplicate === false) {
    //       origins[props.userTeam[i].origin[j]] += 1;
    //     }
    //   }
    //   for(let k = 0; k < props.userTeam[i].class.length; k++) {
      
    //   }
    // }

    //props.userTeam[i].origin
    //props.userTeam[i].class


    props.userTeam.map((champ) => {
      champ.origin.map((type) => {
          origins[type] += 1;
      })
      champ.class.map((type) => {
          classes[type] += 1;
      })
    })
    let bonuses = [origins, classes];
    return bonuses;
  }

  return (
    <div>
      <h1>Team Builder</h1>
        Your Team
      <div className='team'>
        {props.userTeam.map((champ) =>
          <img src={props.champIcons[findImage(champ)]} />
        )}
      </div>
      <div className='bonus'><Bonus
       bonuses={updateBonuses}
       />
      </div>
      <div className='champs'>
        {props.champIcons.map((champ, index) => 
          <img onClick={() => addToTeam(index)}  src={champ} />
          )}
      </div>
      <h2>Origins</h2>
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
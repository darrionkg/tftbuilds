import PropTypes from 'prop-types';
import './Team.css';
import React, { Component } from 'react'
import Bonus from './Bonus';
import originImages from './GetOrigins';
import classImages from './GetClasses';

export default function Team(props) {

  function addToTeam(index, origins, classes) {
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
    let test = "test"
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
    // order origins - demon, dragon, exile, glacial, imperial, ninja, noble, phantom, pirate, robot, void, wild, yordle
    // order classes - assassin, blademaster, brawler, elementalist, guardian, gunslinger, blademaster, knight, ranger, shapeshifter, sorcerer
    console.log(props.userTeam);
    props.userTeam.map((champ) => {
      console.log(champ)
      champ.origin.map((type) => {
        console.log(origins);
        console.log(origins[type]);
        origins[type] += 1;
      })
      champ.class.map((type) => {
        console.log(type);
        origins[type] += 1;
      })
    })
    let bonuses = [origins, classes];
    console.log(bonuses);
    return bonuses;
  }

  return (
    <div>
      <h1>Team Builder</h1>
      <div className='team'>
        {props.userTeam.map((champ) =>
          <img src={props.champIcons[findImage(champ)]} />
        )}
      </div>
      {/* <div className='bonus'><Bonus bonuses={origins}/> */}
      {/* </div> */}
      <div className='champs'>
        {props.champIcons.map((champ, index) => 
          <img onClick={() => addToTeam(index)}  src={champ} />
          )}
      </div>
      <h2>Origins</h2>
<ul>
  <li><img src={originImages()[0]} /> {updateBonuses()[0].Demon}</li>
  <li><img src={originImages()[1]} /> {updateBonuses()[0].Dragon}</li>
  <li><img src={originImages()[2]} /> {updateBonuses()[0].Exile}</li>
  <li><img src={originImages()[3]} />{updateBonuses()[0].Glacial}</li>
  <li><img src={originImages()[4]} />{updateBonuses()[0].Imperial}</li>
  <li><img src={originImages()[5]} />{updateBonuses()[0].Ninja}</li>
  <li><img src={originImages()[6]} />{updateBonuses()[0].Noble}</li>
  <li><img src={originImages()[7]} />{updateBonuses()[0].Phantom}</li>
  <li><img src={originImages()[8]} />{updateBonuses()[0].Pirate}</li>
  <li><img src={originImages()[9]} />{updateBonuses()[0].Robot}</li>
  <li><img src={originImages()[10]} />{updateBonuses()[0].Void}</li>
  <li><img src={originImages()[11]} />{updateBonuses()[0].Wild}</li>
  <li><img src={originImages()[12]} />{updateBonuses()[0].Yordle}</li>
</ul>
<h2>Classes</h2>
<ul>
  <li><img src={classImages()[0]} />{updateBonuses()[1].Assassin}</li>
  <li><img src={classImages()[1]} />{updateBonuses()[1].Blademaster}</li>
  <li><img src={classImages()[2]} />{updateBonuses()[1].Brawler}</li>
  <li><img src={classImages()[3]} />{updateBonuses()[1].Guardian}</li>
  <li><img src={classImages()[4]} />{updateBonuses()[1].Gunslinger}</li>
  <li><img src={classImages()[5]} />{updateBonuses()[1].Knight}</li>
  <li><img src={classImages()[6]} />{updateBonuses()[1].Ranger}</li>
  <li><img src={classImages()[7]} />{updateBonuses()[1].Shapeshifter}</li>
  <li><img src={classImages()[8]} />{updateBonuses()[1].Sorcerer}</li>
</ul>
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
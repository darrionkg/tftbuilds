import PropTypes from 'prop-types';
import './Team.css';
import React, { Component } from 'react'
import Bonus from './Bonus';

export default function Team(props) {

  function addToTeam(index) {
    let champion = props.addToTeam(index);
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
      origins = {props.origins}
      classes = {props.classes}
       />
      </div>
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
  userTeam: PropTypes.array,
  origins: PropTypes.object,
  classes: PropTypes.object,
}
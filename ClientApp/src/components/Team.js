import PropTypes from 'prop-types';
import './Team.css';

import React from 'react'

export default function TierList(props) {
  // team's state
  // state of image hidden or not

  function addToTeam() {
    
  }

  return (
    <div>
      <h1>Team Builder</h1>
      <div className='team'>Player Team
      </div>
      <div className='bonus'>Bonuses</div>
      <div className='champs'>
        {props.champIcons.map((champ) => 
          <img onClick={addToTeam()} src={champ} />
        )}
      </div>
    </div>
  )
}

TierList.propTypes = {
  champs: PropTypes.object,
  champIcons: PropTypes.array,
  items: PropTypes.object,
  itemIcons: PropTypes.array
}
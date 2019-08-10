import React, { Component } from 'react';
import PropTypes from 'prop-types';
import originImages from './GetOrigins';
import classImages from './GetClasses';

export default function Bonus(props) {
  function checkShowOrigin(amount, index, updatedKeys) {
    let type=updatedKeys[index];
    if(amount >= 1) {
      console.log(type);
      return <li><img src={originImages()[index]} /> {amount} {type}</li>;
    }
    else {
      return;
    }
  }
  
  function checkShowClass(amount, index, updatedKeys) {
    let type=updatedKeys[index];
    if(amount >= 1) {
      return <li><img src={classImages()[index]} /> {amount} {type}</li>;
    }
    else {
      return;
    }
  }
  
  let updatedOrigin = props.origins;
  const originKeys = Object.keys(updatedOrigin);
  const originValues = Object.values(updatedOrigin);
  let updatedClass = props.classes;
  const classKeys = Object.keys(updatedClass);
  const classValues = Object.values(updatedClass);
  console.log(props.origins);

  return (
    <div>
      <h2>Origins</h2>
      <ul className='origin'>
        {originValues.map((amount, index) => 
          checkShowOrigin(amount, index, originKeys)
          )}
      </ul>
      <h2>Classes</h2>
      <ul className='class'>
        {classValues.map((amount, index) => 
          checkShowClass(amount, index, classKeys)
          )}
      </ul>
    </div>
  );
}

Bonus.propTypes = {
  origins: PropTypes.object,
  classes: PropTypes.object
}
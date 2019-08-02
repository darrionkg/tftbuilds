import React, { Component } from 'react';
import PropTypes from 'prop-types';
import originImages from './GetOrigins';
import classImages from './GetClasses';

class Bonus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showOrigins: [false,false,false,false,false,false,false,false,false, false, false, false, false],
      showClasses: [false,false,false,false,false,false,false,false,false, false, false],
      originBreakpoints: [],
      classBreakpoints: [],
    }
    this.updateBonuses = this.updateBonuses.bind(this);
  }
  
  componentWillMount() {
    
  }
  
  checkShowOrigin(amount, index, updatedKeys) {
    let type=updatedKeys[index];
    if(amount >= 1) {
      return <li><img src={originImages()[index]} /> {amount} {type}</li>;
    }
    else {
      return;
    }
  }
  
  checkShowClass(amount, index, updatedKeys) {
    let type=updatedKeys[index];
    if(amount >= 1) {
      return <li><img src={classImages()[index]} /> {amount} {type}</li>;
    }
    else {
      return;
    }
  }

  updateBonuses() {
    this.props.bonuses();
    return this.props.bonuses();
  }
  
  render() {
    let updatedOrigin = this.updateBonuses()[0];
    const originKeys = Object.keys(updatedOrigin);
    const originValues = Object.values(updatedOrigin)
    let updatedClass = this.updateBonuses()[1];
    const classKeys = Object.keys(updatedClass);
    const classValues = Object.values(updatedClass)
    return (
      <div>
        <h1> Bonuses </h1>
        <ul className='origin'>
          {originValues.map((amount, index) => 
            this.checkShowOrigin(amount, index, originKeys))},
        </ul>
        <h2>Classes</h2>
        <ul className='class'>
          {classValues.map((amount, index) => 
            this.checkShowClass(amount, index, classKeys))},
        </ul>
      </div>
    );
  }
}

Bonus.propTypes = {
  bonuses: PropTypes.array
}

export default Bonus;
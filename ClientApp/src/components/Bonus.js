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
  }
  
  checkShowOrigin(amount, index, updatedKeys) {
    let type=updatedKeys[index];
    if(amount >= 1) {
      console.log(type);
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
  
  render() {
    let updatedOrigin = this.props.origins;
    const originKeys = Object.keys(updatedOrigin);
    const originValues = Object.values(updatedOrigin);
    let updatedClass = this.props.classes;
    const classKeys = Object.keys(updatedClass);
    const classValues = Object.values(updatedClass);
    console.log(this.props.origins);
    return (
      <div>
        <h2>Origins</h2>
        <ul className='origin'>
          {originValues.map((amount, index) => 
            this.checkShowOrigin(amount, index, originKeys)
            )}
        </ul>
        <h2>Classes</h2>
        <ul className='class'>
          {classValues.map((amount, index) => 
            this.checkShowClass(amount, index, classKeys)
            )}
        </ul>
      </div>
    );
  }
}

Bonus.propTypes = {
  origins: PropTypes.object,
  classes: PropTypes.object
}

export default Bonus;
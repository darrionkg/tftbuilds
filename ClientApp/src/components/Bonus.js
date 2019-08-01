import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bonus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showOrigins: [false,false,false,false,false,false,false,false,false, false, false, false, false],
      showClasses: [false,false,false,false,false,false,false,false,false, false, false],
      originBreakpoints: [],
      classBreakpoints: []
    }
  }
  
  componentWillMount() {
    
  }
  
  checkShowOrigin(prop) {
    
  }
  
  checkShowClasses() {
    
  }
  
  render() {
    return (
      <div>
        <h1> Bonuses </h1>
        {/* {console.log(this.bonuses.demon)} */}
      </div>
    );
  }
}

Bonus.propTypes = {
  bonuses: PropTypes.array
}

export default Bonus;
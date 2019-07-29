import React, { Component } from 'react'

export class Icons extends Component {
  constructor() {
    super();

    this.state = {
      iconUrls: []
    }
  }

  componentDidMount() {
    let urls = [];
    fetch('https://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/Rengar.png').then(results => {
      urls.push(results.url);
      this.setState({iconUrls: urls});
    });
    console.log(this.state.iconUrls);
  }

  render() {
    return (
      <div>
        <img src={this.state.iconUrls[0]} alt='Rengar'/>
      </div>
    )
  }
}

export default Icons

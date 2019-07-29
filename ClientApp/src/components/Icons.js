import React, { Component } from 'react'

export class Icons extends Component {
  constructor() {
    super();

    this.state = {
      iconUrls: []
    }
  }
  componentDidMount() {
    let championNames = ['Aatrox', 'Ahri', 'Akali', 'Anivia', 'Ashe', 'AurelionSol', 'Blitzcrank', 'Brand', 'Braum', 'Chogath', 'Darius', 'Draven', 'Elise', 'Evelynn', 'Fiora', 'Gangplank', 'Garen', 'Gnar', 'Graves', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen', 'Khazix', 'Kindred', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'MissFortune', 'Mordekaiser', 'Morgana', 'Nidalee', 'Poppy', 'Pyke', 'RekSai', 'Rengar', 'Sejuani', 'Shen', 'Shyvana', 'Swain', 'Tristana', 'TwistedFate', 'Varus', 'Vayne', 'Volibear', 'Warwick', 'Yasuo', 'Zed'];
    this.getIcons(championNames);
    this.getChampionData(championNames);
  }

  getIcons(championNames) {
    let urls = [];

    championNames.forEach(champ => {
      fetch('https://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/'+champ+'.png').then(results => {
        urls.push(results.url);
        this.setState({iconUrls: urls});
      });

    })
  }

  getChampionData(championNames) {
    let champions = [];
    fetch('https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json', {mode: 'no-cors'}).then(results => {
      console.log(results.body)
      // console.log(JSON.parse(results));
      
      return results;
      // data.map((champ, index) => {
      //   console.log(champ[0]);
      //   // champions.push({})
      // })
    })
  }

  render() {
    return (
      <div>
        <img src={this.state.iconUrls[7]} alt='Rengar'/>
      </div>
    )
  }
  // componentDidMount() {
  //   let urls = [];
  //   let championName = 'rengar';
  //   fetch('https://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/Rengar.png').then(results => {
  //     urls.push ({key: championName, value: results.url});
  //     console.log(urls);
  //   })
  //   this.setState({iconUrls: urls});
  //   this.setState({loading: false});
  //   this.render();
  //   console.log('done mounting');
  // }
  
  // render() {
  //   let foundIndex = null;
  //   console.log(this.state.iconUrls);
  //   if(this.state.loading === false) {
  //     this.state.iconUrls.forEach(index => {
  //       console.log('test')
  //       if(index.key === 'rengar') {
  //         foundIndex = index;
  //         console.log(foundIndex)
  //       }
  //       else {
  //         console.log('image not found')
  //       }
  //     })
  //     return (
  //       <div>
  //         {console.log(foundIndex)};
  //       </div>
  //   )
  // }
  // else {
  //   return <div>Loading...</div>
  // }
  // }
}

export default Icons

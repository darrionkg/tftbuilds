import React, { Component } from 'react'

export class GetData extends Component {
  constructor() {
    super();

    this.state = {
      items: {},
      champs: {},
      champIcons: [],
      itemIcons: [],
    }
  }

  componentDidMount() {
    let championNames = ['Aatrox', 'Ahri', 'Akali', 'Anivia', 'Ashe', 'AurelionSol', 'Blitzcrank', 'Brand', 'Braum', 'Chogath', 'Darius', 'Draven', 'Elise', 'Evelynn', 'Fiora', 'Gangplank', 'Garen', 'Gnar', 'Graves', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen', 'Khazix', 'Kindred', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'MissFortune', 'Mordekaiser', 'Morgana', 'Nidalee', 'Poppy', 'Pyke', 'RekSai', 'Rengar', 'Sejuani', 'Shen', 'Shyvana', 'Swain', 'Tristana', 'TwistedFate', 'Varus', 'Vayne', 'Volibear', 'Warwick', 'Yasuo', 'Zed'];
    this.getIcons(championNames);
    this.getChampionData();
    this.getItemData();
    this.getClassData();
    this.getOriginData();
    this.getImages();
  }

  getIcons(championNames) {
    let urls = [];
    championNames.forEach(champ => {
      fetch('https://ddragon.leagueoflegends.com/cdn/9.14.1/img/champion/'+champ+'.png').then(results => {
        urls.push(results.url);
        this.setState({champIcons: urls});
      });
    })
  }

  getChampionData() {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json';
    let champions = {};
    fetch(proxyUrl + targetUrl).then(results => {
      return results.json();
    })
    .then(data => {
      Object.assign(champions, data);
      this.setState({
        champs: champions
      })
    })
  }

  getItemData() {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://solomid-resources.s3.amazonaws.com/blitz/tft/data/items.json';
    let items = {};
    fetch(proxyUrl + targetUrl).then(results => results.json())
    .then(data => {
      this.setState({
        items: data
      })
    })
  }

  getClassData() {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://solomid-resources.s3.amazonaws.com/blitz/tft/data/classes.json';
    let classes = {};
    fetch(proxyUrl + targetUrl).then(results => {
      return results.json();
    })
    .then(data => {
      Object.assign(classes, data);
    })
    console.log(classes);
  }

  getOriginData() {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://solomid-resources.s3.amazonaws.com/blitz/tft/data/origins.json';
    let origins = {};
    fetch(proxyUrl + targetUrl).then(results => {
      return results.json();
    })
    .then(data => {
      Object.assign(origins, data);
    })
    console.log(origins);
  }

  getImages() {
    function importAll(r) {
      return r.keys().map(r);
    }  
    const itemIcons = importAll(require.context('./../assets/items/', false, /\.(png|jpe?g|svg)$/));
    this.setState({itemIcons: itemIcons});
  }

  render() {
    return (
      <div>
        <img src={this.state.champIcons[7]} alt='champion'/>
        <img src={this.state.itemIcons[0]} alt='item'/>
      </div>
    )
  }
}

export default GetData

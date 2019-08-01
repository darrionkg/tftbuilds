import React, { Component } from 'react';
import { Layout } from './components/Layout';
import { Route, Switch } from 'react-router-dom';
import Team from './components/Team';
import TierList from './components/TierList';
import Home from './components/Home';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      items: {},
      champs: {},
      champIcons: [],
      itemIcons: [],
      userTeam: []
    }
    this.handleAddToTeam = this.handleAddToTeam.bind(this);
  }

  componentWillMount() {
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
      });
    })
    this.setState({champIcons: urls});
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
    console.log(champions);
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
    const itemIcons = importAll(require.context('./assets/items/', false, /\.(png|jpe?g|svg)$/));
    this.setState({itemIcons: itemIcons});
  }

  handleAddToTeam(index) {
    let championNames = ['Aatrox', 'Ahri', 'Akali', 'Anivia', 'Ashe', 'AurelionSol', 'Blitzcrank', 'Brand', 'Braum', 'Chogath', 'Darius', 'Draven', 'Elise', 'Evelynn', 'Fiora', 'Gangplank', 'Garen', 'Gnar', 'Graves', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen', 'Khazix', 'Kindred', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'MissFortune', 'Mordekaiser', 'Morgana', 'Nidalee', 'Poppy', 'Pyke', 'RekSai', 'Rengar', 'Sejuani', 'Shen', 'Shyvana', 'Swain', 'Tristana', 'TwistedFate', 'Varus', 'Vayne', 'Volibear', 'Warwick', 'Yasuo', 'Zed'];
    let champion = championNames[index];
    let userTeam = this.state.userTeam.concat(this.state.champs[champion]);
    this.setState({userTeam: userTeam});
    console.log(this.state.userTeam);
  }

  render () {
    return (
      <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/team' render={() => <Team
          champs = {this.state.champs}
          champIcons = {this.state.champIcons}
          items = {this.state.items}
          itemIcons = {this.state.itemIcons}
          addToTeam = {this.handleAddToTeam}
          userTeam = {this.state.userTeam}
          />
          } />
        <Route exact path='/tierlist' component={TierList} />
      </Switch>
      </Layout>

    );
  }
}

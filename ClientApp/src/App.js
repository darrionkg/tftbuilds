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
      userTeam: [],

      origins: {
        Demon : 0,
        Dragon: 0,
        Exile: 0,
        Glacial: 0,
        Hextech: 0,
        Imperial: 0,
        Ninja: 0,
        Noble: 0,
        Phantom: 0,
        Pirate: 0,
        Robot: 0,
        Void: 0,
        Wild: 0,
        Yordle: 0,
      },
      classes: {
        Assassin: 0,
        Blademaster: 0,
        Brawler: 0,
        Elementalist: 0,
        Guardian: 0,
        Gunslinger: 0,
        Knight: 0,
        Ranger: 0,
        Shapeshifter: 0,
        Sorcerer: 0
      }
    }
    this.handleAddToTeam = this.handleAddToTeam.bind(this);
    this.updateOrigins = this.updateOrigins.bind(this);
    this.updateClasses = this.updateClasses.bind(this);
    this.updateBonuses = this.updateBonuses.bind(this);
    this.checkIfDuplicate = this.checkIfDuplicate.bind(this);
  }
  

  componentWillMount() {
    let championNames = ['Aatrox', 'Ahri', 'Akali', 'Anivia', 'Ashe', 'AurelionSol', 'Blitzcrank', 'Brand', 'Braum', 'Camille', 'Chogath', 'Darius', 'Draven', 'Elise', 'Evelynn', 'Fiora', 'Gangplank', 'Garen', 'Gnar', 'Graves', 'Jayce', 'Jinx', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen', 'Khazix', 'Kindred', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'MissFortune', 'Mordekaiser', 'Morgana', 'Nidalee', 'Poppy', 'Pyke', 'RekSai', 'Rengar', 'Sejuani', 'Shen', 'Shyvana', 'Swain', 'Tristana', 'TwistedFate', 'Varus', 'Vayne', 'Vi', 'Volibear', 'Warwick', 'Yasuo', 'Zed'];
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
    let championNames = ['Aatrox', 'Ahri', 'Akali', 'Anivia', 'Ashe', 'AurelionSol', 'Blitzcrank', 'Brand', 'Braum', 'Camille', 'Chogath', 'Darius', 'Draven', 'Elise', 'Evelynn', 'Fiora', 'Gangplank', 'Garen', 'Gnar', 'Graves', 'Jayce', 'Jinx', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kennen', 'Khazix', 'Kindred', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'MissFortune', 'Mordekaiser', 'Morgana', 'Nidalee', 'Poppy', 'Pyke', 'RekSai', 'Rengar', 'Sejuani', 'Shen', 'Shyvana', 'Swain', 'Tristana', 'TwistedFate', 'Varus', 'Vayne', 'Vi', 'Volibear', 'Warwick', 'Yasuo', 'Zed'];
    let champion = championNames[index];
    let userTeam = this.state.userTeam.concat(this.state.champs[champion]);
    this.setState({userTeam: userTeam}, () => {
      this.updateBonuses(this.state.champs[champion]);
    });
    return this.state.champs[champion];
  }

  
  updateOrigins(type) {
    console.log(type);
    let newOrigins = this.state.origins;
    newOrigins[type] +=1;
    console.log(newOrigins);

  }

  updateClasses(type) {
    console.log(type);
    let newClasses = this.state.classes;
    newClasses[type] +=1;
  }

  checkIfDuplicate(champ) {
    let matches = 0;
    this.state.userTeam.forEach((mem) => {
      if(champ.key === mem.key) {
        matches+= 1;
      }
    })
    if(matches > 1) {
      return true;
    }
    return false;
  }

  updateBonuses(champion) {
    let duplicate = this.checkIfDuplicate(champion)
    if(duplicate === false) {
      champion.origin.map((type) => {
        this.updateOrigins(type);
      })
      champion.class.map((type) => {
        this.updateClasses(type);
      })
    }
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
          origins = {this.state.origins}
          classes = {this.state.classes}
          />
          } />
        <Route exact path='/tierlist' component={TierList} />
      </Switch>
      </Layout>

    );
  }
}

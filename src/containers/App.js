import React, { Component } from 'react';
import './App.css'
import Header from '../components/Header';
import Sliders from '../components/Sliders';
import CardList from '../components/CardList';

//handles functions, renders of the entire site
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      good: [],
      bad: []
    }
  }
  //managing range changes and updating states
  onSliderChange = (event) => {
    const child = event.target.list.children;
    const {good, bad} = this.state;
    //depending on where the slider is one value is added to good while the other in bad
    if(event.target.value === "0") 
      this.selectionUpdates(child[0].value, child[1].value);
    
    else if(event.target.value === "2") 
      this.selectionUpdates(child[1].value, child[0].value);
    //might need rework to be more dry
    else if(event.target.value === "1") {
      this.removeOpposite(child[0].value, good);
      this.removeOpposite(child[0].value, bad);
      this.removeOpposite(child[1].value, good);
      this.removeOpposite(child[1].value, bad);
    }
  }
  //handles state updates from onSliderChange
  selectionUpdates(valGood, valBad) {
    const {good, bad} = this.state;
    //callback is added because setState is async so it forces update
    this.setState({good: [...good, valGood]}, () => {this.removeOpposite(valBad, this.state.good)});
    this.setState({bad: [...bad, valBad]}, () => {this.removeOpposite(valGood, this.state.bad)});
  }
  //removes opposite value
  removeOpposite(val, typeState) {
    const arr = typeState;

    const filterArr = arr.filter((i) => {
      return i.includes(val);
    });
    
    let index = arr.indexOf(filterArr[0]);
    
    if(index !== -1) {
      arr.splice(index, 1);
      this.setState({typeState: arr});
    }
  }
//managing file uploads and handling movies state
//when file is recieved parse it as xml
  handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    this.waitForTextRead(reader);
    reader.readAsText(file);
  }
 //reads file as xml and adds it to movies state array NOTE: might need better error checks
  parseTextAsXml(text) {
    const parser = new DOMParser();
    let xmlDom = parser.parseFromString(text, "text/xml");
    let tempArr = [];
    const arr = xmlDom.getElementsByTagName("programme");
    //not dry need better alternative
    for(let i=1;i <= arr.length;i++) {
      const obj = {
        name: xmlDom.getElementById(i).children[0].children[0].innerHTML,
        path: xmlDom.getElementById(i).children[0].children[1].innerHTML,
        mood: xmlDom.getElementById(i).children[0].children[2].innerHTML
      }
      tempArr.push(obj);
    }
    this.setState({movies: tempArr});
  }

  waitForTextRead(reader) {
    reader.onloadend = (event) => {
      let text = event.target.result;
      this.parseTextAsXml(text); 
    }
  }
//handles rendering to site
  render() {
    const {good, movies} = this.state;
    let arr = [];
    //check movie.mood include any movies that match term in good state
    //possibly a better method to do this using array.map and filter
    for(let i=0;i<movies.length;i++)
    {
      for(let j=0;j<good.length;j++)
      {
        if(movies[i].mood === good[j])
        arr.push(movies[i]);
      }
    }
    //renders
    return (
      <div className="toggle">
        <Header handleChange={this.handleFileChange} />
        <br />
        <br />
        <Sliders keyval="1" leftText="Agitated" rightText="Calm" sliderChange={this.onSliderChange}  />
        <Sliders keyval="2" leftText="Happy" rightText="Sad" sliderChange={this.onSliderChange}/>
        <Sliders keyval="3" leftText="Tired" rightText="Wide Awake" sliderChange={this.onSliderChange}/>
        <Sliders keyval="4" leftText="Scared" rightText="Fearless" sliderChange={this.onSliderChange}/>
        <br />
        <CardList movies={arr} />
      </div>
    );
  }
}

export default App;

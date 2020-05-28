import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function People (props) {
  console.log("person", props)
  return(<div>{props.People}</div>)
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    people: [{}]
    }
  }
componentDidMount(){
fetch('https://randomuser.me/api?results=25')
.then(json => json.json())
.then(data =>{
  this.setState({ 
    people: data
  }); console.log(data)
  
})

}

  render (){
  return (
    <div className="App"> 
      <People people = {this.state.people[0]}/>
    <header className="App-header">
     
    </header>
  </div>
  );
}
}

export default App;


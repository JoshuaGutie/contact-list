import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function People (props) {
//   console.log("person", props)
//   return(<div>{props.People}</div>)
// }

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };
  }

  detailsClick = () => {
    this.setState({
      isSelected: !this.state.isSelected
    });
  }



  render() {
    return (
      <div style={{display: "flex", flexGrow: "4", flexDirection: "row", justifyContent: "center", background:"grey", margin:"10px"}}>
        <h2>
          {this.props.person.name.first}
          </h2>
        <img style={{margin: '5px', width: "200px"}} src={this.props.person.picture.thumbnail} />
        <b><button style={{background: "orange", color: "blue", fontSize: "20px"}} onClick={this.detailsClick}>{this.state.isSelected ? 'show info' : ' hide info'}</button> </b>
        <div class="details">
          {
            this.state.isSelected
              ?
              <div>
                <div>
                  <p>Gender: </p>{this.props.person.gender}</div>
                <div>
                  <p>Email: </p>{this.props.person.email}</div>
                <div>
                  <p>Phone: </p>{this.props.person.phone}</div>
              </div>
              :''
          }
        </div>
      </div>

    )
  }
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    people: []
    }
  }
  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
      .then(json => json.json())
      .then(json => json.results)
      .then(data => {
        this.setState({
          people: data
        });
        console.log(data);
      })

}

render() {
  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      {this.state.people.map((userData, index) => (
        <Contact key={index} person={userData} />
      ))}
    </div>
  );
}
}

export default App;


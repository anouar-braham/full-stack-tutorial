import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.min.css';

function App() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
      // GET request using axios inside useEffect React hook
      axios.get('http://localhost:1337/')
          .then(response => setTeams(response.data.references.teamReferences));

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div style={{
      "padding": "30px",
      "display": "flex",
      "justify-content": "center",
      "flex-direction": "column",
      "align-items": "center"
    }}>
      <div style={{"margin-bottom": "40px"}}>
      <img style={{"width": "200px", "height": "auto"}} src="https://www.wamc.org/sites/wamc/files/201405/nhllogo.jpeg"/>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th><abbr title="Logo">LOGO</abbr></th>
            <th><abbr title="Position">ID</abbr></th>
            <th>CITY</th>
            <th><abbr title="Played">NAME</abbr></th>
            <th><abbr title="Won">ABBR</abbr></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, i) => (
            <tr>
              <th><img src={team.officialLogoImageSrc}/></th>
              <th>{team.id}</th>
              <td>{team.city}</td>
              <td>{team.name}</td>
              <td>{team.abbreviation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

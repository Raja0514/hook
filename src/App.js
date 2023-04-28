import "./App.css";
import React, { useState,useEffect } from "react";
import { DataStore } from "aws-amplify";

import {Metstruckplod} from './models'

import { Auth } from "aws-amplify";

function App() {

   const [mets, setMets] = useState([]);

  console.log(mets);

  const onclick = () => {
    Auth.signOut();
  };

  async function fetchContacts() {
    const data = await DataStore.query(Metstruckplod);
    setMets(data);
  }

  useEffect(() => {
    fetchContacts();
    const subscription = DataStore.observe(Metstruckplod).subscribe(() =>
      fetchContacts(),
    );
    return () => subscription.unsubscribe();
  }, []);


  return (
    <div className="App">
      
      <header className="App-header">
        
        <h1 style={{padding:20}}>Live Mining Data</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Trucknumber</th>
              <th>Engine Hours</th>
              <th>Date</th>
              <th>OperatorName</th>
              <th>Hours Worked</th>
              <th>Shift</th>
              <th>Crew</th>
            </tr>
          </thead>
          

          <tbody>
            
            {mets.map((met) => (
          <tr tr key={met.id} >
            
              <td>{met.rucknumtber}</td>
              <td>{met.enginehours}</td>
              <td>{met.date}</td>
              <td>{met.operatorname}</td>
              <td>{met.hoursworked}</td>
              <td>{met.shift}</td>
              <td>{met.crew}</td>
            
            

          </tr>
        ))}
          </tbody>

          </table>      
        <button onClick={onclick}>Signout</button>

      </header>
    </div>
  );
}

export default App;

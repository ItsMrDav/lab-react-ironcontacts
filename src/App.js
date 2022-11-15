import "./App.css";
import { useState } from "react";
import contactsJSON from "./contacts.json";

const firstFive = contactsJSON.slice(0, 5);
function App() {
  const [contacts, setContacts] = useState(firstFive);
  console.log(firstFive);
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button>Add Random Contacts</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((oneCeleb) => {
            return (
              <tr key={oneCeleb.id}>
                <td>
                  <img src={oneCeleb.pictureUrl} />
                </td>
                <td>{oneCeleb.name}</td>
                <td>{oneCeleb.popularity}</td>
                <td>{oneCeleb.wonOscar === true ? <span>🏆</span> : ``}</td>
                <td>{oneCeleb.wonEmmy === true ? <span>🏆</span> : ``}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

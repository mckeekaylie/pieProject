import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Logout from './components/Navbar/Logout/Logout';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';

function App() {

  const [sessionToken, setSessionToken] = useState(true);

  return (
    <div className="App">
      <nav>
        <Navbar />
        <Logout />
      </nav>

        <p>This is a test of React.</p>
        <button onClick={() => setSessionToken(!sessionToken)} />
        {sessionToken}
        {
          sessionToken ? <Pies /> : <Auth />
        }
        
    </div>
  );
}

export default App;

/* ARRAY DESTRUCTURING

let [first, second, third] = ['Fellowship of the Ring', 'Two Towers', 'Return of the King'];
let [a, , c] = ['Mercury', 'Venus', 'Earth'];

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

let [first, , third, ...others] = planets;
console.log(first); //logs Mercury
console.log(third); //logs Earth
console.log(others); //logs Mars to Pluto

*/

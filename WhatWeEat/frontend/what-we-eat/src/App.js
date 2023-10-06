// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateUser from './createUser';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/')
             .then(response => {
                 setData(response.data);
             })
             .catch(error => {
                 console.error("Error fetching data: ", error);
                 setData(null);
             });
    }, []);  

    return (
        <div>
            {data ? JSON.stringify(data) : "Welcome to What We Eat"}
            <CreateUser /> 
        </div>
    );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

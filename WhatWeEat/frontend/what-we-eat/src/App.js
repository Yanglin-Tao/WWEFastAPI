// import logo from './logo.svg';
// import './App.css';
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignInSide from './Forms/SignIn';
import SignUp from './Forms/SignUp';
import Dashboard from './Forms/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forget from "./Forms/Forget";
import RegisterCommonUser from "./CommonUser/registerCommonUser";
import { useNavigate } from 'react-router-dom';


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
        // <div>
        //     Welcome to What We Eat
        //     <RegisterCommonUser /> 
        // </div>
        <>
            {/* {data ? JSON.stringify(data) : "Welcome to What We Eat"}
                <CreateUser /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    {/* <Route exact path="/" component={ () => <Dashboard user={this.state.user}/> } /> */}
                    <Route path="/login" element={<SignInSide />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forget" element={<Forget />} />
                    {/* Add other routes as needed */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

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

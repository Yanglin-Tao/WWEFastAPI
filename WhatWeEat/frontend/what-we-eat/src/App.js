// import logo from './logo.svg';
// import './App.css';
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUser from "./Main/loginUser";
import RegisterCommonUser from "./CommonUser/registerCommonUser";
import LoginCommonUser from "./CommonUser/loginCommonUser";
import ForgetCommonUserPassword from "./CommonUser/forgetCommonUserPassword";
import DisplayCommonUserDashboard from "./CommonUser/displayCommonUserDashboard";
import DisplayCommonUserFoodPreference from "./CommonUser/displayCommonUserFoodPreference";
import DisplayCommonUserAllergy from "./CommonUser/displayCommonUserAllergy";
import DisplayCommonUserGoals from "./CommonUser/displayCommonUserGoals";
import BrowseDailyMenu from "./CommonUser/browseDailyMenu";
import LoginDiningHall from "./DiningHall/loginDiningHall"
import RegisterDiningHall from "./DiningHall/registerDiningHall"
import ForgetDiningHallPassword from "./DiningHall/forgetDiningHallPassword";
import DisplayDiningHallDashboard from "./DiningHall/displayDiningHallDashboard";
import DisplayMenuItem from "./Menu/displayMenuItem"
import DisplayDailyMenu from "./Menu/displayDailyMenu";
import RegisterInstitution from "./Institution/registerInstitution";
// import SignInSide from './Forms/SignIn';
// import SignUp from './Forms/SignUp';
// import Dashboard from './Forms/Dashboard';
// import { useNavigate } from 'react-router-dom';
// import Forget from "./Forms/Forget";


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
        <>
            <BrowserRouter>
                <Routes>
                    {/* Main route */}
                    <Route path="/" element={<LoginUser />} />
                    {/* Institution route */}
                    <Route path="/registerInstitution" element={<RegisterInstitution />} />
                    {/* Common User route */}
                    <Route path="/loginCommonUser" element={<LoginCommonUser />} />
                    <Route path="/registerCommonUser" element={<RegisterCommonUser />} />
                    <Route path="/forgetCommonUserPassword" element={<ForgetCommonUserPassword />} />
                    <Route path="/displayCommonUserDashboard" element={<DisplayCommonUserDashboard />} />
                    <Route path="/browseDailyMenu" element={<BrowseDailyMenu />} />
                    <Route path="/displayCommonUserFoodPreference" element={<DisplayCommonUserFoodPreference />} />
                    <Route path="/displayCommonUserAllergy" element={<DisplayCommonUserAllergy />} />
                    <Route path="/displayCommonUserGoals" element={<DisplayCommonUserGoals />} />
                    {/* Dining Hall route */}
                    <Route path="/loginDiningHall" element={<LoginDiningHall />} />
                    <Route path="/registerDiningHall" element={<RegisterDiningHall />} />
                    <Route path="/forgetDiningHallPassword" element={<ForgetDiningHallPassword />} />
                    <Route path="/displayDiningHallDashboard" element={<DisplayDiningHallDashboard />} />
                    {/* Menu route */}
                    <Route path="/displayDailyMenu" element={<DisplayDailyMenu />} />
                    <Route path="/displayMenuItem" element={<DisplayMenuItem />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;

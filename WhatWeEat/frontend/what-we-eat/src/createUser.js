import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const payload = { email, password };
        console.log("Sending request with payload:", payload);
        try {
            const response = await axios.post('http://localhost:8000/user/create/', { email, password });
            console.log(response.data);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <div>
            <div>
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                />
            </div>
            <div>
                <input 
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                />
            </div>
            <button onClick={handleSubmit}>Create User</button>
        </div>
    );
}

export default CreateUser;
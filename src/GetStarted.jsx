import React, { useState } from 'react';
import './GetStarted.css';  // Make sure to include the path to your CSS file

function GetStarted() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting the following:');
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`File: ${file ? file.name : 'No file selected'}`);
        
        setName('');
        setEmail('');
        setFile(null);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <div className="get-started-container">
            <h1>Get Started with Your Translation</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="file">File:</label>
                    <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default GetStarted;

import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import './GetStarted.css';
import { storage, db } from './firebase';  // Ensure the path is correct

function GetStarted() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState(null);
    const [languages, setLanguages] = useState('');
    const [error, setError] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null); // Clear previous errors

        if (!file) {
            setError('No file selected');
            return;
        }

        const storageRef = ref(storage, `uploads/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
            }, 
            (error) => {
                setError(`Upload failed: ${error.message}`);
            }, 
            async () => {
                try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    await addDoc(collection(db, 'uploads'), {
                        name: name,
                        email: email,
                        fileURL: downloadURL,
                        information: languages,
                        timestamp: new Date(),
                    });
                } catch (e) {
                    setError(`Error adding document: ${e.message}`);
                }
            }
        );

        setName('');
        setEmail('');
        setLanguages('');
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
                    <label htmlFor="languages">Languages:</label>
                    <input
                        type="text"
                        id="languages"
                        value={languages}
                        onChange={(e) => setLanguages(e.target.value)}
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
                <div>Upload Progress: {uploadProgress}%</div>
                {error && <div className="error">Error: {error}</div>}
            </form>
        </div>
    );
}

export default GetStarted;

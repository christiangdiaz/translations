import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import './GetStarted.css';
import { storage, db } from './firebase';  // Ensure the path is correct

function GetStarted() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            console.log('No file selected');
            return;
        }

        const storageRef = ref(storage, `uploads/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
                console.log('Upload is ' + progress + '% done');
            }, 
            (error) => {
                console.error('Upload failed', error);
            }, 
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                console.log('File available at', downloadURL);

                // Save name, email, and file URL to Firestore
                try {
                    await addDoc(collection(db, 'uploads'), {
                        name: name,
                        email: email,
                        fileURL: downloadURL,
                        timestamp: new Date(),
                    });
                    console.log('Document successfully written!');
                } catch (e) {
                    console.error('Error adding document: ', e);
                }
            }
        );

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
                <div>Upload Progress: {uploadProgress}%</div>
            </form>
        </div>
    );
}

export default GetStarted;

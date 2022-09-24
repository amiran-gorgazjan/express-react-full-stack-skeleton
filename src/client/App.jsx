import React, { useState, useEffect } from 'react';

export default function App() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const fetchHelloWorld = async () => {
            const response = await fetch('/api/hello-world');
            const data = await response.json();
            setMessage(data.message);
        }

        fetchHelloWorld();
    }, []);

    return (
        <div>
            <h1>React app.</h1>
            <p>{message ?? 'Waiting for API response...'}</p>
        </div>
    );
}
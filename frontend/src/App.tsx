import React, { useState, useEffect } from 'react';
import './App.css';

interface ApiResponse {
  message?: string;
  status?: string;
  timestamp?: number;
  version?: string;
}

function App() {
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const apiBaseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : '';

  const fetchHello = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/hello`);
      const data: ApiResponse = await response.json();
      setMessage(data.message || '');
    } catch (error) {
      console.error('Error fetching hello:', error);
      setMessage('Error connecting to backend');
    } finally {
      setLoading(false);
    }
  };

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/status`);
      const data: ApiResponse = await response.json();
      setStatus(data);
    } catch (error) {
      console.error('Error fetching status:', error);
      setStatus(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHello();
    fetchStatus();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend + Backend Demo</h1>

        <div style={{ margin: '20px 0' }}>
          <h2>Backend Message:</h2>
          <p>{loading ? 'Loading...' : message}</p>
          <button onClick={fetchHello} disabled={loading}>
            Refresh Message
          </button>
        </div>

        <div style={{ margin: '20px 0' }}>
          <h2>Backend Status:</h2>
          {status ? (
            <div>
              <p>Status: {status.status}</p>
              <p>Version: {status.version}</p>
              <p>Timestamp: {new Date(status.timestamp || 0).toLocaleString()}</p>
            </div>
          ) : (
            <p>No status data</p>
          )}
          <button onClick={fetchStatus} disabled={loading}>
            Refresh Status
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

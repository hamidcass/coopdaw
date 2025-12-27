import { useState } from 'react';

export const TestConnection = () => {
  const [message, setMessage] = useState('Click the button!');
  const [loading, setLoading] = useState(false);

  const testBackend = async () => {
    setLoading(true);
    try {
      // Call the Python backend
      const response = await fetch('http://localhost:8000/test');
      const data = await response.json();
      
      setMessage(`✅ Backend says: ${data.data}`);
    } catch (error) {
      setMessage('❌ Could not connect to backend');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Frontend ↔️ Backend Test</h1>
        
        <div className="mb-8 p-6 bg-gray-800 rounded-lg">
          <p className="text-xl">{message}</p>
        </div>
        
        <button
          onClick={testBackend}
          disabled={loading}
          className="px-8 py-4 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 disabled:bg-gray-700"
        >
          {loading ? 'Testing...' : 'Test Connection'}
        </button>
      </div>
    </div>
  );
};
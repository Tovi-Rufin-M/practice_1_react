import React, { useState } from 'react';

function App() {
  // 1. Declare a state variable called "count" initialized to 0
  const [count, setCount] = useState(0);

  // 2. Define the styling (Inline for simplicity)
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      marginTop: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <h1>Count: {count}</h1>
      
      {/* 3. Button that updates the state when clicked */}
      <button 
        style={styles.button} 
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      
      {/* Optional: A reset button */}
      {count > 0 && (
        <button 
          style={{...styles.button, backgroundColor: '#dc3545', marginLeft: '10px'}} 
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
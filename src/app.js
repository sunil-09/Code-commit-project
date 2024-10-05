import React from 'react';

function App() {
  const message = "Hello, World!";
  return (
    <div>
      <h1>{message}</h1>
      <h1>{messag}</h1> {/* Intentional bug: 'messag' is undefined */}
    </div>
  );
}

export default App;
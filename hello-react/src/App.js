import React from 'react';

function App() {
  const name = undefined;
  return name || '값이 undefined입니다.';

  // It's okay
  // return <div>{name}</div>;
}

export default App;

import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  /**
   * Warning: Failed prop type: Invalid prop `name` of type `number` supplied to
   * `MyComponent`, expected `string`.
   */
  // return <MyComponent name={3}>리액트</MyComponent>;

  /**
   * Warning: Failed prop type: The prop `favoriteNumber` is marked as required
   * in `MyComponent`, but its value is `undefined`.
   */
  // return <MyComponent name={"React"}>리액트</MyComponent>;

  return <MyComponent name={"React"} favoriteNumber={1}>리액트</MyComponent>;
};

export default App;

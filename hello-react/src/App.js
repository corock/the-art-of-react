import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent>리액트</MyComponent>;
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

export default App;

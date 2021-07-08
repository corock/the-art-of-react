import React from 'react';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children} 입니다.
    </div>
  );
};

// 다른 파일에서 이 파일을 import 할 때, 위에서 선언한 MyComponent 클래스를 로드
export default MyComponent;

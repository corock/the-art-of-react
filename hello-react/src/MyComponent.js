import React from 'react';

// 컴포넌트의 필수 props 를 지정하거나 props의 타입을 지정할 때 사용
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      children 값은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string
};

// 다른 파일에서 이 파일을 import 할 때, 위에서 선언한 MyComponent 클래스를 로드
export default MyComponent;

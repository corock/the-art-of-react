import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    /**
     * 현재 클래스형 컴포넌트가 상속하고 있는
     * 리액트의 Component 클래스가 지닌 생성자 함수 호출
     */
    super(props);

    // state 초깃값 설정
    this.state = {
      number: 0,
    };
  }

  render() {
    // state 를 조회할 때는 this.state 로 조회합니다.
    const { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <button
          // onClick 을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            // this.setState 를 사용하여 state 에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

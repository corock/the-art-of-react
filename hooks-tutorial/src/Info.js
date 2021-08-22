import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  /**
   * @function useEffect - 기본적으로 렌더링되고 난 직후마다 실행되며,
   * 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라집니다.
   */
  useEffect(() => {
    // console.log("렌더링이 완료되었습니다!");
    // console.log({ name, nickname });

    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;

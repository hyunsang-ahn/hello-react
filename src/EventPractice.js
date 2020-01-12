import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: ""
  });
  const { username, message } = form;
  const onChange = e => {
    const nextForm = {
      ...form, //기존폼을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value //원하는 값을 덮어 씌워주기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: ""
    });
  };
  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트연습</h1>
      <input
        type="text"
        name="username"
        placeholder="이름"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="메세지"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>버튼</button>
    </div>
  );
};

export default EventPractice;

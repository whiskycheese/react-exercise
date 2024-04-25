import { useRef, useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value.trim();
    const passwordValue = passwordRef.current.value.trim();

    emailValue
      ? emailRef.current.classList.remove("bgAlert")
      : emailRef.current.classList.add("bgAlert");

    passwordValue
      ? passwordRef.current.classList.remove("bgAlert")
      : passwordRef.current.classList.add("bgAlert");
  };

  return (
    <form action="#" method="post" onSubmit={handleSubmit}>
      <fieldset>
        <legend>ログイン</legend>
        <div>
          <label htmlFor="email">メールアドレス：</label>
          <input type="email" name="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">パスワード：</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
          />
        </div>
        <button type="submit">送信</button>
      </fieldset>
    </form>
  );
};

export default Form;

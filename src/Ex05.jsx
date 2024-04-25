import { useRef, useState } from "react";

const Ex05 = () => {
  const [mail, setMail] = useState("");
  const ref = useRef();

  return (
    <form
      action="#"
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        if (!ref.current.value.trim()) {
          alert("hey!");
        }

        setMail(ref.current.value);
      }}
    >
      <label htmlFor="mail">メールアドレス</label>
      <input type="text" name="mail" id="mail" ref={ref} />
      <button type="submit">送信</button>
    </form>
  );
};

export default Ex05;

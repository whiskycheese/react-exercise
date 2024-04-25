import { useState } from "react";

const Ex04 = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <form
      action="#"
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        setIsDisabled(true);
      }}
    >
      <label htmlFor="name">名前：</label>
      <input type="text" name="name" id="name" disabled={isDisabled} />
      <button type="submit">送信</button>
    </form>
  );
};

export default Ex04;

import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setCount(e.target.value.trim().length);
        }}
      />
      <p>
        文字数：<span>{count}</span>文字
      </p>
    </div>
  );
};

export default Count;

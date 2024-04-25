import { useState } from "react";

const Ex03 = () => {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    setValue(val);
  };

  return (
    <form>
      <MySelect onSelect={(val) => handleClick(val)} />
      <div>
        {value === "triathlon" ? (
          <TriathlonQ />
        ) : value === "other" ? (
          <OtherQ />
        ) : null}
      </div>
    </form>
  );
};

const MySelect = ({ onSelect }) => {
  return (
    <>
      <label htmlFor="hobby">趣味はなんですか？</label>
      <select
        name="hobby"
        id="hobby"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">--</option>
        <option value="triathlon">トライアスロン</option>
        <option value="other">その他</option>
      </select>
    </>
  );
};

const TriathlonQ = () => {
  return (
    <>
      <span>それでは好きな種目は？</span>
      <input type="radio" name="triathlon" id="swim" value="swim" />
      <label htmlFor="swim">Swim</label>
      <input type="radio" name="triathlon" id="run" value="run" />
      <label htmlFor="run">Run</label>
      <input type="radio" name="triathlon" id="bike" value="bike" />
      <label htmlFor="bike">Bike</label>
    </>
  );
};

const OtherQ = () => {
  return (
    <>
      <label htmlFor="like">それでは何が好き？</label>
      <input type="text" name="like" id="like" />
    </>
  );
};

export default Ex03;

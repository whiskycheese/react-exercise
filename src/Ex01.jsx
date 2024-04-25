import { useState } from "react";

const Ex01 = () => {
  const [appear, setAppear] = useState(true);

  return (
    <>
      {appear && <p>山田です</p>}
      <button onClick={() => setAppear(!appear)}>change</button>
    </>
  );
};

export default Ex01;

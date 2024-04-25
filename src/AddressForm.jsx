import { useState } from "react";

const AddressForm = () => {
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  return (
    <form
      action="#"
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        const query = new URLSearchParams({ zipcode: zipcode });
        fetch(`https://zipcloud.ibsnet.co.jp/api/search?${query}`)
          .then((res) => res.json())
          .then((data) => {
            const { address1, address2, address3 } = data.results[0];
            const fullAddress = address1 + address2 + address3;
            setAddress(fullAddress);
          })
          .catch((err) => console.log(err));
      }}
    >
      <fieldset>
        <legend>住所検索</legend>
        <ul>
          <li>
            <label htmlFor="zip">郵便番号：</label>
            <input
              type="text"
              name="zip"
              id="zip"
              onChange={(e) => setZipcode(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="address">住所：</label>
            <input
              type="text"
              name="address"
              id="address"
              value={address}
              readOnly
            />
          </li>
          <li>
            <button type="submit">郵便番号検索</button>
          </li>
        </ul>
      </fieldset>
    </form>
  );
};

export default AddressForm;

import { useState } from "react";

const AddressForm2 = () => {
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState([]);
  let pref = address[0];
  let city = address[1];
  let street = address[2];

  const handleSearchByZipcode = () => {
    const params = new URLSearchParams({ zipcode: zipcode });
    fetch("https://zipcoda.net/api?" + params)
      .then((response) => response.json())
      .then((data) => setAddress(data.items[0].components));
  };

  const handleSearchByAddress = () => {
    const params = new URLSearchParams({ pref: pref, address: city + street });

    fetch("https://zipcoda.net/api?" + params)
      .then((response) => response.json())
      .then((data) => setZipcode(data.items[0].zipcode));
  };

  return (
    <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="zipcode">郵便番号</label>
        <input
          type="text"
          id="zipcode"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fullAddress">住所</label>
        <input
          type="text"
          id="fullAdress"
          value={address.join().replaceAll(",", "")}
          readOnly
        />
      </div>
      <div>
        <label htmlFor="prefecture">都道府県</label>
        <input
          type="text"
          id="prefecture"
          value={pref}
          onChange={(e) => (pref = e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">市区町村</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => (city = e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="street">丁目番地</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={(e) => (street = e.target.value)}
        />
      </div>
      <button onClick={handleSearchByZipcode}>郵便番号で検索</button>
      <button onClick={handleSearchByAddress}>住所で検索</button>
    </form>
  );
};

export default AddressForm2;

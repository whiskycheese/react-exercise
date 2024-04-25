export const useAddress = (zipcode) => {
  let fullAddress = "";
  let error = "";

  const query = new URLSearchParams({ zipcode: zipcode });
  fetch(`https://zipcloud.ibsnet.co.jp/api/search?${query}`)
    .then((res) => res.json())
    .then((data) => {
      const { address1, address2, address3 } = data.results[0];
      fullAddress = address1 + address2 + address3;
    })
    .catch((err) => (error = err));

  return { fullAddress, error };
};

// import { useEffect, useState } from "react";

// function useCurrencyInfo(Currency) {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch(
//       " https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json"
//     )
//       .then((res) => res.json())
//       .then((res) => setData(res[Currency]));
//   }, [Currency]);
//   console.log(data);
//   return data;
// }

// export default useCurrencyInfo;

// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch(
//       `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//     )
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]));
//     console.log(data);
//   }, [currency]);
//   console.log(data);
//   return data;
// }

// export default useCurrencyInfo;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const result = await response.json();
        setData(result[currency]);
        console.log("Fetched data:", result[currency]);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    if (currency) {
      fetchCurrency();
    }
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

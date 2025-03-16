import { useEffect } from "react";

function CurrencyInfo(currency) {
    const [data,setData]=use
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    fetch(url).then((res)=>res.json()).then((res)=>setData);
  }, [currency]);
}

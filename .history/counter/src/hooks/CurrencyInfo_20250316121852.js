import { useEffect, useState } from "react";

function CurrencyInfo(currency) {
    const [data,setData]=useState([])
  useEffect(() => {
    let url = `https://v6.exchangerate-api.com/v6/1e7244f52c20418758089a0d/latest/${currency}`;
    fetch(url).then((res)=>res.json()).then((res)=>setData(res));
  }, [currency]);
  return data
}

export default CurrencyInfo
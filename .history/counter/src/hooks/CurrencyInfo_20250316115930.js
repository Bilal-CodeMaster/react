import { useEffect } from "react";

function CurrencyInfo(currency) {
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    fetch();
  }, [currency]);
}

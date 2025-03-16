import React, { useEffect, useState } from 'react'
import InputBox from '../components/InputCurrency';
import CurrencyInfo from '../hooks/CurrencyInfo';

function CurrencyConverter() {
const [from,setFrom]=useState("USD")
const [to,setTo]=useState("PKR")
const [amount,setAmount]=useState(0)
const currencyInfo=CurrencyInfo(from)
const [convertedAmount,setConvertedAmount]=useState(0)


const options=Object.keys(currencyInfo)

  const swap=()=>{
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
     setAmount(convertedAmount)
  }
  const convert=()=>{
setConvertedAmount(amount*currencyInfo[to])
  }
useEffect(()=>{
 
convert()
},[])
  return (
        <div
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 bg-blue-400">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currency={from}
                                currencyOption={options}
                                setAmount={(amount)=>setAmount(amount)}
                                setCurrency={(currency)=>setFrom(currency)}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"   
                                amount={convertedAmount}
                                currency={to}
                                currencyOption={options}
                                setAmount={(amount)=>setConvertedAmount(amount)}
                                setCurrency={(currency)=>setTo(currency)}
                                isInputDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CurrencyConverter
import React, { use, useId } from 'react'
function InputBox({
    label,
    amount,
    setAmount,
    setCurrency,
    currencyOption=[],
    isInputDisable=false,
   
    className = "",
}) {
   
const inputId=useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor='inputId'  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                id=
                    onChange={(e)=>setAmount && setAmount(e.target.value)}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={isInputDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currency}
                    onChange={(currency)=>setCurrency && setCurrency(currency)}
                >
                    {
                    currencyOption.map((currency,index)=>{

                        <option key={index} value={currency}>
                            {currency}
                        </option>
                    })
                    }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
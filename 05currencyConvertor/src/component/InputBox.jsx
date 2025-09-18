import { useId } from "react";


function InputBox({
    label,
    amount,
    onAmtChange,
    onCurrChange,
    currOptions = [],
    selectCurr = "usd",
}){
    const id = useId();

    return (
        <div className="bg-white p-3 flex rounded-lg text-sm">
            <div className="w-1/2">
                <label htmlFor={id} className="mb-2 inline-block text-black/40">{label}</label>
                <input id={id}
                type="number"
                className="outline-none py-1.5 bg-transparent w-full"
                placeholder="Amount"
                value={amount}
                onChange={(e)=> onAmtChange && onAmtChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Change</p>
                <select className="px-1 py-1 outline-none cursor-pointer bg-gray-100 rounded-lg"
                value={selectCurr}
                onChange={(e)=> onCurrChange && onCurrChange(e.target.value)}>
                    {currOptions.map((currency)=>{
                           return <option key={currency} value={currency}>{currency}</option>
                    })}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
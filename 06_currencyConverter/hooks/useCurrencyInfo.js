import { useEffect, useState } from "react";
const [currrency, setcurrrency] = useState(second)
function fetchData()
{
    const [data, setdata] = useState({})
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((res)=>{res.json()}).then((res)=>{setdata(res[currrency])})
    console.log(data)
    return data
}

function useCurrencyInfo(currency)
{
    useEffect(()=>{fetchData}, [currency])
}
export default useCurrencyInfo 
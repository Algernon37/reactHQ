import axios from "axios";
import { Dispatch, SetStateAction } from "react";

type SetState<T> = Dispatch<SetStateAction<T>>;

const useFetchCapitalData = async (
    setBalance: SetState<number | null>,
    setOnHold: SetState<number | null>,
    setTrandingCapital: SetState<number | null>,
    setTrandingCapitalCurrency: SetState<string | null>
) => {
    const responses = await Promise.allSettled([
        axios.get("http://localhost:3000/balance"),
        axios.get("http://localhost:3000/on_hold"),
        axios.get("http://localhost:3000/trading_capital"),
        axios.get("http://localhost:3000/trading_capital_currency")
    ]);
    if (responses[0].status === "fulfilled") setBalance(responses[0].value.data);
    else console.error("Ошибка при получении баланса:", responses[0].reason);

    if (responses[1].status === "fulfilled") setOnHold(responses[1].value.data);
    else console.error("Ошибка при получении on_hold:", responses[1].reason);
    
    if (responses[2].status === "fulfilled") setTrandingCapital(responses[2].value.data);
    else console.error("Ошибка при получении trading_capital:", responses[2].reason);
    
    if (responses[3].status === "fulfilled") setTrandingCapitalCurrency(responses[3].value.data);
    else console.error("Ошибка при получении trading_capital_currency:", responses[3].reason);
};


export default useFetchCapitalData;
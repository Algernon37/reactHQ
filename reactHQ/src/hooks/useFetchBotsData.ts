import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { Bot } from '../interfaces/interfaces';

type SetState<T> = Dispatch<SetStateAction<T>>;

const useFetchBotsData = async (
  setBots: SetState<Bot[] | null> 
) => {
  try {
    const response = await axios.get("http://localhost:3000/bots");
    setBots(response.data);
  } catch (error) {
    console.error("Ошибка запроса:", error);
  }
};

export default useFetchBotsData;
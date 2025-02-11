import { useEffect, useState } from 'react';
import useFetchBotsData from '../hooks/useFetchBotsData'
import BotComponent from './BotComponent'
import TimeRange from './Timerange'
import ChartComponent from './ChartComponent '
import {Bot, SelectedButtonProps} from '../interfaces/interfaces'

const BotsComponent: React.FC = () => {
    const [bots, setBots] = useState<Array<Bot> | null>([])

    const [selectedButton, setSelectedButton] = useState<SelectedButtonProps>(() => {
        return (localStorage.getItem("selectedButton") as SelectedButtonProps) || "24h";
    });

    const chartData: Record<SelectedButtonProps, number[]> = {
        "24h": [22, 24, 24, 25, 24, 23, 24],
        "7d": [30, 32, 35, 31, 30, 28, 29],
        "30d": [50, 55, 52, 58, 54, 53, 50],
        "60d": [70, 65, 68, 72, 74, 76, 75],
        "90d": [100, 95, 98, 102, 105, 110, 108],
        "all_time": [150, 160, 155, 170, 175, 180, 185]
    };

    const handleButtonClick = (text: SelectedButtonProps) => {
        setSelectedButton(text);  
        localStorage.setItem("selectedButton", text)
    };

    useEffect(()=> {
        useFetchBotsData(setBots)
    },[])

    return (
        <div className='flex flex-col gap-5'>
            <ChartComponent selectedButton={selectedButton} dataValues={chartData[selectedButton]} />
            <div className='grid grid-flow-col grid-rows-2 gap-0.5 px-3 mt-[70%]'>
                {bots && bots.map((bot, index) => (
                    <BotComponent 
                        key={index} 
                        bot={bot} 
                        selectedButton={selectedButton}
                    />    
                ))}
            </div>
            <TimeRange 
                handleButtonClick={handleButtonClick}
                selectedButton={selectedButton}
            />
        </div>
    )
}

export default BotsComponent;
import { useEffect, useState } from 'react';
import useFetchBotsData from '../hooks/useFetchBotsData'
import BotComponent from './BotComponent'
import TimeRange from './Timerange'
import {Bot} from '../interfaces/interfaces'

const BotsComponent: React.FC = () => {
    const [bots, setBots] = useState<Array<Bot> | null>([])

    useEffect(()=> {
        useFetchBotsData(setBots)
    },[])

    return (
        <div className='flex flex-col gap-5'>
            <div className='grid grid-flow-col grid-rows-2 gap-0.5 px-3 mt-[70%]'>
                {bots && bots.map((bot, index) => (
                    <BotComponent 
                        key={index} 
                        bot={bot} 
                    />    
                ))}
            </div>
            <TimeRange />
        </div>
    )
}

export default BotsComponent;
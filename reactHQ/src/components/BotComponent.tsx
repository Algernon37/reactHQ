import { useEffect, useState, FC  } from 'react';
import {BotComponentProps} from '../interfaces/interfaces'
import ConnectionLines from './ConnectionLines'

const Bot: FC<BotComponentProps> = ({ bot }) => {
    const [botType, setBotType] = useState<React.ReactNode>('ATTACK')

    useEffect(()=>{
        if (bot.name === 'green_bot') {
            setBotType('DEFENCE');
        } else if (bot.name === 'yellow_bot') {
            setBotType('MEGABOT');
        }else if (bot.name === 'blue_bot') {
            setBotType('BALANCE');
        }else if (bot.name === 'white_bot') {
            setBotType(['PLACE BOT ', <br key="linebreak"/>, 'HERE']);
        }
    },[])

    return (
        <div className='relative  flex flex-col justify-center items-center rounded-sm cursor-pointer bg-[#252d40] transition duration-300 hover:shadow-[inset_0_0_15px_rgba(43,127,255,0.4)] active:shadow-[inset_0_0_15px_rgba(43,127,255,0.4)]'>
        {bot.name === "yellow_bot" && <ConnectionLines />}
        <img className='mb-2' src={`${bot.name}.svg`} alt="bot" />
            <h1 className={`uppercase font-medium text-xs text-center ${ bot.name === 'white_bot' ? 'text-gray-500' : 'text-white'}` }>{botType}</h1>
            <p>{bot['24h']}</p>
        </div>
    )
}

export default Bot;

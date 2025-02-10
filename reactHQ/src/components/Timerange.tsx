import {useState} from 'react'
import ButtonTime from './ButtonTime';

const TimeRange: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<string>('');

    const handleButtonClick = (text: string) => {
        setSelectedButton(text);  
    };

    return (
        <div className='flex items-center gap-3 px-3 justify-center'>
            <h1 className='text-gray-600 font-semibold text-sm'>Time Range:</h1>
            <ButtonTime
                text={'24h'}
                isSelected={selectedButton === '24h'}
                onClick={() => handleButtonClick('24h')}
            />
            <ButtonTime
                text={'7 days'}
                isSelected={selectedButton === '7d'}
                onClick={() => handleButtonClick('7d')}
            />
            <ButtonTime
                text={'30 days'}
                isSelected={selectedButton === '30d'}
                onClick={() => handleButtonClick('30d')}
            />
            <ButtonTime
                text={'All time'}
                isSelected={selectedButton === 'all_time'}
                onClick={() => handleButtonClick('all_time')}
            />
        </div>
    );
}

export default TimeRange;
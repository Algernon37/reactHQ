import {ButtonTimeComponentProps} from '../interfaces/interfaces'

const ButtonTime: React.FC<ButtonTimeComponentProps> = ({ text, isSelected, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`text-sm border rounded-2xl px-2 py-0.5 px- cursor-pointer 
          ${isSelected ? 'text-white border-white' : 'text-gray-500 border-gray-500/50'}
        `}
      >
        {text}
      </button>
    );
};


export default ButtonTime;

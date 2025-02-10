import {ButtonTimeComponentProps} from '../interfaces/interfaces'

const ButtonTime: React.FC<ButtonTimeComponentProps> = ({ text, isSelected, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`text-sm border rounded-2xl px-2 py-0.5 cursor-pointer 
          ${isSelected ? 'text-white border-white' : 'text-gray-600 border-gray-600/50'}
        `}
      >
        {text}
      </button>
    );
};


export default ButtonTime;

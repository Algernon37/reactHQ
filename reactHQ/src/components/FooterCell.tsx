import {FooterCellProps} from '../interfaces/interfaces'

const FooterCell:React.FC<FooterCellProps> = ({title, img}) => {
    return (
        <div className="flex flex-col gap-3 cursor-pointer item-center justify-center">
            <img className='w-[30px] h-auto mt-0 mb-0 mr-auto ml-auto' src={img} alt="icon" />
            <h1 className={`text-xs text-center ${img === 'dashboard.svg' ? 'text-[#eeefef]' : 'text-gray-500'}`}>{title}</h1>
        </div>
    )
}

export default FooterCell;

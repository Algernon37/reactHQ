import FooterCell from "./FooterCell";

const FooterComponent:React.FC = () => {
    return (
        <div className="flex pt-2 pb-5 sm:pb-2 px-3 bg-[#232c3e] justify-between sm:rounded-xl">
            <FooterCell 
                title={'Dashboard'}
                img={'dashboard.svg'}
            />
            <FooterCell 
                title={'Megabot'}
                img={'business.svg'}
            />
            <FooterCell 
                title={'Bot market'}
                img={'shopping-cart.svg'}
            />
            <FooterCell 
                title={'Coin prices'}
                img={'coin.svg'}
            />
            <FooterCell 
                title={'Profile'}
                img={'gear.svg'}
            />
        </div>
    )
}

export default FooterComponent;
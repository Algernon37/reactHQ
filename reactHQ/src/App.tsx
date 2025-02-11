import HeaderComponent from './components/HeaderComponent'
import TrandingCapital from './components/TradingCapital'
import BotsComponent from './components/BotsComponent'
import FooterComponent from './components/FooterComponent'

const App: React.FC = () => {

  return (
    <div className="flex justify-center bg-[#112135] font-roboto mx-auto my-0" style={{minHeight:"100vh"}}>
        <div className='w-[100%] lg:w-[70%] relative w-screen overflow-hidden'>
          <HeaderComponent />
          <TrandingCapital />
          <BotsComponent />
          <FooterComponent />
        </div>
    </div>
  )
}

export default App
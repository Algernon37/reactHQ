import HeaderComponent from './components/HeaderComponent'
import TrandingCapital from './components/TradingCapital'
import ChartComponent from './components/ChartComponent '
import BotsComponent from './components/BotsComponent'


const App: React.FC = () => {

  return (
    <div className="flex justify-center bg-[#112135] font-roboto mx-auto my-0" style={{minHeight:"100vh"}}>
        <div className='w-[100%] lg:w-[70%] relative w-screen overflow-hidden'>
          <HeaderComponent />
          <TrandingCapital />
          <ChartComponent />
          <BotsComponent />
        </div>
    </div>
  )
}

export default App
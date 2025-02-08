import HeaderComponent from './components/HeaderComponent'
import TrandingCapital from './components/TradingCapital'

const App: React.FC = () => {

  return (
    <div className="flex justify-center bg-[#112135] px-3 font-roboto mx-auto my-0" style={{minHeight:"100vh"}}>
        <div className='w-[100%] lg:w-[70%]'>
          <HeaderComponent />
          <TrandingCapital />
        </div>
    </div>
  )
}

export default App
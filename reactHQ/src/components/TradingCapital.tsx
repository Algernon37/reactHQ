import { useEffect, useState } from 'react';
import useFetchCapitalData  from "../hooks/useFetchCapitalData";

const TrandingCapital: React.FC = () => {

  const [trandingCapital, setTrandingCapital] = useState(0)
  const [balance, setBalance] = useState(0)
  const [onHold, setOnHold] = useState(0)
  const [trandingCapitalCurrency, setTrandingCapitalCurrency] = useState('')

  useEffect(() => {
    useFetchCapitalData(
      setBalance, 
      setOnHold, 
      setTrandingCapital, 
      setTrandingCapitalCurrency
    )
  },[])

  return (
    <div className='flex justify-between items-end text-[#fff]'>
      <div className='flex flex-col'>
        <h1 className='text-gray-500 font-semibold text-xs sm:text-base'>TRANDING CAPITAL</h1>
        <p className='text-4xl sm:text-5xl uppercase font-light'>{trandingCapital}{trandingCapitalCurrency}</p>
      </div>
      <div className='flex flex-col text-xs sm:text-base'>
        <div className='flex gap-2 items-center'>
          <h1 className='text-gray-500 font-semibold'>BALANCE:</h1>
          <p>{balance}</p>
          <svg fill="#505c72" height="25px" width="25px" viewBox="-51.2 -51.2 614.40 614.40">
            <path d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,467.478 C139.39,467.478,44.522,372.61,44.522,256S139.39,44.522,256,44.522S467.478,139.39,467.478,256S372.61,467.478,256,467.478z"></path><path d="M256,72.348C154.739,72.348,72.348,154.739,72.348,256S154.739,439.652,256,439.652S439.652,357.261,439.652,256 S357.261,72.348,256,72.348z M263.805,241.239c23.794,12.576,53.413,28.239,53.413,59.283c0,27.956-18.869,51.548-44.522,58.842 v7.94c0,9.217-7.479,16.696-16.696,16.696c-9.217,0-16.696-7.479-16.696-16.696v-7.94c-25.652-7.294-44.522-30.886-44.522-58.842 c0-9.217,7.479-16.696,16.696-16.696s16.696,7.479,16.696,16.696c0,15.348,12.478,27.826,27.826,27.826 s27.826-12.478,27.826-27.826c0-10.935-18.109-20.5-35.631-29.761c-23.794-12.576-53.413-28.239-53.413-59.283 c0-27.956,18.869-51.548,44.522-58.842v-7.94c0-9.217,7.479-16.696,16.696-16.696c9.217,0,16.696,7.479,16.696,16.696v7.94 c25.652,7.294,44.522,30.886,44.522,58.842c0,9.217-7.479,16.696-16.696,16.696s-16.696-7.479-16.696-16.696 c0-15.348-12.478-27.826-27.826-27.826s-27.826,12.478-27.826,27.826C228.174,222.413,246.283,231.978,263.805,241.239z"></path>
          </svg>
        </div>
        <div className='flex gap-2 items-center'>
          <h1 className='text-gray-500 font-semibold'>ON HOLD:</h1>
          <p>{onHold}</p>
          <svg fill="#505c72" height="25px" width="25px" viewBox="-51.2 -51.2 614.40 614.40">
            <path d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,467.478 C139.39,467.478,44.522,372.61,44.522,256S139.39,44.522,256,44.522S467.478,139.39,467.478,256S372.61,467.478,256,467.478z"></path><path d="M256,72.348C154.739,72.348,72.348,154.739,72.348,256S154.739,439.652,256,439.652S439.652,357.261,439.652,256 S357.261,72.348,256,72.348z M263.805,241.239c23.794,12.576,53.413,28.239,53.413,59.283c0,27.956-18.869,51.548-44.522,58.842 v7.94c0,9.217-7.479,16.696-16.696,16.696c-9.217,0-16.696-7.479-16.696-16.696v-7.94c-25.652-7.294-44.522-30.886-44.522-58.842 c0-9.217,7.479-16.696,16.696-16.696s16.696,7.479,16.696,16.696c0,15.348,12.478,27.826,27.826,27.826 s27.826-12.478,27.826-27.826c0-10.935-18.109-20.5-35.631-29.761c-23.794-12.576-53.413-28.239-53.413-59.283 c0-27.956,18.869-51.548,44.522-58.842v-7.94c0-9.217,7.479-16.696,16.696-16.696c9.217,0,16.696,7.479,16.696,16.696v7.94 c25.652,7.294,44.522,30.886,44.522,58.842c0,9.217-7.479,16.696-16.696,16.696s-16.696-7.479-16.696-16.696 c0-15.348-12.478-27.826-27.826-27.826s-27.826,12.478-27.826,27.826C228.174,222.413,246.283,231.978,263.805,241.239z"></path>
          </svg>
        </div>
      </div>
    </div>
    )
  }
  
  export default TrandingCapital
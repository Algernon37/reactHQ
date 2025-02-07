import { useState } from 'react';

const HeaderComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex justify-between items-center px-3 py-8">
            <div className="flex items-center gap-4">
                <button
                    className="relative z-20 flex flex-col justify-between w-8 h-9 border-none cursor-pointer mb-[-35px]"
                    onClick={toggleMenu}
                >
                    <span
                        className={`absolute w-[22.5px] h-[2px] right-[3px] bg-slate-500 rounded transition-all duration-500 transform ${
                            isOpen ? 'translate-y-0 rotate-45' : '-translate-y-[6px]'
                        }`}
                    />
                    <span
                        className={`absolute w-[22.5px] h-[1.5px] right-[3px] bg-slate-500 rounded transition-opacity duration-500 ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <span
                        className={`absolute w-[22.5px] h-[1px] right-[3px] bg-slate-500 rounded transition-all duration-500 transform ${
                            isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-[6px]'
                        }`}
                    />
                </button>
                <nav
                    className={`absolute top-0 left-0 w-full h-full bg-gray-900 transition-transform duration-500 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                </nav>
            </div>
            <h1 className='font-roboto text-gray-500 font-semibold'>
                Dashboard
            </h1>
            <button className="text-3xl p-2 rounded-full active:rotate-180 hover:rotate-180 transition-transform duration-300 cursor-pointer">
                <svg fill="#505c72" width="20px" height="20px" viewBox="0 0 32.00 32.00" transform="rotate(180)">
                    <path d="M29.949 13.902c-0.046-0.37-0.358-0.653-0.736-0.653-0.037 0-0.074 0.003-0.11 0.008l0.004-0.001c-0.37 0.050-0.653 0.365-0.653 0.745 0 0.034 0.002 0.067 0.007 0.1l-0-0.004c0.073 0.527 0.115 1.137 0.115 1.756 0 0.002 0 0.003 0 0.005v-0c-0.009 7.314-5.936 13.241-13.249 13.249h-0.001c-0.013 0-0.028 0-0.043 0-4.296 0-8.11-2.063-10.505-5.253l-0.024-0.034h5.643c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-7.071c-0.020 0-0.037 0.010-0.056 0.011-0.050 0.005-0.096 0.015-0.14 0.029l0.005-0.001c-0.058 0.014-0.108 0.033-0.156 0.056l0.004-0.002c-0.015 0.008-0.031 0.008-0.045 0.016-0.022 0.018-0.041 0.035-0.060 0.054l-0 0c-0.044 0.032-0.082 0.067-0.117 0.106l-0.001 0.001c-0.056 0.069-0.102 0.149-0.135 0.235l-0.002 0.006c-0.016 0.047-0.027 0.101-0.032 0.157l-0 0.003c-0.006 0.021-0.011 0.047-0.015 0.074l-0 0.004v7.072c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-4.77c2.698 3.209 6.715 5.235 11.205 5.235 0.016 0 0.032-0 0.047-0h-0.002c8.142-0.010 14.74-6.607 14.75-14.748v-0.001c-0-0.69-0.046-1.369-0.136-2.034l0.009 0.078zM3.121 18.893c0.035 0 0.070-0.002 0.104-0.006l-0.004 0c0.37-0.051 0.651-0.364 0.651-0.744 0-0.035-0.002-0.070-0.007-0.104l0 0.004c-0.074-0.529-0.116-1.139-0.116-1.76v-0c0.009-7.314 5.936-13.241 13.249-13.25h0.001c0.013-0 0.028-0 0.043-0 4.296 0 8.11 2.064 10.505 5.254l0.024 0.034h-5.643c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h7.072c0.019 0 0.035-0.009 0.053-0.011 0.107-0.014 0.204-0.043 0.294-0.084l-0.006 0.003c0.015-0.008 0.032-0.008 0.046-0.016 0.022-0.018 0.042-0.036 0.060-0.055l0-0c0.044-0.033 0.083-0.068 0.118-0.108l0.001-0.001c0.027-0.033 0.053-0.070 0.074-0.109l0.002-0.004c0.050-0.080 0.082-0.175 0.091-0.277l0-0.002c0.007-0.024 0.013-0.053 0.017-0.083l0-0.004v-7.071c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 4.771c-2.698-3.211-6.716-5.238-11.208-5.238-0.015 0-0.031 0-0.046 0h0.002c-8.147 0.003-14.75 6.608-14.75 14.755 0 0.689 0.047 1.367 0.139 2.030l-0.009-0.077c0.050 0.369 0.363 0.65 0.742 0.65h0z"></path> 
                </svg>
            </button>
        </header>
    )
  }
  
  export default HeaderComponent
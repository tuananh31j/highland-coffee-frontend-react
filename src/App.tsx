// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import avt from './assets/atv2.jpg';




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div  >
        <div
            className="flex   flex-col absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-[50%]  items-center p-5 rounded-md">

            <div
                className="bg-slate-950 text-white flex flex-col justify-center items-center my-6 rounded-md pt-20  p-5 relative">
                <div className="absolute -top-10">
                    <img src={avt} className="w-20 object-cover h-20 rounded-full" alt=""/>


                </div>
                <div className="text-center mb-7">
                    <h1 className=" font-semibold text-2xl mb-2">Nguyễn Tuấn Anh</h1>
                    <p className="font-light">Web developer</p>
                </div>
                <div className="">
                    <div className="flex gap-10">
                        <div>
                            <p className="mb-2"><span className="font-light">Student id:</span> PH30476</p>
                            <p><span className="font-light">Address:</span> Ha Noi</p>

                        </div>
                        <div className="">
                            <p className="mb-2"><span className="font-light">Age:</span> 20</p>
                            <p><span className="font-light">Major:</span> Front-end</p>

                        </div>

                    </div>
                    <div className="mt-12 pt-10 pb-10 ">
                        <ul className="flex justify-evenly ">
                            <li><span><i
                                        className="fa-brands text-3xl animate-bounce text-yellow-500 fa-square-js"></i></span>
                            </li>
                            <li><span><i
                                        className="fa-brands animate-ping text-3xl text-white fa-java"></i></span>
                            </li>
                            <li><span><i
                                        className="animate-spin fa-brands text-3xl text-blue-500 fa-php"></i></span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    </div>

    </>
  )
}

export default App

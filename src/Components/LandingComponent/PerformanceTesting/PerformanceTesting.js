import React from 'react';
import { Link } from 'react-router-dom';
import {SiHiveBlockchain} from 'react-icons/si';
import {TiPointOfInterest} from 'react-icons/ti';
import {FaGlobe} from 'react-icons/fa';
import {BsFillCartCheckFill} from 'react-icons/bs';
import {DiGoogleAnalytics} from 'react-icons/di';


const PerformanceTesting = () => {

  const PerformanceTesting = [
    { icon: <SiHiveBlockchain />, url: "blockchain", title: "Blockchain" },
    { icon: <TiPointOfInterest />, url: "fintech", title: "Fintech" },
    { icon: <FaGlobe />, url: "iot", title: "IoT" },
    { icon: <BsFillCartCheckFill />, url: "e-commerce", title: "e-Commerce" },
    { icon: <DiGoogleAnalytics />, url: "analytics", title: "Analytics" },

  ]
  return (
    <>
    <div className="flex flex-row flex-wrap justify-center px-5 mt-14 mb-52 gap-36 ">
        {PerformanceTesting.map((res, i) => {
          return (
            <>
              <div className=" w-[323px] h-[276px] group flex flex-col justify-between items-center p-6 gap-3 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="text-[150px] text-blue-500 group-hover:text-orange-400 group-hover:rotate-[360deg] ease-out duration-300">
                  {res.icon}
                </div>
                <Link to={`/home/mind-maps/${res.url}`} className="mt-3 text-xl font-semibold text-center text-blue-400 group-hover:text-orange-500 hover:font-bold"> {res.title}</Link>  
              </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default PerformanceTesting
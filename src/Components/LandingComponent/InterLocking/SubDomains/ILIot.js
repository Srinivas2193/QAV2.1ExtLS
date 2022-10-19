import React from 'react';
import { Link } from 'react-router-dom';
import dia1 from './../../../../assets/Images/InterLocking/interlocking1.png';
import dia2 from './../../../../assets/Images/InterLocking/interlocking1.png';
import dia3 from './../../../../assets/Images/InterLocking/interlocking1.png';
import dia4 from './../../../../assets/Images/InterLocking/interlocking1.png';

const ILIoT = () => {

  const ILIoT = [
    { img: dia1, url: "interlocking-1", title: "InterLocking-1" },
    { img: dia2, url: "interlocking-2", title: "InterLocking-2" },
    { img: dia3, url: "interlocking-3", title: "InterLocking-3" },
    { img: dia4, url: "interlocking-4", title: "InterLocking-4" },
   

  ]
  return (
    <>
    <div className="flex flex-row flex-wrap justify-center px-5 mt-14 mb-52 gap-36 ">
        {ILIoT.map((res, i) => {
          return (
            <>
              <div className=" w-[323px] h-[276px] group flex flex-col justify-between items-center p-6 gap-3 max-w-sm bg-white rounded-xl hover:scale-110 ease-in duration-300 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img src={res.img} alt={res.title} />
                </div>
                
                <Link to={`/home/mind-maps/inter-locking/${res.url}`} className="mt-3 text-xl font-semibold text-center text-blue-400 group-hover:text-orange-500 hover:font-bold"> {res.title}</Link>  
              </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default ILIoT;
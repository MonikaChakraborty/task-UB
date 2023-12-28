import Lottie from 'lottie-react';
import device from './HomeAnimation.json'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            {/* This is Home */}
     
               
                <Lottie className='w-[500px]' animationData={device}></Lottie>

             <div className='flex gap-24'>
         <Link to='/slider1'>
         <button className="btn btn-outline bg-slate-500 hover:bg-orange-600  border-0 p-3 rounded text-white font-bold border-b-4 border-orange-600 mt-4 ">Go to Slider 1</button>
         </Link>

             <Link to='/slider2'>
             <button className="btn btn-outline bg-slate-500 hover:bg-orange-600  border-0 p-3 rounded text-white font-bold border-b-4 border-orange-600 mt-4 ">Go to Slider 2</button>
             </Link>
             </div>

                </div>
      
    );
};


export default Home;
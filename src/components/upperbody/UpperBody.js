import React from 'react';
import upperImg from '../../assets/images/upperBodyImg.jpg';
import {BsArrowUpRight} from "react-icons/bs";
import upperShape from '../../assets/images/shape-2.png';
import upperShape2 from '../../assets/images/shape-3.png';


const UpperBody = () => {

    return (
        <div className={`relative px-16`}>
            <div >
                <p className={`absolute right-40 animate-pulse rounded-circle w-10 h-10 bg-custom text-custom`} >.</p>
            </div>
            <div className={`flex gap-4 py-28`} >
                <div className={`w-7/12 my-auto`} >
                    <div className={`text-6xl font-semibold text-nCustom`}>
                        <p className={`mb-3`} >I am Stacey</p>
                        <p className={`mb-3`}>Lee Decker,</p>
                        <p className={`text-5xl mb-9`} >Financial <span className={`text-orange-600`} >Adviser/Broker</span></p>
                    </div>
                    <p className={`text-xl `} >I am a financial consultant focused on solving problems involving individual/firm investments and portfolio profits.</p>

                    <div className={`mt-12 flex gap-3 font-semibold`} >
                        <button className={`py-4 px-8 flex duration-700 bg-custom2 hover:bg-custom text-white`} >Get Started <span className={`animate-bounce pl-2 pt-1`} ><BsArrowUpRight/></span></button>
                        <button className={`py-4 px-8 flex duration-700 hover:text-custom2`} >See Detailed Report <span className={`text-xl pl-2 pt-1`} ><BsArrowUpRight/></span></button>
                        <img  src={upperShape} className={`ml-8 animate-ping h-6 my-auto`} alt={`upper-shape`} />
                    </div>
                </div>
                <div className={`w-5/12`} >
                    <img src={upperImg} className={`rounded-lg`} alt={`human-1`} />
                </div>
            </div>

            <img  src={upperShape2} className={`mb-20 animate-pulse h-8`} alt={`upper-shape`} />
        </div>
    );
};

export default UpperBody;

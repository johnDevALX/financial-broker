import React from 'react';
import purpleImg from '../../assets/images/purpleImg.jpg';
import shape from '../../assets/images/shape-4.png';
import 'animate.css';
import {AiFillCheckCircle} from "react-icons/ai";


const PurpleBody = () => {
    return (
        <div className={`bg-purpleCustom`} >
            <div className={`flex gap-4 justify-evenly py-32 px-20`} >
                <div className={`relative w-6/12 my-auto`} >
                    <img src={shape} className={`absolute w-20 h-20 -top-10 animate-pulse right-8`} alt={`shape`} />
                    <img src={purpleImg} className={`rounded-xl`} alt={`img`} />
                </div>
                <div className={`w-6/12 text-white`} >
                    <p className={`text-xl pb-6 font-semibold text-effectCustom`} >FINANCIAL CONSULTANT</p>
                    <p className={`text-5xl pb-8 font-semibold`} >Stacey Lee Decker</p>
                    <div className={`text-lg pb-6 text-slate-300`} >With over 12 years of experience working with nine prestigious firms in the United States, I have accumulated enough experience to manage & improve your investment portfolio. I have successfully passed five brokerage examinations and gotten license registrations in over twenty-eight states.</div>
                    <div className={`text-lg pb-5 text-slate-300`} >I have a stellar track record of meeting & exceeding the financial targets of my numerous clients, I will invest my time and substantial experience in making sure you succeed financially.</div>
                    <div className={`text-lg pb-2 font-semibold flex gap-2`} ><p className={`text-xl pt-1 text-custom`} > <AiFillCheckCircle/></p>24/7 Trading & Stock Options Support</div>
                    <div className={`text-lg pb-2 font-semibold flex gap-2`} ><p className={`text-xl pt-1 text-custom`} > <AiFillCheckCircle/></p>Easy Trading & Investment Processes</div>
                    <div className={`text-lg pb-6 font-semibold flex gap-2`} ><p className={`text-xl pt-1 text-custom`} > <AiFillCheckCircle/></p>Regular Updates & Market Insights</div>

                    <button className={`py-4 px-8 font-semibold rounded-lg bg-custom2 hover:bg-custom duration-700`} >My Work Experience</button>
                </div>
            </div>
        </div>
    );
};

export default PurpleBody;

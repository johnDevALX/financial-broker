import React, {useState} from 'react';
import logo from '../../assets/images/logo.png';
import {CgMenuHotdog} from "react-icons/cg";
import {AiOutlineClose} from "react-icons/ai";
import {TbMailPlus} from "react-icons/tb";
import {FaDownload} from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(true);
    const handleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <nav className={`flex py-6 px-14`}>
            <div>
                <img src={logo} alt={`logo`} />
            </div>
            <div className={`flex gap-12 my-auto mx-24 font-extrabold`} >
                <a className={`text-custom hover:text-nCustom hover:cursor-pointer duration-300`} href={`#`}>Home</a>
                <a className={`text-nCustom hover:text-custom hover:cursor-pointer duration-300`} >About Me</a>
                <a className={`text-nCustom hover:text-custom hover:cursor-pointer duration-300`}>Work Experience</a>
                <a className={`text-nCustom hover:text-custom hover:cursor-pointer duration-300`}>Client Reviews</a>
                <a className={`text-nCustom hover:text-custom hover:cursor-pointer duration-300`}>Contact Me</a>
            </div>
            <div className={`flex justify-end relative  my-auto`} >
                <button onClick={handleMenu} className={`text-custom text-3xl`} ><CgMenuHotdog/></button>
                <div style={{zIndex: "1"}} className={`${isMenuOpen ? "translate-x-full" : "translate-x-0"} duration-700 text-nCustom flex px-8 fixed my-auto bg-slate-50 h-screen top-0 right-0 md:w-1/3 shadow-md`}>
                    <button onClick={handleMenu} className={` text-custom text-3xl absolute top-6 right-6`} ><AiOutlineClose/></button>
                    <div className={`absolute grid top-24`} >
                        <div>
                            <img className={`w-36`} src={logo} alt={`logo`} />
                        </div>
                        <div className={`my-14 flex font-semibold`} >
                            <p className={`border-nCustom border-r-2 pr-3 mr-3`} >Financial Consultant</p>
                            <p>Investment Adviser</p>
                        </div>
                        <hr/>
                        <div className={`my-10 `}>
                            <p className={`font-bold text-2xl`} >Get In Touch</p>
                            <div className={`flex my-6`} >
                                <p className={`text-custom text-3xl my-auto mr-2`} ><TbMailPlus/></p>
                                <div className={`grid font-semibold`} >
                                    <p>Email</p>
                                    <p>hello@staceyleedecker.com</p>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <p style={{transition: "all 0.4s ease-in-out 0s"}} className={`mt-4 w-10 border rounded-lg bg-slate-50 hover:bg-custom p-2 text-lg text-nCustom hover:text-white`} >
                                <FaDownload/>
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

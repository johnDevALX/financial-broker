import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import UpperBody from "../../components/upperbody/UpperBody";
import EffectBody from "../../components/effectbody/EffectBody";
import PurpleBody from "../../components/purplebody/PurpleBody";

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <UpperBody/>
            <EffectBody/>
            <PurpleBody/>
        </div>
    );
};

export default HomePage;

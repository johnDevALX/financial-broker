import React, {useState} from 'react';

const EffectBody = () => {
    const [firstDigit, setFirstDigit] = useState(0);
    const [secondDigit, setSecondDigit] = useState(0.1);
    const [thirdDigit, setThirdDigit] = useState(0);
    const [fourthDigit, setFourthDigit] = useState(0.1);
    return (
        <div className={`bg-effectCustom  h-80`}>
            <div className={` flex justify-evenly gap-6 py-24`}>
                <div>
                    <div className={`flex text-8xl`} >
                        <p className={`pt-1`} >+</p>
                        <p>{firstDigit}</p>
                    </div>
                    <div>Years of experience</div>
                </div>

                <div>
                    <div className={`flex text-8xl`} >
                        <p>{secondDigit}</p>
                        <p className={`my-auto pt-6 pl-2 text-6xl`} >k</p>
                    </div>
                    <div>Portfolios handled</div>
                </div>

                <div>
                    <div className={`flex text-8xl`} >
                        <p className={`pt-1`} >+</p>
                        <p>{thirdDigit}</p>
                    </div>
                    <div>State Licences</div>
                </div>

                <div>
                    <div className={`flex text-8xl`} >
                        <p>{fourthDigit}</p>
                        <p className={`my-auto pt-6 pl-2 text-6xl`} >k</p>
                    </div>
                    <div>Worldwide clients</div>
                </div>
            </div>
        </div>
    );
};

export default EffectBody;

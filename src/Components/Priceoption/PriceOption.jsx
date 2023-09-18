/* eslint-disable react/prop-types */

import Feature from "../Fetaure/Feature";

const PriceOption = ({option}) => {
    const {name,price,features} = option 
    return (
        <div className="bg-cyan-400 rounded-md p-4 text-white">
            <h1 className="text-center">
                <span className="text-7xl">{price}<span className="text-3xl">$</span></span>
                <span className="text-3xl">/per-month</span>
            </h1>
            <h4 className="text-2xl text-center my-8">{name}</h4>
            <div className="mb-4">
                {
                    features.map(feature => <Feature feature={feature}></Feature>)
                }
            </div>
            <button className=" btn btn-outline btn-secondary w-full ">Secondary</button>
        </div>
    );
};


export default PriceOption;
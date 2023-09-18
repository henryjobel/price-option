

import PriceOption from "../Priceoption/PriceOption";

const Priceoptions = () => {
    const gymPriceOptions = [
        {
          id: 1,
          name: "Basic",
          price: 30,
          features: [
            "Access to basic gym facilities",
            "Weekly fitness classes",
            "Locker room access",
            "Personalized workout plan"
          ]
        },
        {
          id: 2,
          name: "Premium",
          price: 50,
          features: [
            "Access to all gym facilities",
            "Unlimited access to all fitness classes",
            "Locker rental included",
            "Nutritional counseling session"
          ]
        },
        {
          id: 3,
          name: "Vip",
          price: 80,
          features: [
            "VIP access to the gym",
            "Unlimited access to all fitness classes",
            "Private locker with laundry service",
            "Personal training session twice a month",
            "Monthly body composition analysis"
          ]
        }
      ];
      
    return (
        <div>
           <h2 className="text-5xl text-center pb-7">Best Price Option</h2>
           <div className="grid grid-cols-3 gap-5 m-12">
           {
               gymPriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>) 
            }
           </div>
        </div>
    );
};

export default Priceoptions;
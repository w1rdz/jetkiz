import React from "react";





import food03 from "../img/3.png";


const FormDate = () => {
  


    const randomNumber = () => {
        return Math.floor(Math.random() * 10);
    };


    return (
        <div className=""><div className="overflow-hidden overflow-y-auto h-60"> 
            <div className="border-b-2 border-yellow-400">

                <div className="flex">
                    <img src={food03} alt="" className="w-1/2" />
                    <div className="info">
                        <h1 className="text-xl font-bold mb-4">Заказ №{randomNumber()}</h1>
                        <p>приятоного аппетита</p>
                    </div>
                </div>

                
                    <div className="flex items-center"> <img src={food03} alt="" className="w-1/5" />
                    <div className="">
                        <h1 className="font-bold">Кортошка фри x{randomNumber()}</h1>
                        <p>4000tg</p>
                    </div>
                </div>

                    <div className="flex items-center">
                        <img src={food03} alt="" className="w-1/5" />
                        <div className="">
                            <h1 className="font-bold">Наггетсы x{randomNumber()}</h1>
                            <p>2300tg</p>
                        </div>
          

                </div>
            </div>
</div>

      

</div>
    );
};

export default FormDate;
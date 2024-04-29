import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormSnip from '../popApp/formSnip';

const OrderConfirm = () => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='bg-yellow-100 bottom-0 right-0 left-0 top-0 absolute'>
            <div className='bg-yellow-100 grid gap-4'>
                <div className="text-4xl font-bold w-full border-b-2 mb-6 pb-2 px-2 ">Jetkiz</div>

                <div className="order w-full px-3.5 mb-10">
                    <div className='flex justify-between items-center '>
                        <h1 className="text-2xl font-bold">Ваш заказ</h1>
                        <Link to="/"><span className='text-green-500 font-bold'>изменить</span></Link>
                    </div>

                    <div className="">0</div>
                </div>

                <form action="" method='post'>
                    <input type="text" placeholder='Добавить комментарий...' className='active:border-0 focus:border-transparent focus:outline-none bg-yellow-200 w-full py-4 px-2 rounded-xl'/>
                </form>
            </div>

            {showPopup && (
                <FormSnip closePopup={closePopup}/>
            )}

            <button className='add-to-cart w-full bottom-0 right-0 p-4 bg-green-500 text-white fixed z-10' onClick={openPopup}>ОПЛАТИТЬ $</button>
        </div>
    );
}

export default OrderConfirm;

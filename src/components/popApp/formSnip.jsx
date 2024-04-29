import React, { useState } from "react";

import FormDate from "./formToDate";
import { AiFillCreditCard } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import PayToPay from "./formToPay";
import FormAdress from "./formToAdres";

const FormSnip = ({ closePopup }) => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleComponentClick = (componentName) => {
        if (selectedComponent === componentName) {
            setSelectedComponent(null); // Если компонент уже открыт, закрываем его
        } else {
            setSelectedComponent(componentName); // Иначе открываем выбранный компонент
        }
    };

    return (
        <div className="popup bottom-0 right-0 left-0 top-0 absolute mt-10 mb-20 mx-4 bg-yellow-100 rounded-2xl z-20 border-2 border-yellow-400">
            <div className="popup-content px-2 pt-3">
                <h1 className='text-2xl font-bold border-b-2 pb-3 border-yellow-400'>Оплата заказа</h1>
                <button className="close-button text-4xl absolute top-0 right-0 pt-2 pr-2" onClick={closePopup}>&#10006;</button>

                {selectedComponent !== 'payment' && selectedComponent !== 'address' && <h2><FormDate closePopup={closePopup}/></h2>}
                <div className="mt-6 grid gap-8">
                    {!selectedComponent && (
                        <>
                            <div className={`pay-method flex p-4 gap-4 w-full items-center bg-yellow-300 rounded-xl ${selectedComponent === 'payment' ? 'selected' : ''}`} onClick={() => handleComponentClick('payment')}><AiFillCreditCard className="text-2xl" /><span className="text-xl font-bold">Способ оплаты</span></div>
                            <div className={`pay-method flex p-4 gap-4 w-full items-center bg-yellow-300 rounded-xl ${selectedComponent === 'address' ? 'selected' : ''}`} onClick={() => handleComponentClick('address')}><IoLocationSharp  className="text-2xl" /><span className="text-xl font-bold">Адрес доставки</span></div>
                        </>
                    )}
                </div>
                {selectedComponent === 'payment' && (
                    <>
                        <PayToPay closePopup={closePopup}/>
                        <button className='add-to-cart w-60 my-4 bottom-0 left-0 right-0 mx-auto py-4 bg-green-500 text-white absolute z-10 text-center rounded-2xl' onClick={() => handleComponentClick('payment')}>Подтвердить</button>
                    </>
                )}
                {selectedComponent === 'address' && (
                    <>
                        <FormAdress/>
                        <button className='add-to-cart w-60 my-4 bottom-0 left-0 right-0 mx-auto py-4 bg-green-500 text-white absolute z-10 text-center rounded-2xl' onClick={() => handleComponentClick('address')}>Подтвердить</button>
                    </>
                )}
                {!selectedComponent && (
                    <button className='add-to-cart w-60 my-4 bottom-0 left-0 right-0 mx-auto py-4 bg-green-500 text-white absolute z-10 text-center rounded-2xl' onClick={closePopup}>ОПЛАТИТЬ $</button>
                )}
            </div>
        </div>
    );
}

export default FormSnip;
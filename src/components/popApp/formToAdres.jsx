import React from "react";



const FormAdress = ({closePopup}) => {
    return ( <div className="">
        <div className=" rounded-xl">
    <h2 className="text-xl font-bold mb-4">Адрес доставки</h2>
    <form className="px-2">
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Полное имя
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="Введите ваше имя"
            />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Адрес
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Введите ваш адрес"
            />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                Город
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="Введите ваш город"
            />
        </div>
        <div className="flex items-center justify-between">
        
        </div>
    </form>
</div>
    </div> );
}
 
export default FormAdress;
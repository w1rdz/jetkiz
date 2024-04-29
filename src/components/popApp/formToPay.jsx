import React from 'react';

const PayToPay = () => {




    return ( 
        <div >
           <div className="">

            
                <form className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-2">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Номер карты:</label>
                    <input type="text" id="cardNumber" name="cardNumber" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Введите номер карты" />

                    <div className="flex gap-2 w-full">
                        <div className="w-1/2">
                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Срок действия:</label>
                            <input type="text" id="expiryDate" name="expiryDate" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="ММ/ГГ" />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV:</label>
                            <input type="text" id="cvv" name="cvv" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="CVV" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input id="agreeTerms" name="agreeTerms" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-900">сохранить способ оплаты</label>
                    </div>

                    
                </form>
           </div>

          
        </div>
     );
}
 
export default PayToPay;
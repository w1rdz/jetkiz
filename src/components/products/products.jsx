import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Prod from './productsitem';

import food01 from "../img/1.png"
import food02 from "../img/2.png"
import food03 from "../img/3.png"
import food04 from "../img/4.png"
import food05 from "../img/5.png"
import food06 from "../img/6.png"

const ProductsPage = () => {
 
    const [products] = useState([
        { id: 1,image : food01, name: 'САНДЕРС МЕГА БУРГЕР КОМБО', price: 10 },
        { id: 2,image : food02, name: 'БОКСМАСТЕР КОМБО', price: 15 },
        { id: 3,image : food03, name: 'ДАБЛ ШЕФБУРГЕР КОМБО', price: 20 },
        { id: 1,image : food04, name: 'ЕТ КЕРЕМЕТ (X2) + 1Л PEPSI', price: 10 },
        { id: 2,image : food05, name: 'БАСКЕТ 26 КРЫЛЬЕВ КОМБО', price: 15 },
        { id: 3,image : food06,name: 'ФРЕНДС БОКС КОМБО', price: 20 },
    ]);
    
    const [totalQuantity, setTotalQuantity] = useState(0);

    return (
        <div className=' px-3.5 bg-yellow-100'>
            <h1 className=' text-4xl font-bold w-full border-b-2 mb-6 pb-2 px-2 border-orange-500'>Jetkiz</h1>
            <div className="product-list grid grid-cols-2 gap-8 reletive text-center">
                {products.map(product => (
                    <Prod key={product.id} product={product} setTotalQuantity={setTotalQuantity} />
                ))}
            </div>
            {totalQuantity > 0 && (
                <div className="">
                    <Link to="/order" className="" ><button className='add-to-cart w-full bottom-0 right-0 p-4 bg-green-500 text-white fixed z-10'>ПЕРЕЙТИ К ЗАКАЗУ</button></Link>
                </div>
            )}
        </div>
    );
};

export default ProductsPage;
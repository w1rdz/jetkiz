import React, { useState } from 'react';



const Prod = ({ product,  setTotalQuantity, history}) => {
    const [quantity, setQuantity] = useState(0);


    const handleAdd = () => {
        setQuantity(quantity + 1);
        setTotalQuantity(prevTotalQuantity => prevTotalQuantity + 1);
       
    };

    const handleRemove = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setTotalQuantity(prevTotalQuantity => prevTotalQuantity - 1);
        }
    };

 

    
    
   

   
    return (
        <div className="product-item relative h-64 ">
            <div className="info ">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}•${[product.price]}</h3>
                <span></span>
                <p></p>
            </div>
            <div className="quantity">
                <button className={quantity > 0 ? "hidden" : "absolute bottom-0 right-0 p-1 bg-orange-500 text-white w-full rounded-lg "} onClick={handleAdd}>ДОБАВИТЬ</button>
            </div>
            {quantity > 0 && (
                <div className="flex px-10">
                    <div className="absolute top-0 right-0 bg-orange-500 p-2 rounded-xl w-10">{quantity}</div>

            <div className="absolute bottom-0 right-0 w-full flex">
                <button onClick={handleAdd} className='bg-green-500 rounded-2xl text-2xl w-1/2'>+</button>
                <button onClick={handleRemove} className='bg-red-500 rounded-2xl text-2xl w-1/2'>-</button>
            </div>
                    
          
                </div>
            )}
            
   
        </div>
    );
};

export default Prod;
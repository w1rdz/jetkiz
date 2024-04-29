import { BrowserRouter,Routes, Route } from 'react-router-dom';

import './App.css';

import ProductsPage from './components/products/products';
import OrderConfrim from './components/orders/orderConfrim';
import PayToPay from './components/popApp/formToPay';

function App() {
  return (
    <div className="App">
          
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<ProductsPage/>} />

                <Route path='/order' element={<OrderConfrim/>} />

                <Route path='/orderform' element={<PayToPay />} />
              </Routes>
            </BrowserRouter>
        
    
    </div>
  );
}

export default App;

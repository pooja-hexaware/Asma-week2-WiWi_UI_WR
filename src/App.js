import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Eight from './components/stores/Eight';
import Seven from './components/stores/Seven';
import Nine from './components/stores/Nine';
import Four from './components/stores/Four';
import Stores from './components/stores/stores'
import Cart from './components/Cart';
import Order from './components/Order';
import SimpleMap from './components/Maps'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<SimpleMap />}/>
    <Route path="/stores" element={<Stores />}/>
    <Route path="/stores/891" element={<Eight />}/>
    <Route path="/stores/901" element={<Nine />}/>
    <Route path="/stores/772" element={<Seven />}/>
    <Route path="/stores/465" element={<Four />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/orders" element={<Order />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;

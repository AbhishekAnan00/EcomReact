import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import {Home} from './Component/Home/Home'
import {About} from './Component/About/About'
import {Product} from './Component/Product/Product'
import {Cart} from './Component/Cart/Cart'
import {Contact} from './Component/Contact/Contact'
import {Header} from './Component/Header/Header'
import { SingleProduct } from './Component/SingleProduct/SingleProduct'
import { Products } from './Component/Products/Products'


function App() {

  return (
    <>
     <Router>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App

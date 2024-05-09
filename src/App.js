
// import Counter from "./components/count/count"
import { Profile } from "./components/profile/profile"
import Nav from "./components/NavBar/Navbar"
import Products from "./components/Product/Products"
import {Home } from "./Home"
import {Login} from "./Login"
import Users from "./components/Users/users"
import {Register} from "./Register"
import { Route,Routes } from "react-router-dom"
import { ProductDetails } from "./components/Product/ProductDetails"

function App()
{
  return(
   <div>
   <Nav/>
   <Routes>

    <Route path="/" element={<Home/>}/>

    <Route path="/profile" element={<Profile/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/userss" element={<Users />}/>
    <Route path="/productdetails/:id" element={<ProductDetails/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="*" element={<h2>Page not found</h2>}/>
  </Routes>
   </div>
  
  )
}
export default App
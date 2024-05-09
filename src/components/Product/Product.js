import './Product.css';
import { useState } from 'react';
import PageNotFound from './PageNotFound';
import { Link } from 'react-router-dom';
import { ProductDetails } from './ProductDetails';
function Product(props){
    return(
        
        <div className="productsCard">
                <div className=""><img src={props.image} width={"100%"} height={180}/></div>
                <div className="Desc">
                    <h6 >{props.title}</h6><br></br>
                    <p style={{fontFamily:"serif"}}>{props.category}</p>
                    <p style={{fontFamily:"-moz-initial bold"}}>Rs. {props.price*83.50}/-</p>
                    
                    
                    <Link to={`/productdetails/${props.id}`}>
                    <button style={{marginLeft:"22px"}} className='btn btn-outline-primary' >Product Details</button>
                    </Link>  
                </div>
        </div>    
        
    )
}
export default Product;


// import React from "react";
// import "./Product.css";

// function Product({ title, image, category, price }) {
// // props={title:"",image:""}
//   return (
//     <div className="productsCard">
//       <img src={image} width={"100%"} height={200} />
//       <p>
//         <b>{title}</b>
//       </p>
//       <p>${price}</p>
//       <p>
//         <b>{category}</b>
//       </p>
//       <button className="btn btn-outline-success">Product Details</button>
//     </div>
//   );
// }

// export default Product;
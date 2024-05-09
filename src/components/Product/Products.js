import './Products.css';
import { useState,useEffect } from "react";
import Product from './Product.js';
import axios from 'axios';
function Products()
{
    let [product,setProduct]=useState([]);
    useEffect(()=>{
        getAllProducts();
    },[])

    const getAllProducts=()=>{
       
        axios.get("https://fakestoreapi.com/products")
        .then((productdata)=>{
             setProduct(productdata.data)
        })
        .catch((errordata)=>{
            console.log(errordata)
             alert("Error data")
        })
    }
    const getElectronics=()=>{
        axios.get("https://fakestoreapi.com/products/category/electronics")
        .then((electronicdata)=>{
             setProduct(electronicdata.data)
        })
        .catch((errordata)=>{
            console.log(errordata)
             alert("Error data")
        })
    }
    const getjewellery=()=>{
        axios.get("https://fakestoreapi.com/products/category/jewelery")
        .then((jewelerydata)=>{
             setProduct(jewelerydata.data)
        })
        .catch((errordata)=>{
            console.log(errordata)
             alert("Error data")
        })
    }
    const getwomenc=()=>{
        axios.get("https://fakestoreapi.com/products/category/women's clothing")
        .then((womencdata)=>{
             setProduct(womencdata.data)
        })
        .catch((errordata)=>{
            console.log(errordata)
             alert("Error data")
        })
    }
    const getmenc=()=>{
        axios.get("https://fakestoreapi.com/products/category/men's clothing")
        .then((mencdata)=>{
             setProduct(mencdata.data)
        })
        .catch((errordata)=>{
            console.log(errordata)
             alert("Error data")
        })
    }

    return(
        <div className="products" >
            <div className='radiosSection'>
            <div className='form-check form-check-inline'>
                <input onChange={getAllProducts} type="radio" name="product" className='form-check-input'/>
                <label className='form-check-label' for="product">ALL</label>
            </div>
            <div className='form-check form-check-inline'>
                <input onChange={getElectronics} type="radio" name="product" className='form-check-input'/>
                <label className='form-check-label'>Electronics</label>
            </div>
            <div className='form-check form-check-inline'>
                <input onChange={getmenc} type="radio"name="product" className='form-check-input'/>
                <label className='form-check-label'>Men's Clothing</label>
            </div>
            <div className='form-check form-check-inline'>
                <input onChange={getwomenc}  type="radio" name="product"className='form-check-input'/>
                <label className='form-check-label'>Women's Clothing</label>
            </div>
            <div className='form-check form-check-inline'>
                <input onChange={getjewellery} type="radio" name="product"className='form-check-input'/>
                <label className='form-check-label'>Jewellery</label>
            </div>  
            </div>
            <h2 style={{margin:"10px",color:"green"}}>Number of Products:{product.length}</h2>
            <div className='productsSection'>
                {
                    product.map(function(element,index){
                        return ( <Product
                            title={element.title} 
                            image={element.image} 
                            category={element.category} 
                            price={element.price}
                            id={element.id}
                            />
                            );
                    }
                    )

            }
            </div>
        </div>
    )
}
export default Products;




// // {/* <div className="productsCard" >
// //                     <img src={product[0].image} width={"100%"} height={200}/>
// //                     <p><b>{product[0].title}</b></p>
// //                     <p>${product[0].price}</p>
// //                     <button className='btn btn-outline-success'>Profile Details</button>
// //                 </div>
// //                 <div className="productsCard">
// //                     <img src={product[1].image} width={"100%"} height={200}/>
// //                     <p><b>{product[1].title}</b></p>
// //                     <p>${product[1].price}</p>
// //                     <button className='btn btn-outline-success'>Profile Details</button>
// //                 </div>
// //                 <div className="productsCard">
// //                     <img src={product[2].image} width={"100%"} height={200}/>
// //                     <p><b>{product[2].title}</b></p>
// //                     <p>${product[2].price}</p>
// //                     <button className='btn btn-outline-success'>Profile Details</button>
// //                 </div>
// //                 <div className="productsCard">
// //                     <img src={product[3].image} width={"100%"} height={200}/>
// //                     <p><b>{product[3].title}</b></p>
// //                     <p>${product[3].price}</p>
// //                     <button className='btn btn-outline-success'>Profile Details</button>
// //                 </div>
// //                 <div className="productsCard">
// //                     <img src={product[4].image} width={"100%"} height={200}/>
// //                     <p><b>{product[4].title}</b></p>
// //                     <p>${product[4].price}</p>
// //                     <button className='btn btn-outline-success'>Profile Details</button>
// //                 </div> */}
                
            
// //                 {/* <div className='productsSection'>
// //                 <Products image={product[5].image} title={product[5].title} price={product[5].price}/>
// //                     <Products title={product[6].title} image={product[6].image} price={product[6].price} />
// //                     <Products title={product[7].title} image={product[7].image} price={product[7].price}/>
// //                     <Products title={product[8].title}  image={product[8].image} price={product[8].price}/>
// //                     <Products title={product[9].title}  image={product[9].image} price={product[9].price}/>
// //                 </div>
// //                 <div className='productsSection'>
// //                 <Products image={product[10].image} title={product[10].title} price={product[10].price}/>
// //                     <Products title={product[11].title} image={product[11].image} price={product[11].price} />
// //                     <Products title={product[12].title} image={product[12].image} price={product[12].price}/>
// //                     <Products title={product[13].title}  image={product[13].image} price={product[13].price}/>
// //                     <Products title={product[14].title}  image={product[14].image} price={product[14].price}/>
// //                 </div>
// //                 <div className='productsSection'>
// //                 <Products image={product[15].image} title={product[15].title} price={product[15].price}/>
// //                     <Products title={product[16].title} image={product[16].image} price={product[16].price} />
// //                     <Products title={product[17].title} image={product[17].image} price={product[17].price}/>
// //                     <Products title={product[18].title}  image={product[18].image} price={product[18].price}/>
// //                     <Products title={product[19].title}  image={product[19].image} price={product[19].price}/>
// //                 </div> */}




// import { useState, useEffect } from "react";
// import "./Products.css";
// import Product from "./Product";
// import axios from "axios";

// function Products() {
//   let [products, setProducts] = useState([]);

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   const getAllProducts = () => {
//     //write the Logic to send request to server and get the data
//     // and update data in products state
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((productsdata) => {
//         // console.log(productsdata.data);
//         setProducts(productsdata.data);
//       })
//       .catch((errordata) => {
//         alert("Error While getting the Products Data");
//       });
//   };

//   const getElectronicsData = () => {
//     setProducts([]);
//     axios
//       .get("https://fakestoreapi.com/products/category/electronics")
//       .then((electronics) => {
//         // console.log(electronics.data);
//         setProducts(electronics.data);
//       })
//       .catch((errordata) => {
//         alert("Error while Electronic Data");
//       });
//   };

//   const getJeweleryData = () => {
//     axios
//       .get("https://fakestoreapi.com/products/category/jewelery")
//       .then((jewelery) => {
//         setProducts(jewelery.data);
//       })
//       .catch((errordata) => {
//         alert("Error while Electronic Data");
//       });
//   };
//   const getMenCData = () => {
//     axios
//       .get("https://fakestoreapi.com/products/category/men's clothing")
//       .then((mens) => {
//         setProducts(mens.data);
//       })
//       .catch((errordata) => {
//         alert("Error while mens clothing Data");
//       });
//   };
//   const getWomensCData = () => {
//     axios
//       .get("https://fakestoreapi.com/products/category/women's clothing")
//       .then((women) => {
//         setProducts(women.data);
//       })
//       .catch((errordata) => {
//         alert("Error while Womens Clothing Data");
//       });
//   };

//   return (
//     <div className="products">
//       <div className="radiosSection">
//         <div className="form-check form-check-inline">
//           <input
//             defaultChecked
//             onChange={getAllProducts}
//             name="category"
//             type="radio"
//             className="form-check-input"
//           />
//           <label class="form-check-label">ALL</label>
//         </div>
//         <div className="form-check form-check-inline">
//           <input
//             onChange={getElectronicsData}
//             name="category"
//             type="radio"
//             className="form-check-input"
//           />
//           <label class="form-check-label">Electronics</label>
//         </div>
//         <div className="form-check form-check-inline">
//           <input
//             onChange={getJeweleryData}
//             name="category"
//             type="radio"
//             className="form-check-input"
//           />
//           <label class="form-check-label">Jewelery</label>
//         </div>
//         <div className="form-check form-check-inline">
//           <input
//             onChange={getMenCData}
//             name="category"
//             type="radio"
//             className="form-check-input"
//           />
//           <label class="form-check-label">Men'sClothing</label>
//         </div>
//         <div className="form-check form-check-inline">
//           <input
//             onChange={getWomensCData}
//             name="category"
//             type="radio"
//             className="form-check-input"
//           />
//           <label class="form-check-label">Women'sClothing</label>
//         </div>
//       </div>
//       <div>
//         {products.length > 0 ? (
//           <div>
//             {" "}
//             <h4
//               style={{ textAlign: "center", color: "green", marginTop: "20px" }}
//             >
//               Number of Products: {products.length}
//             </h4>
//             <div className="productsSection">
//               {products.map(function (element, index) {
//                 return (
//                   <Product
//                     title={element.title}
//                     image={element.image}
//                     category={element.category}
//                     price={element.price}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         ) : (
//           <div>
//             <img
//               src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"
//               width={500}
//               height={500}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Products;
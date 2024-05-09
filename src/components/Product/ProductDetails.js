import React from "react"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import "./ProductDetails.css";
export function ProductDetails()
{
    let{id}=useParams();
    let[state,setState]=useState({
        id:null,
        title:null,
        description:null,
        category:null,
        image:"",
        rating:{rate:null,count:null}
    });


    useEffect(()=>{
        getProductData()},[])

    const getProductData= () =>
    {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((product)=>{
            setState(product.data)
    })

        .catch((error) =>
        {
            alert("Error While Loading the Page")
    })
    }

   return( 
   <div className="prod">
    <div className="img1">
        <img src={state.image} height="100%" width="380px"/>
    </div>
    <div className="contentContainer">
    <dl>
        <dt>Title</dt>
        <dd>{state.title}</dd>

        <dt>Description</dt>
        <dd>{state.description}</dd>

        <dt>Price</dt>
        <dd>Rs.{state.price*83.80}/-</dd>

        <dt>Category</dt>
        <dd>{state.category}</dd>

       

        <button className="kart btn btn-dark">Add to Kart</button>

        </dl>
        </div>
    
   </div>
   )
}
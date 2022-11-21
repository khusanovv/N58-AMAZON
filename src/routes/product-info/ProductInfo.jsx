import { useState, useEffect } from "react";
import axios from "axios";
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid';

import { useParams } from "react-router-dom"

const ProductInfo = () => {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState(null);
  const { productId } = useParams();
 

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8000/v2/allproducts/${productId}`)
      .then(response => {
        if(!response.data.message){
          setProductData(response.data);
        }
        else{
          setProductData(null)
        }
        setLoading(false);
      })
      .catch(err => console.log(err))
  }, [])

console.log(productData)
  return (
    <div>
      {
        productData ?
        <div>
          <img src={productData.image[0].url} alt="" />
          <h1>{productData.name}</h1>
          {
             productData.ratings % 1 === 0 ?
             new Array(productData?.ratings).fill("#").map(() => 
               <BsStarFill key={uuidv4()}/>
             ) : 
             <>
             { 
               new Array(Math.floor(productData?.ratings)).fill("#").map(() => 
                   <BsStarFill key={uuidv4()}/>
               )
             }
             <BsStarHalf/>
             </>
          }
        </div>
        :
        !loading ? <h1>Nothing found!</h1> : <p>Loading...</p>
      }
    </div>
  )
}

export default ProductInfo
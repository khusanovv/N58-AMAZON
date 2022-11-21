import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Seemore = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    axios.get("https://seal-app-42lge.ondigitalocean.app/category/category-reel")  
      .then(response => {
          setProducts(response)
      })
  }, [])

  console.log()
  return (
    <div>
      {/* {
        products.map(product => 
            <div>
                <img src={product?.image[0]?.url} alt="" />
                <h2>{product?.name}</h2>
            </div>
        )
      } */}
    </div>
  )
}

export default Seemore
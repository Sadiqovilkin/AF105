import React from 'react'
import data from './Data'

const Products = () => {

  return (
<>
<h1>Products</h1>


    { data.map((e)=>
        <li key={e.id}>{e.name}</li>
    )}
</>

    
  )
}

export default Products
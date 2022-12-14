import React from 'react'
import Product from "../components/product.js"

function ProductFeed({products}) {
  return (
    <div className='-mt-8 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-72 mx-auto'>
        
        {
            products.slice(0,4).map(({id, price,title, description,category,image}) => (
                <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))
        }
        <img className='md:col-span-full' src='https://links.papareact.com/dyz' alt=''/>
        <div className='md:col-span-2'>
        {
            products.slice(4,5).map(({id, price,title, description,category,image}) => (
                <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))
        }
        </div>
      
        {
            products.slice(5,products.length).map(({id, price,title, description,category,image}) => (
                <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))
        }
  
    </div>
  )
}

export default ProductFeed
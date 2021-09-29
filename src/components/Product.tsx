import React from 'react'

const ProductsList: React.FC = ({ products }) => (
  <ul className="list-none">
    {products &&
      products.map((product: any) => (
        <li key={products.description}>{product.description}</li>
      ))}
  </ul>
)

export const Products: React.FC = () => {
  const [products, setproducts] = React.useState(undefined)

  React.useEffect(() => {
    // Invoke the function by making a request.
    // Update the URL to match the format of your platform.
    fetch('/api/get-products')
      .then((res) => res.json())
      .then((json) => {
        //      if (typeof json.products === 'number') {
        setproducts(json.products)
        //    }
      })
  }, [])

  if (typeof products === 'undefined') {

    return null
  }

  console.log(products)

  return <ProductsList products={products} />
}

export default Products

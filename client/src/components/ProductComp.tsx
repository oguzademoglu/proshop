import { Link } from 'react-router-dom'
import { Product } from '../types/Product'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const ProductComp = ({ product }: { product: Product }) => {
  return (
    <Card className="my-3 p-3 rounded card">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating rating={product.rating} numReviews={product.numReviews} />
        </Card.Text>
        <Card.Text as="h5">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductComp

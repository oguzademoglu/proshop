import { useParams } from 'react-router-dom'
import { Col, Row, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { Product } from '../types/Product'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductScreen = () => {
  const initialProduct: Product = {
    _id: '0',
    name: '',
    image: '',
    price: 0,
    rating: 0,
    description: '',
    countInStock: 0,
    category: '',
    brand: '',
    numReviews: 0,
  }
  const [product, setProduct] = useState<Product>(initialProduct)
  const { id: productId } = useParams()
  useEffect(() => {
    const fetchProduct = async () => {
      const { data }: { data: Product } = await axios.get(
        `http://localhost:5000/api/products/${productId}`
      )
      setProduct(data)
    }
    fetchProduct()
  }, [productId])

  return (
    <>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3 className="mb-5">{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? (
                      <strong style={{ color: 'green' }}>In Stock</strong>
                    ) : (
                      <strong style={{ color: 'red' }}>Out of Stock</strong>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product!.countInStock <= 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen

import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Cart({props}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.url}   style={{height:'250px'}} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{props.age}</ListGroup.Item>
      <ListGroup.Item>{props.team}</ListGroup.Item>
      <ListGroup.Item>{props.jerseyNumber}</ListGroup.Item>
      <ListGroup.Item>{props.nationality}</ListGroup.Item>

    </ListGroup>
  </Card>
  )
}

export default Cart
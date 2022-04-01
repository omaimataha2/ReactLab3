import React from "react";
import { Card } from "react-bootstrap";



export default function CardPost(props) {
  let { Title, Body } = props;
  return (
    <Card
      className="col col-3 m-2"
      
    >
      <Card.Img variant="top" src={require('../images/img1.png')}   />
      <Card.Body>
        <Card.Title >
          {Title}
        </Card.Title>
        <Card.Text>
          {Body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

 



import React from 'react'
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

function Cource( {cource}) {
  return (
    <div>
    <Card>
      <CardBody>
        <CardTitle>{cource.name}</CardTitle>
        <CardSubtitle>{cource.titel}</CardSubtitle>
        <CardText>{cource.discription}</CardText>
       {/*  <Button color ="primary">Update</Button> &nbsp; &nbsp;
        <Button color ="danger">Delete</Button> */}
      </CardBody>
    </Card>
  </div>
  )
}

export default Cource
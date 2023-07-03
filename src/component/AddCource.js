import React, { Fragment } from "react";
import { useEffect } from "react";
import {
  Form,
  FormGroup,
  Input,
  Col,
  Label,
  Button,
  Container,
} from "reactstrap";

const AddCourse = () => {
    useEffect(() => {
        document.title = "AddCource";
      }); 
  return (
    <Fragment>
      <Form>
        <FormGroup>
          <Label for="userId" sm={2}>
            Course Id
          </Label>
          <Col sm={10}>
            <Input
              id="userId"
              name="userId"
              placeholder="Enter here"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="title" sm={2}>
            Course Title
          </Label>
          <Col sm={10}>
            <Input id="title" placeholder="Enter title here" type="text" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="description" sm={4}>
            Course Description
          </Label>
          <Col sm={10}>
            <Input
              id="description"
              placeholder="Enter description here"
              type="textarea"
              style={{ height: 130 }}
            />
          </Col>
          &nbsp;
          <Container>
            <Button color="success"> Add Course </Button>&nbsp;&nbsp;&nbsp;
            <Button color="warning"> Clear </Button>
          </Container>
        </FormGroup>
      </Form>
    </Fragment>
  );
};

export default AddCourse; 
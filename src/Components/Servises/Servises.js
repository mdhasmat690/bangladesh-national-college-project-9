import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router";

const Servises = () => {
  const { servis } = useParams();
  console.log(servis);
  return (
    <div className="bg-info p-3 container">
      <h2>Our Servises</h2>
      <Card className="w-50 mx-auto">
        <Card.Img
          className="w-50 mx-auto"
          variant="top"
          src="https://img.freepik.com/free-photo/kids-teacher-celebrating-teacher-s-day_23-2148668597.jpg?size=338&ext=jpg"
        />
        <Card.Body>
          <Card.Title>Our Details</Card.Title>
          <Card.Text>
            When you are searching for the best online school website template,
            you should not miss OnlineEdu. This bold, impactful and resourceful
            site canvas gets you going immediately. Even though this is an HTML
            template, it still helps you save time and cost. No need to start
            from the ground up anymore; instead, let OnlineEdu do the trick.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>College fee: 12000tk (permonth)</ListGroupItem>
          <ListGroupItem>Student : 01</ListGroupItem>
          <ListGroupItem>Section: Science,Arts,Bsc</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link to="#">Apply Online </Card.Link>
          <Card.Link to="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Servises;

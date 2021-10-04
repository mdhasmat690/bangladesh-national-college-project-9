import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './pages.css'
const Pages = (props) => {
  const { name,country,cartificate } = props.names;

  return (
    <div className="col-lg-6 g-5 w-50 my-5">
      <Card className="bg-info">
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Title> Our Campus {country} </Card.Title>
          <Card.Text>{cartificate}</Card.Text>
          <Link to={`/servises/`}>
            <button className="button-style">click More Detals</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Pages;

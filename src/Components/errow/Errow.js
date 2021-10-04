import React from "react";
import { Toast } from "react-bootstrap";

const Errow = () => {
  return (
    <div className="container my-5 bg-danger p-5">
      <Toast className="mx-auto">
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Opps!</strong>
          <small>1 mins ago</small>
        </Toast.Header>
        <Toast.Body>You Enter wrong path name.</Toast.Body>
      </Toast>
    </div>
  );
};

export default Errow;

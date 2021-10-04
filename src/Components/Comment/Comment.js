import React from "react";
import { Col } from "react-bootstrap";
import "./Comment.css";
const Comment = () => {
  return (
    <div className="bg-color container my-4">
      <div className="row">
        <Col className="col-sm-6 col-lg-4">
          <h2>achievemnet</h2>
          <p className="text-line">
            1.  Education Loan In Usa, Top Results From Trusted Resources. Search Education Loan In Usa, Get Expert Advice and Curated Content on Top10quest. Explore the Best Info Now. 100+ Unique Results. Find All Info You Want. Quick Answers. Useful & Relevant.
            2. Education Loan In Usa, Top Results From Trusted Resources. Search Education Loan In Usa, Get Expert Advice and Curated Content on Top10quest. Explore the Best Info Now. 100+ Unique Results.
          </p>
        </Col>
        <Col className="col-sm-6 col-lg-4">
          <div className="marign-ll">
            <h2>Please send your Mali</h2>
            <input type="text" placeholder="Your name" className="w-100 high" />
            <br />
            <br />
            <input
              type="text"
              placeholder="Your email"
              className="w-100 high"
            />
          </div>
        </Col>
        <Col className="col-sm-6 col-lg-4">
          <div>
            <h2>Send your commont</h2>
            <textarea
              name="messege"
              id=""
              cols="30"
              rows="7"
              placeholder="Your messege here"
            ></textarea>
            <button className="btn-style">Send</button>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Comment;

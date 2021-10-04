import React, { useEffect, useState } from "react";

import Pages from "../Pages/Pages";
import "./Home.css";
const Home = () => {
  const [name, setNmae] = useState([]);

  useEffect(() => {
    fetch("./Educaton.json")
      .then((res) => res.json())
      .then((data) => setNmae(data));
  }, []);
  return (
    <div className="background container">
      <h2>Bangladesh National college</h2>
      <div className="row">
        {name.map((names) => (
          <Pages key={names.id} names={names}></Pages>
        ))}
      </div>
    </div>
  );
};

export default Home;

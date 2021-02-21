import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../footer";
import Header from "../header";
import Peoples from "../../pages/peoples";
import People from "../../pages/people";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";

function Hoc() {
  const [pageSize] = useState(4);
  const [peoples, setPeoples] = useState([]);
  const [totalNumPages, setTotalNumPages] = useState(0);

  useEffect(() => {
    if (peoples.length <= 0) getPeoples();
    else dividePages();
  });

  const getPeoples = () => {
    let Array = [];
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        for (let i = 0; i < 10; i++) {
          res.data.results[i].id = i + 1;
          Array.push(res.data.results[i]);
        }
        setPeoples(Array);
      })
      .catch((err) => console.log(err));
  };

  const dividePages = () => {
    //calculate number of pages, peoples.length/ (page size that is 4)
    setTotalNumPages(Math.ceil(peoples.length / pageSize));
  };

  return (
    <div>
      <Header />
      <Redirect exact from="/" to="/peoples/1" />
      <Route
        exact
        path="/peoples/:id"
        component={(props) => (
          <Peoples
            totalNumPages={totalNumPages}
            peoples={peoples}
            pageSize={pageSize}
            {...props}
          />
        )}
      />
      <Route
        component={(props) => <People peoples={peoples} {...props} />}
        path="/people/:id"
        exact
      />
      <Footer />
    </div>
  );
}

export default Hoc;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../footer";
import Header from "../header";
import CreateRoutes from '../../routers';

function Hoc(props) {
  const [pageSize] = useState(4);
  const [peoples, setPeoples] = useState([]);
  const [totalNumPages, setTotalNumPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (peoples.length <= 0) getPeoples();
    else dividePages();
  });

  const getPeoples = async () => {
      setLoading(true);
      let array = [];
      await axios.get("https://swapi.dev/api/people/")
          .then((response) => {
              for (let i = 0; i < 10; i++) {
                  response.data.results[i].id = i + 1;
                  array.push(response.data.results[i])
              }
              setPeoples(array);
              setLoading(false);
          })
          .catch((error) => console.log(error))
  }

  // calculating number of pages, peoples.length/(page size that is 4)
  const dividePages = () => {
    setTotalNumPages(Math.ceil(peoples.length / pageSize));
  };

  return (
    <div>
      <Header />
      <CreateRoutes totalNumPages={totalNumPages} peoples={peoples} pageSize={pageSize} loading={loading}/>
      <Footer />
    </div>
  );
}

export default Hoc;

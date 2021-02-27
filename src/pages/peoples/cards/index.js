import React from "react";
import { Link } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";

const Cards = ({ peoples, loading }) => {
  
  if (loading) {
    return (
      <div className="Loader">
        <Dimmer active inverted>
          <Loader size="large">Loading...</Loader>
        </Dimmer>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        {peoples.map((people, index) => (
          <div
            key={index}
            className="card col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 rounded"
          >
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372"
              className="card-img-top rounded"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">{people.name}</h4>
              <p className="card-text">
                <b>Gender:</b> {people.gender}
              </p>
              <p className="card-text">
                <b>Birth Year:</b> {people.birth_year}
              </p>
              <Link to={`/people/${people.id}`} className="btn btn-block btn-secondary">View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

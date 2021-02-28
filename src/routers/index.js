import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect } from "react-router";
import People from "../pages/people";
import Peoples from "../pages/peoples";
import Times from "../pages/tasks";
const CreateRoutes = ({ peoples, totalNumPages, pageSize, loading }) => {
  return (
    <>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/peoples/1" />;
        }}
      />
      <Route
        path="/peoples/:id"
        component={(props) => (
          <Peoples
            totalNumPages={totalNumPages}
            peoples={peoples}
            loading={loading}
            pageSize={pageSize}
            {...props}
          />
        )}
      />

      <Route
        component={(props) => <People peoples={peoples} {...props} />}
        path="/people/:id"
      />
      <Route path="/times" component={Times} />
    </>
  );
};

export default CreateRoutes;

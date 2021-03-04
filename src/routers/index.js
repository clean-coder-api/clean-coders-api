import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import People from "../pages/people";
import Peoples from "../pages/peoples";
import Times from "../pages/tasks";
import Tags from "../pages/tags";
import PropTypes from 'proptypes';
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
      <Route path="/tags" component={Tags} />
    </>
  );
};
CreateRoutes.propTypes = {
  totalNumPages:PropTypes.number,
  id:PropTypes.number,
  match:PropTypes.any,
  loading:PropTypes.bool,
  pageSize:PropTypes.number,
  pageId:PropTypes.number,
  peoples:PropTypes.array
}

export default CreateRoutes;

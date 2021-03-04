import React from "react";
import moment from "jalali-moment";
import PropTypes from "proptypes";
const HeaderTime = ({ time }) => {
  return <div>{moment(time).format("HH:mm:ss")}</div>;
};

HeaderTime.propTypes = {
  time: PropTypes.string,
};
export default HeaderTime;

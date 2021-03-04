import React, { Component } from "react";
import moment from "jalali-moment";
import PropTypes from "proptypes";
class TimePicker extends Component {
  state = {
    time: null,
  };
  handleClick = () => {
    if (this.props.onChange) this.props.onChange(Date.now());
    this.setState({ time: Date.now() });
  };
  render() {
    return (
      <span className="time-picker">
        {this.state.time
          ? moment(this.state.time).format("HH:mm:ss")
          : this.props.placeholder}
        <button onClick={this.handleClick}>O</button>
      </span>
    );
  }
}

TimePicker.propTypes = {
  onChange: PropTypes.any,
  onClick: PropTypes.any,
  placeholder: PropTypes.string,
};
export default TimePicker;

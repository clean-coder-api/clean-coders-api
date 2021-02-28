import React, { Component } from "react";
import Main from "./main";
import Footer from "./footer";

class Wrapper extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.addEmptyRow();
  }

  addRowToData = (row) => {
    this.setState({ data: [...this.state.data, row] });
  };

  addEmptyRow = () => {
    this.setState({
      data: [
        ...this.state.data,
        { description: "", startDate: "", endDate: "", isSubmited: false },
      ],
    });
  };

  editRow = (index, row) => {
    this.setState({
      data: this.state.data.map((D, i) => (index === i ? row : D)),
    });
    if (
      row.description.length > 3 &&
      row.startDate !== "" &&
      row.endDate !== "" &&
      row.endDate > row.startDate
    ) {
      this.setState(
        {
          data: this.state.data.map((D, i) => {
            if (index === i) return { ...row, isSubmited: true };
            else return D;
          }),
        },
        () => {
          if (!this.state.data.find((row) => !row.isSubmited))
            this.addEmptyRow();
        }
      );
    }
  };

  render() {
    return (
      <>
        <Main
          editRow={this.editRow}
          addEmptyRow={this.addEmptyRow}
          data={this.state.data}
        />
        <Footer data={this.state.data}/>
      </>
    );
  }
}

export default Wrapper;

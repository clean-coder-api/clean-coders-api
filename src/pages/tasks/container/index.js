import React, { Component } from "react";
import Main from "./main";
import Footer from "./footer";
import PropTypes from 'proptypes';


class Wrapper extends Component {
  
  
  
  state = {
    data: [],
  };

  componentDidMount() {
    this.addEmptyRow();
  }

  addRowToData = (row) => {
    this.setState({ data: [...this.state.data, row] });
    // console.log(this.state.data);
  };

  addEmptyRow = () => {
    this.setState({
      data: [
        ...this.state.data,
        {
          description: "",
          optionValue: "",
          startDate: "",
          endDate: "",
          isSubmited: false,
        },
      ],
    });
  };
  deleteItem =(id)=>{
    const payload = [...this.state.data];
    payload.splice(id,1);
    // console.log(payload);
    this.setState({data:payload})
  }
  editRow = (index, row) => {
    this.setState({
      data: this.state.data.map((D, i) => (index === i ? row : D)),
    });
    if (
      row.description.length > 3 &&
      row.optionValue !== ""&&
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
          deleteItem={this.deleteItem}
        />
        <Footer data={this.state.data} />
      </>
    );
  }
}

Wrapper.propTypes = {
  row:PropTypes.object
}
export default Wrapper;

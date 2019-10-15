import React, { Component } from "react";
import axios from "axios";
import Spinner from "../SpinnerV3/Spinner";

// const getState = state => {};
const API_URL = "https://aws-rekognition-api.herokuapp.com/s3/getImageByKey";
const JWT_Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDlmNTE2NDAzZDUxZjAwMTdlNWJmZDUiLCJpYXQiOjE1NzA3MjIxNDh9.HVCQmVCHIL_EzAeskRI_V8v7Z1CJ4t8gPtSY6IWPwxc";
const headers = {
  "Content-Type": "application/json",
  Authorization: JWT_Token
};
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      Images: []
    };
  }
  fetchImages = () => {
    const data = {
      FaceMatches: this.props.FaceMatches
    };

    axios
      .post(API_URL, data, {
        headers
      })
      .then(response => {
        console.log(response.data.data);
        this.setState({
          isLoading: false,
          Images: response.data.data
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };
  componentDidMount() {
    // console.log(this.props.FaceMatches);
    this.setState({ isLoading: true });
    this.fetchImages();
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? <Spinner /> : null}
        <ul>
          {this.state.Images.map((image, i) => (
            <li key={i}>
              <img
                style={{ width: "100px" }}
                src={"data:image/png;base64," + image.Body}
                alt="hola"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Gallery;

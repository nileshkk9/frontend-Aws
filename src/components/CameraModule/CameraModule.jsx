import React, { Component } from "react";
import Camera from "react-html5-camera-photo";
import axios from "axios";
import Spinner from "../SpinnerV3/Spinner";
import "react-html5-camera-photo/build/css/index.css";
const API_URL =
  "https://aws-rekognition-api.herokuapp.com/rekog/searchFacesByImage";

const JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDlmNTE2NDAzZDUxZjAwMTdlNWJmZDUiLCJpYXQiOjE1NzA3MjIxNDh9.HVCQmVCHIL_EzAeskRI_V8v7Z1CJ4t8gPtSY6IWPwxc";
const headers = {
  "Content-Type": "application/json",
  Authorization: JWT_TOKEN
};

class CameraModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.onTakePhoto = this.onTakePhoto.bind(this);
  }
  onTakePhoto(dataUri) {
    this.setState({ isLoading: true });
    const data = {
      file: dataUri
    };
    console.log(data);
    axios
      .post(API_URL, data, {
        headers: headers
      })
      .then(response => {
        console.log(response);
        this.setState({
          isLoading: false,
          ImageUrl: response.data.ImageUrl
        });
        // console.log(this.state.FaceMatches);
        this.props.myfunc(this.state.ImageUrl);
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }
  render() {
    return (
      <div>
        <div className="App">
          <Camera
            onTakePhoto={dataUri => {
              this.onTakePhoto(dataUri);
            }}
          />
          <div>{this.state.isLoading ? <Spinner /> : null}</div>
        </div>
      </div>
    );
  }
}

export default CameraModule;

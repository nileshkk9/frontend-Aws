import React, { Component } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../SpinnerV3/Spinner";

const API_URL = "https://aws-rekognition-api.herokuapp.com/s3/uploadBuffer";
const JWT_Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDlmNTE2NDAzZDUxZjAwMTdlNWJmZDUiLCJpYXQiOjE1NzA3MjIxNDh9.HVCQmVCHIL_EzAeskRI_V8v7Z1CJ4t8gPtSY6IWPwxc";
const headers = {
  "Content-Type": "application/json",
  Authorization: JWT_Token
};
class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      toRender: ""
    };
  }

  fetch = base64 => {
    this.setState({ isLoading: true });
    const data = {
      file: base64
    };
    axios
      .post(API_URL, data, { headers })
      .then(res => {
        console.log(res);
        this.setState({ isLoading: false, toRender: "Uploaded" });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };

  handleChange = e => {
    const file = e.target.files[0];
    console.log(file);
    this.getBase64(file).then(base64 => {
      // localStorage["fileBase64"] = base64;
      this.fetch(base64);
    });
  };

  // function to capture base64 format of an image
  // getBaseFile = files => {
  //   // create a local readable base64 instance of an image
  //   this.setState({
  //     baseImage: files.base64
  //   });

  //   let imageObj = {
  //     imageName: "base-image-" + Date.now(),
  //     imageData: files.base64.toString()
  //   };

  //   axios
  //     .post(`${API_URL}/image/uploadbase`, imageObj)
  //     .then(data => {
  //       if (data.data.success) {
  //         alert("Image has been successfully uploaded using base64 format");
  //         this.setDefaultImage("base");
  //       }
  //     })
  //     .catch(err => {
  //       alert("Error while uploading image using base64 format");
  //       this.setDefaultImage("base");
  //     });
  // };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange}></input>
        {this.state.isLoading ? <Spinner /> : null}
        <h3>{this.state.toRender !== "" ? "Uploaded" : null}</h3>
      </div>
    );
  }
}

export default UploadImage;

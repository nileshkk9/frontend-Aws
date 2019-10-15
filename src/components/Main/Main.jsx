import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Camera from "@material-ui/icons/Camera";
import AddAPhoto from "@material-ui/icons/AddAPhoto";
import CameraModule from "../CameraModule/CameraModule";
import UploadImage from "../UploadImage/UploadImage";
import Gallery from "../Gallery/Gallery";
// import Spinner from "../SpinnerV3/Spinner";

// const getState = state => {};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  getState = state => {
    if (state) {
      this.setState({
        value: 2,
        FaceMatches: state
      });
      console.log(this.state.FaceMatches);
    }
  };
  handleChange = (e, newVal) => {
    this.setState({
      value: newVal
    });
    // console.log(e);
  };
  render() {
    return (
      <div>
        {this.state.value === 0 ? (
          <div style={{ height: "85vh" }}>
            <CameraModule myfunc={this.getState} />
          </div>
        ) : this.state.value === 1 ? (
          <div style={{ height: "85vh" }}>
            <UploadImage />
          </div>
        ) : (
          <div style={{ height: "85vh" }}>
            <Gallery FaceMatches={this.state.FaceMatches} />
          </div>
        )}

        <BottomNavigation
          value={this.state.value}
          onChange={this.handleChange}
          showLabels
        >
          <BottomNavigationAction label="Camera" icon={<Camera />} />
          <BottomNavigationAction label="Add Photo" icon={<AddAPhoto />} />
          <BottomNavigationAction label="Gallery" icon={<AddAPhoto />} />
        </BottomNavigation>
      </div>
    );
  }
}

export default Main;

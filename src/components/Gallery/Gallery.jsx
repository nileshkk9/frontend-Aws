import React, { Component } from "react";
// import axios from "axios";
// import Gallery from "react-photo-gallery";
import ModalImage from "react-modal-image";
import Spinner from "../SpinnerV3/Spinner";
import "./style.css";

class MyGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      photos: []
    };
  }
  // async componentDidMount() {
  //   const photos = await this.constructGalleryArray(this.props.ImageUrl);
  //   this.setState({ photos });
  // }
  // constructGalleryArray = ImageUrl => {
  //   const arr = [];
  //   ImageUrl.forEach(image => {
  //     arr.push({
  //       src: image,
  //       width: 2,
  //       height: 1
  //     });
  //   });
  //   return arr;
  // };
  render() {
    return (
      <div style={style.divStyle}>
        {this.state.isLoading ? <Spinner /> : null}
        {this.props.ImageUrl ? (
          this.props.ImageUrl.map((img, i) => (
            // <img src={img} height="200px" style={style.imageStyle} />
            <ModalImage
              small={img}
              large={img}
              hideZoom={true}
              key={i}
              className="imageStyle"
            />
          ))
        ) : (
          <h1>No Image Present</h1>
        )}
      </div>
    );
  }
}

const style = {
  divStyle: {
    display: "flex",
    flexWrap: "wrap"
  }
  // imageStyle: {
  //   // margin: "4px",
  //   // border: "1px solid #ddd",
  //   // borderRadius: "4px",
  //   // padding: "5px",
  //   height: "1500px"
  // }
};
export default MyGallery;

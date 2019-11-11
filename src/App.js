import React, { Component } from "react";
import Main from "./components/Main/Main";
import MyGallery from "./components/Gallery/Gallery";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Main />
        {/* <MyGallery ImageUrl={ImageUrl} /> */}
      </div>
    );
  }
}
// const ImageUrl = [
//   "https://nileshkk9.s3.amazonaws.com/410b8a70-efe7-11e9-9efd-fb1442e3374a.jpg",
//   "https://nileshkk9.s3.amazonaws.com/dbf26360-ec13-11e9-b4a2-b77759b03076.jpg",
//   "https://nileshkk9.s3.amazonaws.com/8d451580-0493-11ea-af90-7b30cca89374.jpg",
//   "https://nileshkk9.s3.amazonaws.com/87294bd0-ecbf-11e9-9ffe-87f3b047f757.jpg",
//   "https://nileshkk9.s3.amazonaws.com/5b6db660-ecc5-11e9-87eb-b578f1fe6df2.jpg",
//   "https://nileshkk9.s3.amazonaws.com/7f78dad0-ecc5-11e9-87eb-b578f1fe6df2.jpg",
//   "https://nileshkk9.s3.amazonaws.com/53b4ea90-ec13-11e9-b4a2-b77759b03076.jpg",
//   "https://nileshkk9.s3.amazonaws.com/cb795a60-ecbe-11e9-9ffe-87f3b047f757.jpg",
//   "https://nileshkk9.s3.amazonaws.com/f3c8d700-f026-11e9-9972-ed2f7f547f00.JPG",
//   "https://nileshkk9.s3.amazonaws.com/1573195738820.jpg"
// ];
export default App;

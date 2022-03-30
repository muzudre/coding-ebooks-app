import React, { Component } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import PDFViewer from "pdf-viewer-reactjs";

class Reader extends Component {
  state = {
    currentPage: 1,
  };

  componentDidMount() {
    console.log(this.props.location.name);
  }

  render() {
    console.log("props", this.props);
    return (
      <PDFViewer
        navbarOnTop
        document={{
          url: `https://cors-anywhere.herokuapp.com/${this.props.location.pdf}`,
        }}
        page={this.state.currentPage}
        scale={2}
        scaleStep={0.5}
        maxScale={5}
        minScale={0.5}
        // showThumbnail={{ scale: 3 }}
        loader={<Spinner />}
        navigation={{
          css: {
            navbarWrapper: "bg-black p-2 mt-2 rounded-md",
          },
        }}
      />
    );
  }
}

export default Reader;

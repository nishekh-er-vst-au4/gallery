import React from "react";
import { connect } from "react-redux";
import {
  setImageName,
  setImageDescription,
  setImage,
  setImageList,
} from "../redux/actions/image-action";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spansRow = Math.ceil(height / 10);
    this.setState({ spans: spansRow });
  };
  imageclick = () => {
    const imageName = String(window.prompt("type a Image Name"));
    const imageDescription = String(window.prompt("type Image Description"));

    if (!imageName || !imageDescription) {
      window.alert("You should enter  both inputs");
    } else {
      //dispatching name description and image to redux state management
      this.props.dispatch(setImageName(imageName));
      this.props.dispatch(setImageDescription(imageDescription));
      this.props.dispatch(setImage(this.props.image.urls.regular));
      this.props.dispatch(setImageList());
    }
  };
  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          className="shadow-sm p-3 mb-5 bg-white rounded"
          ref={this.imageRef}
          src={this.props.image.urls.regular}
          alt={this.props.image.alt_description}
          onClick={this.imageclick}
        />
      </div>
    );
  }
}

export default connect(null)(ImageCard);

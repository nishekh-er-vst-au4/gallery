import React from "react";
import { connect } from "react-redux";
import "./tab2.css";

class Tab2 extends React.Component {
  render() {
    const image = this.props.image;
    return (
      <div className="ml-1 mr-1">
        <div className="image">
          {image &&
            image.map((imgs, idx) => (
              <div key={idx}>
                <img
                  src={imgs.url}
                  alt={imgs.name}
                  className="shadow-sm p-3 mb-1 bg-white rounded"
                />
                <h6> Name : {imgs.name}</h6>

                <h6>Description : {imgs.description} </h6>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    image: state.image.imageList,
  };
};
export default connect(mapStateToProps)(Tab2);

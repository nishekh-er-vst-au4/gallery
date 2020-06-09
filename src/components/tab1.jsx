import React from "react";
import axios from "axios";
import ImageList from "./imagelist";

class Tab1 extends React.Component {
  state = { images: [] };
  componentDidMount() {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: "bikes" },
        headers: {
          Authorization:
            "Client-ID dWSoTUV88M8E2lV47xPo7bprpZ5vQ6ewzPr0TyzG9RQ",
        },
      })
      .then((response) => {
        this.setState({ images: response.data.results });
      });
  }
  render() {
    return (
      <div className="mt-5">
        <ImageList foundImages={this.state.images} />
      </div>
    );
  }
}

export default Tab1;

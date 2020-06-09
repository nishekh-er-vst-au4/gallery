import React from "react";
import "./imagelist.css";
import ImageCard from "./card";

const ImageList = (props) => {
  const images = props.foundImages.map((img) => {
    return <ImageCard key={img.id} image={img} />;
  });

  return <div className="image-list ">{images}</div>;
};

export default ImageList;

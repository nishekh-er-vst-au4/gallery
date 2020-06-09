import {
  IMAGE_NAME,
  IMAGE_DESCRIPTION,
  IMAGE,
  IMAGE_LIST,
} from "../actions/action-types";

const initialState = {
  image: { name: "", description: "", url: "" },
  imageList: [],
};

const imageReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case IMAGE_NAME:
      stateCopy.image.name = action.payload;
      return stateCopy;
    case IMAGE_DESCRIPTION:
      stateCopy.image.description = action.payload;
      return stateCopy;
    case IMAGE:
      stateCopy.image.url = action.payload;
      return stateCopy;
    case IMAGE_LIST:
      stateCopy.imageList = [...stateCopy.imageList, stateCopy.image];
      return stateCopy;
    default:
      return state;
  }
};

export default imageReducer;

import {
  IMAGE_NAME,
  IMAGE_DESCRIPTION,
  IMAGE,
  IMAGE_LIST,
} from "./action-types";

export const setImageName = (name) => ({
  type: IMAGE_NAME,
  payload: name,
});

export const setImageDescription = (description) => ({
  type: IMAGE_DESCRIPTION,
  payload: description,
});

export const setImage = (image) => ({
  type: IMAGE,
  payload: image,
});

export const setImageList = (image) => ({
  type: IMAGE_LIST,
});

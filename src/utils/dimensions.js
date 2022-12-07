import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const heightPercentage = (value) => {
  return (windowHeight / 100) * value;
}
const widthPercentage = (value) => {
  return (windowWidth / 100) * value;
};

const dropShadow = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3,
  };

export {
    windowHeight,
    windowWidth,
    heightPercentage,
    widthPercentage,
    dropShadow,
  };
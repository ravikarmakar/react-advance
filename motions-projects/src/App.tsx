/* eslint-disable react-refresh/only-export-components */
// Variants imports---------------------
// import FadeInComponent from "./components/variants/FadeInComponents";
// import SlidingMenu from "./components/variants/SlidingMenu";
// import Tooltip from "./components/variants/Tooltip";
// import DynamicList from "./components/variants/DynamicList";
// import ToggleSwitch from "./components/variants/ToggleSwitch";

// Gestures imports----------------------
// import SwipeableCard from "./components/gestures/SwipeableCard";
// import DraggableBox from "./components/gestures/DraggableBox";
// import RotateOnDrag from "./components/gestures/RotateOnDrag";
// import TapToChangeColor from "./components/gestures/TapToChangeColor";
// import LongPressToChangeSize from "./components/gestures/LongPressToChangeSize";
import GestureBasedImageGallery from "./components/gestures/GestureBasedImageGallery";

const App = () => {
  return (
    <div style={defaultStyle}>
      {/* Variants */}
      {/* <FadeInComponent /> */}
      {/* <SlidingMenu /> */}
      {/* <Tooltip /> */}
      {/* <ToggleSwitch /> */}
      {/* <DynamicList /> */}

      {/* Gestures */}
      {/* <SwipeableCard /> */}
      {/* <DraggableBox /> */}
      {/* <RotateOnDrag /> */}
      {/* <TapToChangeColor /> */}
      {/* <LongPressToChangeSize /> */}
      <GestureBasedImageGallery />
    </div>
  );
};

export default App;

export const defaultStyle = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#0d1017",
  color: "white",
};

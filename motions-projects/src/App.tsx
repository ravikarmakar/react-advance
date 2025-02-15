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
// import GestureBasedImageGallery from "./components/gestures/GestureBasedImageGallery";

// Stagger Animation imports-------------
// import StaggeredList from "./components/staggered/StaggeredList";
// import StaggeredImageGallery from "./components/staggered/StaggeredImageGallery";
// import StaggeredButtonPress from "./components/staggered/StaggeredButtonPress";
// import StaggeredGridLayout from "./components/staggered/StaggeredGridLayout";
// import StaggeredTextReveal from "./components/staggered/StaggeredTextReveal";

// useMotion Animation imports-------------
// import DraggableBox from "./components/useMotion/DraggableBox";
// import HoverLinkedScale from "./components/useMotion/HoverLinkedScale";
// import SpringAnimatedPosition from "./components/useMotion/SpringAnimatedPosition";
// import DynamicRotation from "./components/useMotion/DynamicRotation";

// WhileInView imports------------------
// import StaggeredList from "./components/whileInView/StaggeredList";
// import CardFlip from "./components/whileInView/CardFlip";
// import TimelineAnimation from "./components/whileInView/TimelineAnimation";
// import InteractiveCards from "./components/whileInView/InteractiveCards";

const App = () => {
  return (
    <>
      {/* use this div for whileInView Components rendring */}
      <div className="h-screen bg-[#0d1017]"></div>
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
        {/* <GestureBasedImageGallery /> */}

        {/* Stagger Animation */}
        {/* <StaggeredList /> */}
        {/* <StaggeredImageGallery /> */}
        {/* <StaggeredButtonPress /> */}
        {/* <StaggeredGridLayout /> */}
        {/* <StaggeredTextReveal /> */}

        {/* useMotion Hook & useSpring */}
        {/* <DraggableBox /> */}
        {/* <HoverLinkedScale /> */}
        {/* <SpringAnimatedPosition /> */}
        {/* <DynamicRotation /> */}

        {/* WhileInView */}
        {/* <StaggeredList /> */}
        {/* <CardFlip /> */}
        {/* <TimelineAnimation /> */}
        {/* <InteractiveCards /> */}
      </div>
    </>
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

/* eslint-disable react-refresh/only-export-components */
// import { motion } from "framer-motion";
// import RangeSlider from "./framer-hooks/RangeSlider";

// import WaveEffect from "./keyframes/BoxEffect";

// import SlidingText from "./keyframes/SlidingText";
// import ZigzagAnimation from "./keyframes/ZigzagAnimation";

// import ColorChangeSquare from "./keyframes/SquareColorChnage";

// import PulsatingButton from "./keyframes/PulsatingButton";

// import Accordion from "./project-components/Accordon";
// import BouncingBall from "./keyframes/BouncingBall";
// import ToastNotification from "./project-components/ToastNotification";
// import Sidebar from "./project-components/Sidebar";

// import DraggAbleBox from "./framer-hooks/DraggAbleBox";
// import AnimationScroll from "./framer-hooks/AnimationScroll";
// import ScrollAnimatin from "./framer-hooks/ScrollAnimatin";

// // import BauncingLoader from "./components/BauncingLoader";
// // import PulsingButton from "./components/PulsingButton";

// import AnimatedGallery from "./components/AnimatedGallery";
// // import StaggerAnimation from "./components/StaggerAnimation";

// // import AnimatedShape from "./components/AnimatedShape";
// // import ImageGallery from "./components/ImageGallery";

// // import AnimatedCard from "./components/AnimatedCard";
// // import Gestures from "./components/Gestures";

// // import FlipingCard from "./components/FlipingCard";
// // import Variant from "./components/Variant";

// const App = () => {
//   return (
//     <div className="h-screen flex justify-center items-center bg-gray-900 text-white gap-5">
//       {/* <PulsingButton /> */}
//       {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
//       {/* <BauncingLoader /> */}
//       {/* <Variant /> */}
//       {/* <FlipingCard /> */}
//       {/* <Gestures /> */}
//       {/* <AnimatedCard /> */}
//       {/* <ImageGallery /> */}
//       {/* <AnimatedShape /> */}
//       {/* <StaggerAnimation /> */}
//       {/* <AnimatedGallery /> */}
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   return (
//     <div style={defaultStyle}>
//       {/* <RangeSlider /> */}

//       {/* <DraggAbleBox /> */}

//       {/* <ScrollAnimatin /> */}

//       <AnimationScroll />

//       <div className="h-[400vh] tetx-black">
//         <p className="text-black">scroll now</p>
//       </div>
//     </div>
//   );
// };

// export default App;

export const defaultStyle = {
  display: "flex",
  // height: "min-hight",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  color: "white",
};

// export const boxStyle = {
//   height: "200px",
//   width: "200px",
//   backgroundColor: "yellow",
//   borderRadius: "50%",
// };

//  Projects here

const App = () => {
  return (
    <div style={defaultStyle}>
      {/* <Sidebar /> */}
      {/* <Accordion /> */}
      {/* <ToastNotification /> */}

      {/* KeyFrames */}

      {/* <BouncingBall /> */}
      {/* <PulsatingButton /> */}
      {/* <ColorChangeSquare /> */}
      {/* <SlidingText /> */}
      {/* <ZigzagAnimation /> */}
      {/* <WaveEffect /> */}
    </div>
  );
};

export default App;

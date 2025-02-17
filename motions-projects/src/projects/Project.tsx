//  This is Home component for all projects here we display our project components.
//  Project.tsx act like a App.tsx

// ALL PROJECTS IMPORTS-------------------
// import ScrollIndicator from "./scroll -indicator/ScrollIndicator";
// import Loader from "./loader/Loader";
// import DraggableCard from "./draggableCard/DraggableCard";
// import Carousel from "./carousel/Carousel";
// import Sidebar from "./sidebar/Sidebar";
// import ScrollCarousel from "../components/scrollCarousel/ScrollCarousel";
// import StickyNavbar from "../components/stickyNavbar/StickyNavbar";
import ProgressSteps from "../components/progressSteps/ProgressSteps";

const Project = () => {
  return (
    <div className="bg-black text-white" style={componentStyle}>
      {/* <ScrollIndicator /> */}

      {/* <Loader /> */}

      {/* <DraggableCard /> */}

      {/* <Carousel /> */}

      {/* <Sidebar /> */}

      {/* <ScrollCarousel /> */}

      {/* <StickyNavbar /> */}

      <ProgressSteps />
    </div>
  );
};

export default Project;

// add this style for all these components
// Carousel
// Sidebar
//ProgressSteps

const componentStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

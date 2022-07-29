import React from 'react';
import ImageSlider from "./components/imgslider";
import Introduce from "./components/introduce";
import Carousallayout from "./components/carouselbar";
import HowItWorks from "./components/worksmanagement";
function App() {
  return (
    <div>
        <ImageSlider />
        <Introduce />
        <Carousallayout />
        <HowItWorks />
    </div>
  );
}

export default App;

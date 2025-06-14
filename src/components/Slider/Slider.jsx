import React, { useEffect, useState } from "react";
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";
import "./Slider.css";
import sliderData from "../../assets/data/sliderData";
export default function slider() {
  const [sliderIndex, setSliderIndex] = useState(1);

  function toogleImage(indexPayLoad) {
    // let newState;
    // if (indexPayLoad + sliderIndex > sliderData.length) {
    //   newState = 1;
    // } else if (indexPayLoad + sliderIndex < 1) {
    //   newState = sliderData.length;
    // } else {
    //   newState = sliderIndex + indexPayLoad;
    // }
    // setSliderIndex(newState);
    setSliderIndex(state =>{
      if(indexPayLoad + state > sliderData.length){
        return 1;
      }
      else if(indexPayLoad + state < 1){
        return sliderData.length;
      }
      else{
        return state + indexPayLoad;
      }
    })
  }
  useEffect(() => {
    const intervalID = setInterval(() => toogleImage(1), 2000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <>
      <p className="index-info">
        {" "}
        {sliderIndex} / {sliderData.length}
      </p>
      <div className="slider">
        <p className="image-info">
          {sliderData.find((obj) => obj.id === sliderIndex).description}
        </p>
        <img
          src={`/images/img-${sliderIndex}.jpg`}
          alt="estate's rooms"
          className="slider-img"
        />
        <button
          onClick={() => toogleImage(-1)}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="previous image" />
        </button>
        <button
          onClick={() => toogleImage(1)}
          className="navigation-button next-button"
        >
          <img src={rightChevron} alt="next image" />
        </button>
      </div>
    </>
  );
}

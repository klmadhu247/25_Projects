import React, { useState } from "react";
import './imageSlider.css';
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from "react-icons/bs";
function ImageSlider({ data }) {
  console.log(data); 

  const[slide,setSlide] = useState(0);

  const nextSLide =()=>
  {

    if (slide === data.slides.length - 1) {
        setSlide(0); 
      } 
      else {
        setSlide(slide + 1);  
      }
  }
  const previousSLide =()=>
  {
    if(slide=== 0)
    {
        setSlide(data.slides.length - 1);  
    }
    else{
        setSlide(slide-1)

    }
   

  }
  
  
  return (
    <div className="carousel" style={{margin:'100px'}}>
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={previousSLide}/>
     
      {data.slides.map((item, index) => (
        <img key={index} src={item.src} alt={item.alt} className={slide===index? 'slide':'slide slide-hidden'} />
      ))}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSLide}/>
      <span className="indicators">{data.slides.map((_,index)=><button className={slide===index? 'indicator': 'indicator indicator-inactive'} key={index} onClick={null}></button>)}</span>
    </div>
  );
}

export default ImageSlider;

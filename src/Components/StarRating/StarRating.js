import React, { useState } from "react";
import { IoStarSharp } from "react-icons/io5";


function StarRating (){

   const [hover,setHover] = useState(false)
   const[hoverIndex,setHoverIndex] = useState(-1)
   const [selectedIndex,setSelectecIndex] = useState(-1)

   const handleMouseEnter=(index)=>
   {
    setHover(true)
    setHoverIndex(index)

   }

   const handleMouseLeave=()=>
   {
    setHover(false)
    setHoverIndex(selectedIndex)

   }
   const handleClick=(index)=>
   {
    setSelectecIndex(index)

   }



    return(
        <div>
        <div className="d-flex justify-content-center mt-3" >
            {Array.from({length:10}).map((_,index)=>
            <IoStarSharp style={{   fontSize: '50px', color: index<= (selectedIndex && hoverIndex) ? 'yellow':'black'}} 
            onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={()=>handleClick(index)}
            />)}
           
    </div>
    </div>
    )
}
export default StarRating;
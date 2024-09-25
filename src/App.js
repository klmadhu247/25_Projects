import { Provider } from "react-redux";
import ExpenseTracker from "./Components/ExpenseTracker";
import store from "./Components/redux/storeExp";
import StarRating from "./Components/StarRating/StarRating";
import ImageSlider from "./Components/ImageSlider";

import slides from './Data/ImagesForSlide.json'



function App() {
  return (
    // Exp Tracker
  //   <Provider store={store}>
  //     <div>
  // <ExpenseTracker/>
  //  </div>


  //   </Provider>

// {/* Star rating component */}

  // <div>
  //   <StarRating/>
  // </div>

  // {/* Image Slider */}

  <div>
    <ImageSlider data={slides}/>


  </div>

 

  
   
  );
}

export default App;

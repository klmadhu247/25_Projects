import { Provider } from "react-redux";
import ExpenseTracker from "./Components/ExpenseTracker";
import store from "./Components/redux/storeExp";


function App() {
  return (
    <Provider store={store}>
      <div>
  <ExpenseTracker/>
   </div>


    </Provider>
   
  );
}

export default App;

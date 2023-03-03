import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";

import Services from "./pages/services";
import Pricing from "./pages/pricing";
import Home from "./pages/home";
import Doctors from "./pages/doctors";
import Channels from "./pages/channels";

import Navibar from "./components/navbar";
import './App.css'
function App() {
  return (
    <div className="App">
      <Navibar/>
      <Router>
        <Switch>
          <Route path="/home" exact><Home/></Route>
          <Route path="/channel" exact><Channels/></Route>
          <Route path="/doctor" exact><Doctors/></Route>
          <Route path="/pricing" exact><Pricing/></Route>
          <Route path="/services" exact><Services/></Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

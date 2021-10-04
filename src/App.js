import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Servises from "./Components/Servises/Servises";
import About from "./Components/About/About";
import Errow from "./Components/errow/Errow";
import Contuct from "./Components/Contuct/Contuct";
import Comment from "./Components/Comment/Comment";


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>  
            <Comment></Comment>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/comment">
          <Comment></Comment>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>


          <Route exact path="/servises">
            <Servises></Servises>
          </Route>
          <Route path="/servises/:servis">
            <Servises></Servises>
          </Route>
          <Route path="/contuct">
            <Contuct></Contuct>
          </Route>
          <Route path="*">
            <Errow></Errow>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

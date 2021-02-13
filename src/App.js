import { Route, Switch, BrowserRouter } from 'react-router-dom'
import React from 'react';

import Home from './Page/Home';
import About from './Page/Others/About';
import Contact from './Page/Others/Contact';
import FAQ from './Page/Others/FAQ';
import Team from './Page/Others/Team';
import Terms from './Page/Others/Terms';
import Payment from './Page/Payment';
import CourseHome from './Page/Course';
import Class from './Page/Course/Class';
import Course from './Page/Course/Course';
import Store from './Page/Store';
import ProductComponent from './Page/Store/Product';
import Login from './Page/User/Login';
import Profile from './Page/User/Profile';

import Logout from './Page/User/Logout';
import Singup from './Page/User/Singup';

import Footer from './Components/Footer';
import Header from './Components/Header';

import { JWTContext } from './Contexts/JWTContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.changeJWT = this.changeJWT.bind(this)
    this.removeJWT = this.removeJWT.bind(this)
  }

  changeJWT (JWTValue) {
    this.setState({ JWT: JWTValue });
    this.context.saveJWT(JWTValue)
  }

  removeJWT () {
    this.setState({ JWT: null });
    this.context.removeJWT()
  }
  
  render() {
    let providerValue = {
      JWT: this.state.JWT || this.context.JWT,
      changeJWT: this.changeJWT,
      removeJWT: this.removeJWT
    }
    
    console.log(providerValue);
    console.log(this.context);
    return (
      <JWTContext.Provider value={providerValue}>
        <BrowserRouter>
          <Header />
            <Switch>
              <Route path="/" exact><Home /></Route>
              <Route path="/about" exact><About /></Route>
              <Route path="/contact" exact><Contact /></Route>
              <Route path="/FAQ" exact><FAQ /></Route>
              <Route path="/team" exact><Team /></Route>
              <Route path="/terms" exact><Terms /></Route>
              <Route path="/course" exact><CourseHome /></Route>
              <Route path="/course/class" exact><Class /></Route>
              <Route path="/course/:id" exact><Course /></Route>
              <Route path="/store" exact><Store /></Route>
              <Route path="/store/product" exact><ProductComponent /></Route>
              <Route path="/payment" exact><Payment /></Route>
              <Route path="/logout" exact><Logout /></Route>
              <Route path="/login" exact><Login /></Route>
              <Route path="/profile" exact><Profile /></Route>
              <Route path="/singup" exact><Singup /></Route>
              <Route path="*"><h1>bla bla 404</h1></Route>
            </Switch>
          <Footer />
        </BrowserRouter>
      </JWTContext.Provider>
    );
  }
}
App.contextType = JWTContext

export default App;

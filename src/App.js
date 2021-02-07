import { Route, Switch, BrowserRouter } from 'react-router-dom'

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
import Singup from './Page/User/Singup';

import Footer from './Components/Footer';
import Header from './Components/Header';

import Cart from './Feature/Cart';
import Product from './Model/Product';

function Test(props) {
  return <h1>bla bla 404</h1>
}

function App() {
  return (
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
          <Route path="/login" exact><Login /></Route>
          <Route path="/singup" exact><Singup /></Route>
          <Route path="*"><Test /></Route>
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { Route } from 'react-router-dom';

// import Welcome from './pages/Welcome';
// import Products from './pages/Products';
import MainHeader from './Components/MainHeader';
import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <MainHeader/>
      <main>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/contact'>
          <Contact/>
        </Route>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
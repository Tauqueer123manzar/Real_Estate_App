import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import Service from './pages/Service';
import Testimonial from './pages/Testimonial';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service/>}/>
          <Route path='/testimonial' element={<Testimonial/>}/>
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

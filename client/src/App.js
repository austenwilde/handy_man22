import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Home';
import MainNavbar from './components/shared/MainNavbar';
import Workers from './components/workers/Workers';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Nomatch />} />
      <Route path='/workers' element={<Workers />} />
    </Routes>
  </>

)
  

export default App;

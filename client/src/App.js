import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Home';
import MainNavbar from './components/shared/MainNavbar';
import Workers from './components/workers/Workers';
import Services from './components/services/Services';
import Comments from './components/comments/Comments';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Nomatch />} />
      <Route path='/workers' element={<Workers />} />
      <Route path='/workers/:workerId/services' element={<Services />} />
      <Route path='/services/:serviceId/comments' element={<Comments />} />
    </Routes>
  </>

)
  

export default App;

import Portfolio from './src/Portfolio/Portfolio';
import Gallery from './src/Gallery/Gallery';
import {Route, Routes} from 'react-router-dom';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Portfolio/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
    </Routes>
  );
}

export default App;

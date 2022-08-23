import Portfolio from './src/Portfolio/Portfolio';
import Gallery from './src/Gallery/Gallery';
import BucketList from './src/BucketList/BucketList';
import {Route, Routes} from 'react-router-dom';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Portfolio/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/bucket-list' element={<BucketList/>}></Route>
    </Routes>
  );
}

export default App;

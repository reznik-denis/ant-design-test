import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/appBar/AppBar';
import NoFoundPage from './layouts/noFoundPage';
import Home from './layouts/home'
import Buttonlayouts from './layouts/Buttonlayouts';
import Colums from './layouts/Colums'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home/>}/>              
          <Route path="button" element={<Buttonlayouts />} />
          <Route path="colums" element={<Colums />}/>
          <Route path="*" element={<NoFoundPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import HomePage from './components/HomePage';
import { Route, Routes, Switch } from "react-router-dom";
import VideoPage from './components/VideoPage';

import './App.css';

function App() {
  return (
    <div className="App">


    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/videoPage/:id" element={<VideoPage/>} />
    </Routes>


      {/* <Header/>
      <GenrePanel/>
      <Dashboard/> */}
    </div>
  );
}

export default App;

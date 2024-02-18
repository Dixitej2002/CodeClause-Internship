
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import ResumeForm from './component/ResumeForm/ResumeForm';
import About from './component/About/About'
// import TemplateThumbnail from './component/Template/TemplateThumbnail';

// import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        <Route path='/' exact element={<ResumeForm/>}/>
        <Route path='/about' exact element={<About/>}/>
        {/* <Route path='/template' exact element={<TemplateThumbnail/>}/> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;

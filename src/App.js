import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from "./components/Home.js";
import About from './components/About.js';
import Fail from './components/Fail.js';
import Experience from './components/Experience.js';
import ExperienceArq from './components/ExperienceArq.js';
import Education from './components/Education.js';

function App() {
	
return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home /> } />
	<Route path="/about" element={<About /> } />
	<Route path="/education" element={<Education /> } />
	<Route path="/fail" element={<Fail /> } />
	<Route path="/experience" element={<Experience /> } />
	<Route path="/experienceArq" element={<ExperienceArq /> } />
    </Routes>
    </BrowserRouter>
)
}

export default App;

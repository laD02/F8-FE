import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Home from './pages/Home.js';
import Rou from './pages/Rou.js';
import Learn from './pages/Learn.js';
import Blog from './pages/Blog.js';
import Roufront from './pages/Roufront.js';

function App() {
  return (
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path='Home' element={<Home />} />
                <Route path='Rou' element={<Rou />} />
                <Route path='Learn' element={<Learn />} />
                <Route path='Blog' element={<Blog />} />
                <Route path='Roufront' element={<Roufront />} />
            </Route>
        </Routes>
    )
}

export default App;

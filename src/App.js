import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home';
import Checkout from './components/Home/MainContent/Checkout';
import ServiceList from './components/Home/MainContent/ServiceList';
import Navbar from './components/Home/Navbar/Navbar';
import Shop from './components/Shop/Shop';

function App() {
    
    return (
        <Router>
            <div className='App'>
                <Navbar />
                
                <Routes>
                    <Route path='/' element={ <Home /> }></Route>
                    <Route path='/shop' element={ <Shop /> }></Route>
                    <Route path='/services/:id' element={ <ServiceList /> }></Route>
                    <Route path='/checkout' element={ <Checkout /> }></Route>
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../views/Home';

export const Router = () => {
    return(
        <BrowserRouter>            
             <Routes>
                <Route exact path="/" element={<Home />} />                
            </Routes>
        </BrowserRouter>
    );
}
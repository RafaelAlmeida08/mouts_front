import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Cidades } from '../views/Cidades/styles';
import { Home } from '../views/Home';

export const Router = () => {
    return(
        <BrowserRouter>            
             <Routes>
                <Route exact path="/" element={<Home />} />   
                <Route exact path="cidades" element={<Cidades />} />             
            </Routes>
        </BrowserRouter>
    );
}
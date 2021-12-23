import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Cidades } from '../views/Cidades';
import { Home } from '../views/Home';
import { Localidades } from '../views/Localidades';
import { Notas } from '../views/Notas';

export const Router = () => {
    return(
        <BrowserRouter>            
             <Routes>
                <Route exact path="/" element={<Home />} />   
                <Route exact path="cidades" element={<Cidades />} />     
                <Route exact path="localidades" element={<Localidades />} />          
                <Route exact path="localidade/:id" element={<Notas />} />   
            </Routes>
        </BrowserRouter>
    );
}
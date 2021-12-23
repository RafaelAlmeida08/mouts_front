import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CadastroCidade } from '../views/CadastroCidade';
import { Cidades } from '../views/Cidades';
import { Home } from '../views/Home';
import { Localidades } from '../views/Localidades';
import { Notas } from '../views/Notas';

export const Router = () => {
    return(
        <BrowserRouter>            
             <Routes>
                <Route exact path="/2" element={<Home />} />   
                <Route exact path="cidades" element={<Cidades />} />     
                <Route exact path="localidades" element={<Localidades />} />          
                <Route exact path="localidade/:id" element={<Notas />} />   
                <Route exact path="/" element={<CadastroCidade />} />  
            </Routes>
        </BrowserRouter>
    );
}
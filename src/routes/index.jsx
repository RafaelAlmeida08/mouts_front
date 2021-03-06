import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import { CadastroCidade } from '../views/CadastroCidade';
import { CadastroLocalidade } from '../views/CadastroLocalidade';
import { Cidades } from '../views/Cidades';
import { EditarLocalidades } from '../views/EditarLocalidade';
import { Home } from '../views/Home';
import { Localidades } from '../views/Localidades';
import { Notas } from '../views/Notas';

export const Router = () => {
    return(
        <HashRouter>            
             <Routes>
                <Route exact path="/" element={<Home />} />   
                <Route exact path="cidades" element={<Cidades />} />     
                <Route exact path="localidades" element={<Localidades />} />          
                <Route exact path="localidade/:id" element={<Notas />} />   
                <Route exact path="/localidade/editar/:id" element={<EditarLocalidades />} />  
                <Route exact path="/cadastro/cidades" element={<CadastroCidade />} />  
                <Route exact path="/cadastro/localidades" element={<CadastroLocalidade />} />  
                
            </Routes>
        </HashRouter>
    );
}
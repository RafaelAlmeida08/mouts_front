import { ButtonArea, Container, Item, SelectArea } from "./styles";
import { useEffect, useState } from "react";
import { getCidades } from "../../service/api";

export const FilterSelect = ({data, setData, label, original}) => {   
    const [ openSelect, setOpenSelect] = useState(false);
    const [ cidades, setCidades ] = useState([]);
    const [loading, setLoading ] = useState(true);  

    useEffect(() => {
        getCidades()        
        .then( response => { 
            response.forEach( (response) => {
                setCidades(cidades => [...cidades, response])              
            })
         })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))      
        
    }, [])

    const filter = (cidade) => {
        setOpenSelect(false);
        
        if(cidade === 'todos') {
            setData(original)
        }else{
            let filtrado = [...original];    
            filtrado = filtrado.filter( el => el.cidade.nome === cidade )
            setData(filtrado)       
        }   
    }
    
    return(
        <Container>         
            {
                !openSelect ?
                    <ButtonArea onClick={ () => setOpenSelect(true)} >
                        <span>{label}</span>                                   
                    </ButtonArea>
                :
                <SelectArea>
                    <Item >                        
                        <span onClick={() => filter('todos')}  >Todos</span>
                    </Item>  
                    {!loading &&
                        
                        cidades.map( (cidade) => (
                            <Item key={cidade.id}>                                
                                <span onClick={() => filter(cidade.nome)} >{cidade.nome}</span>
                            </Item>  
                        ))
                    }                                 
                </SelectArea>          
            }
        </Container>
    );
}
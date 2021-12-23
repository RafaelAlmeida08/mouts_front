import { Container } from "./styles"

export const Select = ({opt, setValue, label, value, fixo}) => {   
    return(
        <Container>
             <label>{label} : </label>
           
                <select value={value} onChange={e => setValue(e.target.value)} >      
                {
                !fixo ?  
                        opt.map( (op) => (
                            <option  key={op.id} value={op.id}>{op.nome}</option>
                        ))                    
                    :
                        opt.map( (op, index) => (
                            <option  value={op} key={op} >{op}</option>
                        ))
                }                       
                </select>            
        </Container>
    )
}
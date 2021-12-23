import { Container } from "./styles"

export const Select = ({opt, setValue, label, value, fixo}) => {    
    return(
        <Container>
             <label>{label} : </label>
            {
                !fixo ?
                <select value={value} onChange={e => setValue(e.target.value)} >                
                    {
                        opt.map( (op) => (
                            <option  key={op.id} value={op.id}>{op.nome}</option>
                        ))
                    }
                </select>
                :
                <select>
                    {
                        opt.map( (op) => (
                            <option value={op} key={op} >{op}</option>
                        ))
                    }
                </select>
            }
           
            
        </Container>
    )
}
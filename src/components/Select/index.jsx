import { Container } from "./styles"

export const Select = ({opt, setValue, label, value}) => {    
    return(
        <Container>
            <label>{label} : </label>
            <select value={value} onChange={e => setValue(e.target.value)} >                
                {
                    opt.map( (op) => (
                        <option  key={op.id} value={op.id}>{op.nome}</option>
                    ))
                }
            </select>
        </Container>
    )
}
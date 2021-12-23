import { Container } from "./styles"

export const Select = ({opt, setValue}) => {
    return(
        <Container>
            <select onChange={e => setValue(e.target.value)} >
                {
                    opt.map( (op) => (
                        <option key={op} >{op}</option>
                    ))
                }
            </select>
        </Container>
    )
}
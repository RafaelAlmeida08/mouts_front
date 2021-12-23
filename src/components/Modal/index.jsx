import { AreaBotoes, Container, ModalContent } from "./styles";
import Modal from '@mui/material/Modal';
import { Input } from "../Input";
import { Botao } from "../Botao";

export const ModalC = ({modal, setModal, value, setValue, done, setDone}) => {
    return(
        <Container>          
            <ModalContent >
                <Input
                    placeholder="Deixe a sua avaliação"
                    value={value}
                    setValue={setValue}
                />
                <AreaBotoes>
                    <div onClick={ () => setDone(true)} >
                        <Botao text="Avaliar"/>
                    </div>  
                    <div onClick={ () => setModal(false)} >
                        <Botao text="Cancelar"/>
                    </div>   
                </AreaBotoes>                                  
            </ModalContent>            
        </Container>
    );
}
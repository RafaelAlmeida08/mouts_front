import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { ButtonArea, Center, Container, TextArea } from "./styles";

import getCidades from "../../utils/api";

export const Home = () => {
    return(
        <Container>
            <NavBar/>
            <Center>
                <TextArea>
                    <h1>
                        <div>
                            <span> Buscando um lugar para ir? </span>
                            <span> Tudo bem! </span>
                        </div>
                    </h1>
                </TextArea>
                <Link to="localidades">           
                    <ButtonArea>
                        <span>Descubra</span>
                    </ButtonArea>
                </Link>
            </Center>
        </Container>
    );
}
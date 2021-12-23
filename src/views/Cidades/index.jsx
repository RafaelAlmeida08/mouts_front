import { NavBar } from "../../components/NavBar";
import { Cidade, CidadeDados, CidadeDescricao, CidadeNome, CidadesArea, Container, Filtro, FiltroArea, ItemFiltro } from "./styles";
import { Card } from "../../components/Card";

export const Cidades = () => {
    return(
        <Container>
            <NavBar/>
            <FiltroArea>
                <Filtro>
                    <ItemFiltro><span>Todas</span></ItemFiltro>
                    <ItemFiltro><span>Nova</span></ItemFiltro>
                    <ItemFiltro><span>Filtro por Estado</span></ItemFiltro>
                </Filtro>
            </FiltroArea>
            <CidadesArea>
                <Cidade>
                    <Card/>
                    <CidadeDescricao>
                        <CidadeNome>
                            <h3>Nome da cidade</h3>
                        </CidadeNome>
                        <CidadeDados>
                            <h4>RJ</h4>
                            <span>-</span>
                            <h4>Brasil</h4>
                        </CidadeDados>
                    </CidadeDescricao>
                </Cidade>
            </CidadesArea>
        </Container>
    );
}
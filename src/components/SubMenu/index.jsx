import { Link } from "react-router-dom";
import { Filtro, FiltroArea, ItemFiltro } from "./styles";

export const SubMenu = ({items}) => {
    return(
        <FiltroArea>
            <ul>
                {
                    items.map( (item) => (                        
                        <Link key={item.name} to={item.href} >
                            <li>
                                <span>{item.name}</span>
                            </li>
                        </Link>
                    ))
                }               
            </ul>
        </FiltroArea>
    );
}
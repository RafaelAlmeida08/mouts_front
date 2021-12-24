import { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../../App";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";


export const ThemeToggle = ({menu, openMenu}) => {
    const  { theme, setTheme } = useContext(ThemeContext);   
    const handleThemeToggle = () => {
        setTheme( theme === light ? dark : light )
    }
    return(
        <div onClick={() => {
            menu && openMenu(false)
        }} >
            <Switch
                onChange={handleThemeToggle}
                checked={theme.title === 'dark' ? false : true}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor={"#eee"}
            />
        </div>
        
    );
}
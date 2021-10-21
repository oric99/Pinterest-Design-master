import React from "react";
import Logo from "./Header-Icons/PinterestLogo";
import ButtonHeader from "./Butons-Header/ButtonHeader";
import SearchBar from "./Seach-bar/SearchBar";
import IconosD from "./Header-Icons/HeaderIcons";

//contenedore principal de lo items del header
const HeaderLayout = () => {
    //estilos del contenedor principal 
    const _stylesLayout = {
        head_container: {
            margin: '4px 16px',
            padding: 0,
            height:'80px',
            width: '100vw',
            backgroundColor: 'white',
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    };
    return (
        <div style = {_stylesLayout.head_container}>
            <Logo/> <ButtonHeader/> <SearchBar /> <IconosD />
        </div>
    );

};
export default HeaderLayout;
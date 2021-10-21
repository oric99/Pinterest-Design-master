import React from 'react';

const SearchBar = () => {
    return (
        <div style= {{..._stylesSearchBar.containerSearchbar}}>
            <svg style={{..._stylesSearchBar.svg}} class="gUZ B9u U9O kVc" height="16" width="16" viewBox="0 0 24 24"
                aria-label="Icono de búsqueda" role="img">
                <path fill='gray'
                    d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24">
                </path>
            </svg>
            <input class ="buscador" onMouseOver={hover_barOver}
                onMouseLeave={hover_barLeave} style={{ ..._stylesSearchBar.input }} type="text" autocapitalize="off" autocorrect="off"
                autocomplete="off" aria-activedescendant=""
                aria-label="Buscar"
                placeholder="Buscar" role="combobox"></input>
        </div>
            
    );
};

function hover_barOver(e) {
    e.target.style.backgroundColor = 'rgb(224, 224, 224)';
};
function hover_barLeave(e) {
    e.target.style.backgroundColor = 'rgb(236, 236, 236)';
};



const _stylesSearchBar = {   
    containerSearchbar:{
        display:'flex',
        height:'45px',
        width:'60%',
        alignItems:'center',
        
    },
    svg:{
        padding:'0px 0px',
        display:'relative',

    },
    input: {
        padding: '0px 15px',
        height: '47px',
        width: '100%',
        border: 'none',
        display:'flex',
        backgroundColor: 'rgb(236, 236, 236)',
        borderRadius: '30px',
    }
}

export default SearchBar;
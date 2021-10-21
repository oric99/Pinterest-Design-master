import React, { useState } from 'react';


const ButtonHeader = () => {

    const [inicioButton, setInicioButton] = useState('Black');
    const [inicioText, setInicioText] = useState('White');

    const [hoyButton, setHoyButton] = useState('White');

    const _stylesButton = {
        _button1: {
            margin: 0,
            padding: 0,
            width: '70px',
            cursor: 'pointer',
            height: '47px',
            color: `${inicioText}`,
            fontSize: '18px',
            fontFamily: 'Franklin Gothic heavy',
            borderRadius: '30px',
            border: 'none',
            backgroundColor: `${inicioButton}`,
        },
        _button2: {
            margin: 0,
            padding: 0,
            width: '60px',
            height: '47px',
            cursor: 'pointer',
            color: 'Black',
            fontSize: '18px',
            fontFamily: 'Roboto',
            borderRadius: '30px',
            border: 'none',
            backgroundColor: `${hoyButton}`,
        }
    };
    return (
        <div>
            <button onMouseEnter={() => {
                setInicioButton('White');
                setInicioText('Black');
            }}
            onMouseOut ={() => {
                setInicioButton('Black');
                setInicioText('White');
            }}
                style={{ ..._stylesButton._button1 }}>Inicio
            </button>
            <button onMouseEnter={() => {
                setHoyButton('rgb(236, 236, 236)');
            }}
            onMouseOut ={() => {
                setHoyButton('white');
            }}
                style={{ ..._stylesButton._button2 }}>Hoy
            </button>
        </div>

    );
};
export default ButtonHeader;
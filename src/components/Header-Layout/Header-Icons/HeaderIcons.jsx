import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const IconosD = () => {
    return (
        <div style={{..._stylesIcon.containerIcons}}>
            <svg onMouseOver={hoverIconOver}
                onMouseLeave={hoverIconLeave} ClassName="Noti" style={{ ..._stylesIcon.svg }}>
                <path style={_stylesIcon.path}
                    d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z">
                </path>
            </svg>

            <svg onMouseOver={hoverIconOver}
                onMouseLeave={hoverIconLeave} ClassName="Come" style={{ ..._stylesIcon.svg }}>
                <path style={_stylesIcon.path}
                    d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0">
                </path>
            </svg>

            <svg onMouseOver={hoverIconOver}
                onMouseLeave={hoverIconLeave} ClassName="Noti" style={{ ..._stylesIcon.svg }}>
                <path style={_stylesIcon.path}
                    d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0">
                </path>
            </svg>

            <svg onMouseOver={hoverIconOver}
                onMouseLeave={hoverIconLeave}
                className="gUZ B9u U9O kVc" style={{ ..._stylesIcon.svgF }}>
                <path fill = 'gray'
                    d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z">
                </path>
            </svg>
        </div>
    );
};
function hoverIconOver(e) {
    e.target.style.backgroundColor = 'rgb(224, 224, 224)';
};
function hoverIconLeave(e) {
    e.target.style.backgroundColor = 'white';
};


const _stylesIcon = {
    containerIcons: {
        margin: 0,
        padding: 0,
        width: 'max-content',
        height: '100hv',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    svg: {
        padding: '10px',
        height: '24px',
        width: '24px',
        viewBox: '0px 0px 24px 24px',
        role: 'img',
        ariaHidden: 'true',
        ariaLabel: '',
        borderRadius: '30px',
    },
    path: {
        fill: 'gray',
    },
    //flechita---
    containerIconF: {
        width: '24px',
        height: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '30px',
        backgroundColor: 'white',
    },
    svgF: {
        margin:'5px',
        height: '24px',
        width: '24px',
        viewBox: '0px 0px 24px 24px',
        role: 'img',
        display:'flex',
        ariaHidden: 'true',
        ariaLabel: '',
        borderRadius: '30px',
    },
}

export default IconosD;
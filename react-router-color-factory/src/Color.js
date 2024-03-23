import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const Color = ({ hexCodes }) => {
    const [hexCode, setHexCode] = useState({id: null, hex: ''});
    const { color } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!hexCodes.some(code => code.hex === color)) navigate('/colors');
        setHexCode(hexCodes.filter(codes => codes.hex === color)[0]);
    }, [color, hexCode]);

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            paddingTop: '3rem',
            textAlign: 'center',
            backgroundColor: `#${hexCode.hex}`
        }}>
            <h1 className='color-title'>{`#${hexCode.hex.toUpperCase()}`}</h1>
        </div>
    );
}

export default Color;

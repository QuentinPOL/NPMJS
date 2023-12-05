import React, { useState } from 'react';

const FunctionnnalComponent = () => {
    const [color, setColor] = useState("");

    const generateRandomColor = () => {
        setColor(Math.random().toString(16).substr(-6));
    };

    return (
        <div>
            <div style={{ backgroundColor: "#" + color }} onMouseOver={generateRandomColor}>
                Je suis un composant
            </div>
        </div>
    );
}

export default FunctionnnalComponent
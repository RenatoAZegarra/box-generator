import react, { useState } from 'react';


const ColorDisplay = ({ boxes }) => {
    return (
        <div>
            {boxes.map((box, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: box.color,
                        width: '100px',
                        height: '100px',
                        display: 'inline-block',
                        margin: '10px',
                    }}
                />
            ))}
        </div>
    );
};

export default ColorDisplay;
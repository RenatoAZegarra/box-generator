import react, { useState } from 'react';
    
    
const ColorForm = ({addBox}) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (color) {
          addBox({ color });
          setColor('');
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color:</label>
        <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Add Box</button>
      </form>
    );
};
    
export default ColorForm;
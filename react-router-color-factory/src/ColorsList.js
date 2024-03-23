import React from "react";
import { Link } from "react-router-dom";

const ColorsList = ({ colors }) => {
    return (
        <div style={{ padding: '2rem'}}>
            <h1 >Colors</h1>
            <Link 
                className="btn"
                to={'/colors/new'}>
                    Add a New Color
            </Link>
            <ul>
                {colors.length > 0 ? 
                    colors.map(color => 
                        <li key={color.id}>
                            <Link 
                                to={`/colors/${color.hex}`}>
                                {`Color: #${color.hex.toUpperCase()}`}
                            </Link>
                        </li>
                    ) :
                    <li>No Colors Available</li>
                }
            </ul>
        </div>
    );
}

export default ColorsList;
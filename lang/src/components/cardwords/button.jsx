import './button.scss';
import { useState } from "react";

function Button () {
    const [loadvisib, setvisib] = useState(false)
    return (
        <div className="btn">
            <button className="btn__style" onClick={() => setvisib(!loadvisib)}>{loadvisib ? "Удалить из избранного" : "В избранное"} </button>
        </div>
    );
}

export default Button;
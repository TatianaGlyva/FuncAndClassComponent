import React from 'react';
import {useState} from "react";

function Fcomponent(props) {

    const [isToggled, setIsToggled] = useState(true);

    const handleClick = () => {
        setIsToggled(
            !isToggled
        )
    };

    return (
        <div>
            <div className="container">
                <h1 className="title">FComponent</h1>
                <p>
                    {isToggled ? "Hello Component" : "Goodbye Component"}
                </p>
                <button className="btn" onClick={handleClick}>click me</button>
            </div>
        </div>
    )

}

export default Fcomponent;

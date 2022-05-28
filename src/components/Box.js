import React from "react";

const Box = ({id, width, height, backGroundColor, removeBox}) => {

    const handleRemove = (e) => {
        removeBox(id)
    }

    return (
        <div 
        style={{width: `${width}px`, height: `${height}px`, backgroundColor: backGroundColor}}>
            <button onClick={handleRemove} >X</button>
        </div>
    )
}

export default Box;
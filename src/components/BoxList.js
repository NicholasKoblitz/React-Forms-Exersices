import react, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from "./Box";

const BoxList = () => {
    const INITIAL_STATE = [];

    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (id, width, height, backGroundColor) => {
        setBoxes(boxes => [...boxes, {id, width, height, backGroundColor}])
    }
    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box === id))
    }

    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(box => <Box id={box.id} width={box.width} height={box.height} backGroundColor={box.backGroundColor} key={box.id} removeBox={removeBox}/>)}
            </div>

        </div>
    )
}

export default BoxList;
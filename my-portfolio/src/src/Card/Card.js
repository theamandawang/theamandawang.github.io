import ReactCardFlip from 'react-card-flip';
import { forwardRef, useState } from 'react';
const Card = forwardRef(({front, back}, ref) => {
    const [flipped, setFlipped] = useState(false);
    const flip = () => {
        setFlipped(!flipped);
    }
    return (
        <div onClick={flip} style={{position: 'relative', borderRadius: '5px'}}>
            <ReactCardFlip 
                isFlipped={flipped}
                flipDirection='horizontal'
                cardStyles={{
                    front: {position: 'absolute', width: '28vw', height: '20vw'},
                    back: {fontSize: `calc()`, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', backgroundColor: '#393F4C', width: '28vw', height: '20vw', borderRadius: '5px'}
                }}
            >
                    {front}
                    {back}
            </ReactCardFlip>
        </div>
    );
});
export default Card;
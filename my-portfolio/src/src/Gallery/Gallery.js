import {useEffect, useRef} from 'react';
import Sidebar from '../Sidebar/Sidebar';
// https://medium.com/@amie.n.foster/flipping-out-how-to-create-a-card-that-flips-with-react-and-css-131dba54fc96
// will be using above link to create gallery full of flipping cards!
const Gallery = () => {
    const sidebarRef = useRef();
    const topRef = useRef();

    useEffect(() => {
        if(sidebarRef.current && topRef.current) {
            let shift = -1 * sidebarRef.current.clientHeight;
            topRef.current.style.marginTop = `${shift}px`;
        }
    }, [sidebarRef, topRef]);

    return (
        <div>
            <Sidebar ref={sidebarRef}/>
            <div ref={topRef} style={{color: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1> WORK IN PROGRESS </h1>
            </div>
        </div>
    );
};

export default Gallery;
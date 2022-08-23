import {useState, useEffect, useRef} from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Gallery = () => {
    const [height, setHeight] = useState(0);
    const sidebarRef = useRef();
    const topRef = useRef();

    useEffect(() => {
        if(sidebarRef.current && topRef.current) {
            let shift = -1 * sidebarRef.current.clientHeight;
            topRef.current.style.marginTop = `${shift}px`;
            setHeight(sidebarRef.current.clientHeight);
        }
    }, [sidebarRef, topRef]);

    return (
        <div>
            <Sidebar ref={sidebarRef}/>
            <div ref={topRef}>
                Hello.
            </div>
        </div>
    );
};

export default Gallery;
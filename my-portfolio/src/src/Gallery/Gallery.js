import {useState, useEffect, useRef} from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Gallery = () => {
    const [height, setHeight] = useState(0);
    const sidebarRef = useRef();
    const topRef = useRef();

    useEffect(() => {
        if(sidebarRef.current && topRef.current) {
            topRef.current.style.marginTop = -1 * topRef.current.clientHeight;
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
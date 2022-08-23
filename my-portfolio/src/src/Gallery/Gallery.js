import {useEffect, useRef} from 'react';
import Sidebar from '../Sidebar/Sidebar';

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
            <div ref={topRef}>
                Hello.
            </div>
        </div>
    );
};

export default Gallery;
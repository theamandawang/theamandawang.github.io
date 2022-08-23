import {useState, useEffect, useRef} from 'react';
import Sidebar from '../Sidebar/Sidebar';

export default function Gallery () {
    const [height, setHeight] = useState(0);
    const sidebarRef = useRef();
    const topRef = useRef();

    useEffect(() => {
        if(sidebarRef.current && topRef.current) {
            topRef.current.style.marginTop = -1 * topRef.current.clientHeight;
            setHeight(sidebarRef.current.clientHeight);
            console.log(sidebarRef.current.clientHeight);
            console.log(topRef.current);
        }
    }, [sidebarRef, topRef]);

    return (
        <div>
            <Sidebar forwardRef={sidebarRef}/>
            <div ref={topRef}>
                Hello.
            </div>
        </div>
    );
};
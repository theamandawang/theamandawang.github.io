import {useEffect, useRef} from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BucketList = () => {
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
                <h2> just my bucket list, in no particular order</h2>
                <ul>
                    skydiving! <b>[done]</b>
                </ul>
                <ul>
                    ride amtrak across US
                </ul>
                <ul>
                    hike in the alps
                </ul>
                <ul>
                    complete el camino de santiago
                </ul>
                <ul>
                    act in a movie someday :)
                </ul>
                <ul>
                    meet robert pattinson
                </ul>
                <ul>
                    go all the way up half dome!
                </ul>
                <ul>
                    watch a meteor shower in the desert
                </ul>
                <ul>
                    see joni mitchell live
                </ul>
                <ul>
                    see the glaciers in alaska
                </ul>
                <ul>
                    own not one, not two, but THREE pairs of overalls! (dungarees if you're british)
                </ul>
                <ul>
                    drive a punch buggy
                </ul>
            </div>
        </div>
    );
};

export default BucketList;
import {useEffect, useRef} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Card from '../Card/Card';
import { ImageData } from './ImageData';
import './Gallery.css'
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
            <div ref={topRef} style={{color: '#FFFFFF'}}>
                <div className='card-grid'>
                    {
                        ImageData.map((element, index) => {
                            return(
                                <Card
                                    key={index}
                                    front={
                                        <img src={element.image} alt={element.alt} className='image-style'></img>
                                    } 
                                    back={
                                        <p className='text'>{element.text}</p>
                                    }
                                />
                            );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
import {useEffect, useRef} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Card from '../Card/Card';
import MetaImage from '../../img/meta.jpg';
import COWImage from '../../img/cow.jpg';
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
                    <Card
                        front={
                            <img src={MetaImage} alt='Meta 2022' style={{objectFit: 'cover', width: '28vw', height: '20vw', borderRadius: '5px'}}></img>
                        } 
                        back={
                            <p style={{padding: '20px'}}>Summer 2022 at Meta Seattle!</p>
                        }
                    />
                    <Card
                        front={
                            <img src={COWImage} alt='Meta 2022' style={{objectFit: 'cover', width: '28vw', height: '20vw', borderRadius: '5px'}}></img>
                        } 
                        back={
                            <p style={{padding: '20px'}}>Amazing Chicken of the Woods polypore in White Park :)</p>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
import './Sidebar.css';
import CollectionsIcon from '@mui/icons-material/Collections';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom';
import {useState} from 'react';
export default function Sidebar () {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        if(sidebar){
            document.getElementById('sidebar').style.width = '5vw';
        } else {
            document.getElementById('sidebar').style.width = '15vw';
        }
        setSidebar(!sidebar);
    }
    return (
        <div id='sidebar' onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
            <Link to={'/'} className='sidebar-link'>
                <HomeIcon className='icon'/>
                { sidebar ? <p className='label'>Home</p> : null}
            </Link>
            <Link to={'/gallery'} className='sidebar-link'>
                <CollectionsIcon className='icon'/>
                { sidebar ? <p className='label'>Gallery</p> : null}
            </Link>
        </div>
    );
}

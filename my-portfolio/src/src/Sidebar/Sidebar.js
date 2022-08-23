import './Sidebar.css';
import CollectionsIcon from '@mui/icons-material/Collections';
import HomeIcon from '@mui/icons-material/Home';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import {Link} from 'react-router-dom';
import {useState, forwardRef} from 'react';
const Sidebar = forwardRef((props, ref) =>  {
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
        <div ref={ref} id='sidebar' onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
            <Link to={'/'} className='sidebar-link'>
                <HomeIcon/>
                { sidebar ? 'Home' : ''}
            </Link>
            <Link to={'/gallery'} className='sidebar-link'>
                <CollectionsIcon/>
                { sidebar ? 'Gallery' : ''}
            </Link>
            <Link to={'/bucket-list'} className='sidebar-link'>
                <FormatColorFillIcon/>
                { sidebar ? 'Bucket list' : ''}
            </Link>
        </div>
    );
});
export default Sidebar;

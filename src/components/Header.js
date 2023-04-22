import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

function Header(){
    return(
        <div className="header">
            <div className="header_left d-inline">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" className="searchicon" />
                <input placeholder="Search for Artists,Songs..." type="text" />
            </div>
            <div className="header_right d-inline">
                <button>Login/Sign up</button>
                
            </div>
            
        </div>
    )
}

export default Header;
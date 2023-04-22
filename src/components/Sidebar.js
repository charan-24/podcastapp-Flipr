import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarhead">
                <FontAwesomeIcon icon={faMusic} size="2xl" className="musicicon d-inline"/>
                <h1 className="d-inline ">Raagam</h1>
                <hr/>
            </div>
            <h6>Sidebar</h6>
        </div>
    )
}

export default Sidebar
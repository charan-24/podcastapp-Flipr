import './Footer.css'
import orange from '../components/orange.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle ,faCirclePlay,faBackwardStep,faForwardStep, faRepeat} from '@fortawesome/free-solid-svg-icons'


function Footer(){
    return(
        <div className="footer"> 
            <div className="footer_left "> 
                <img src= { orange } className="w-50"alt=""/>
            </div>
            <div className="footer_center">
                <FontAwesomeIcon icon={faShuffle} size="2xl" className="shuffle"/>
                
                <FontAwesomeIcon icon={faBackwardStep} size="2xl" />
                <FontAwesomeIcon icon={faCirclePlay} size="2xl" />
                <FontAwesomeIcon icon={faForwardStep} size="2xl" />
                <FontAwesomeIcon icon={faRepeat} size="2xl" />
            </div>
            <div className="footer_right d-inline">
                footer right
            </div>
            
        </div>
    )
}

export default Footer
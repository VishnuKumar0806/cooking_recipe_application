import React from "react";
import './Details.css';

// fontawasome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import BG_Image_1 from '../Images/pexels-ash-376464.jpg';
import BG_Image_2 from '../Images/pexels-dapur-melodi-1109197.jpg';
import BG_Image_3 from '../Images/pexels-rajesh-tp-1624487.jpg';
import BG_Image_4 from '../Images/pexels-cats-coming-406152.jpg';
import BG_Image_5 from '../Images/pexels-tranmautritam-61180.jpg';
import BG_Image_6 from '../Images/pexels-valeria-boltneva-842571.jpg';
import BG_Image_7 from '../Images/pexels-karolina-grabowska-4963674.jpg';
import BG_Image_8 from '../Images/pexels-marvin-ozz-2474658.jpg';

const Details = () => {
    return(
        <React.Fragment>
            <div className="DE-main">
                <h1>Type your recipe name <FontAwesomeIcon icon={faArrowUp} className="DE-icon"/></h1>
                <p>And choose the food you want</p>
                <p>Celebrate the food</p>
            </div>
            <div className="DE-images">
                <img src={BG_Image_1}/>
                <img src={BG_Image_2}/>
                <img src={BG_Image_3}/>
                <img src={BG_Image_4}/>
                <img src={BG_Image_5}/>
                <img src={BG_Image_7}/>
                <img src={BG_Image_6}/>
                <img src={BG_Image_8}/>
            </div>
        </React.Fragment>
    )
}

export default Details;
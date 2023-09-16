import React from "react";
import './Homepage.css';
import Logo from '../Images/Logo.png';

import BG_Image_1 from '../Images/pexels-ash-376464.jpg';
import BG_Image_2 from '../Images/pexels-dapur-melodi-1109197.jpg';
import BG_Image_3 from '../Images/pexels-rajesh-tp-1624487.jpg';
import BG_Image_4 from '../Images/pexels-cats-coming-406152.jpg';
import BG_Image_5 from '../Images/pexels-tranmautritam-61180.jpg';
import BG_Image_6 from '../Images/pexels-valeria-boltneva-842571.jpg';
import BG_Image_7 from '../Images/pexels-karolina-grabowska-4963674.jpg';
import BG_Image_8 from '../Images/pexels-marvin-ozz-2474658.jpg';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons';

<style>
    @import url('https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap');
</style>

const Homepage = () => {
    return (
        <React.Fragment>
            <div className="HP-background">
                <img src={BG_Image_1} />
                <img src={BG_Image_3} />
                <img src={BG_Image_2} />
                <img src={BG_Image_4} />
                <img src={BG_Image_5} />
                <img src={BG_Image_7} />
                <img src={BG_Image_6} />
                <img src={BG_Image_8} />
            </div>
            <div className="HP-main-content">
                <div className="HP-img">
                    <img src={Logo} />
                </div>
                <div className="HP-content">
                    <h1>Meal's formula</h1>
                    <p>Plan your meal with this site help.</p>
                    <p>And celebrate your foods</p>
                    <Link to="/search" className="HP-button">
                        <span><FontAwesomeIcon icon={faKitchenSet} className="HP-icon" /> Get Started</span>
                    </Link>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Homepage;
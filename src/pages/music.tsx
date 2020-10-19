import React from "react";
import { FaPlay } from "react-icons/fa";
/* 
 *COSMETICS
 *  Build Controls module
 *      play/back-forward/pause-stop/prev song & next song window
 *  Audio List
 *      Current song header
 *      Tabbed window with audio lists
 *          Queue/Customs/Sample/Favs
 *  Description Wings
 *      fill with catsum meowsum
 *FUNCTION 
 *  Add button controls
 *  Add prev/next song load in
 *  Add queue generation
 *  
 * 
 *STRETCH
 *  Add loop, repeat, shuffle function
 * 
 */

const MusicPlayer = () =>{
    return(
        <div>
            <h1>Music Player</h1>


            <div className="section">
                <div className="container">
                    <div className="container">

                    </div>
                    <div className="container">
                        <a><FaPlay /></a>
                    </div>
                    <div className="container">

                    </div>
                </div>
            </div>    
        </div>
        

        
    )
}
export default MusicPlayer;
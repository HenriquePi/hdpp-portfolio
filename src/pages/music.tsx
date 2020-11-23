import React from "react";
import { FaBackward, FaPlay, FaForward, FaPause, FaStop} from "react-icons/fa";
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


            <div className="columns is-vcentered">
                <div className="column has-background-grey-light">
                    <a className="is-pulled-right"><FaBackward /></a>
                </div>
                <div className="column is-narrow is-centered has-background-black">
                    <div className="columns column is-centered is-narrow has-background-grey">
                        <a className=""><FaPlay /></a>
                    </div>
                    <div className="columns">
                        <div className="column is-narrow">
                            <a><FaPause /></a>
                        </div>
                        <div className="column is-narrow">
                            <a><FaStop /></a>
                        </div>
                    </div>
                </div>
                <div className="column has-background-grey-light">
                    <a><FaForward /></a>
                </div>
            </div>    
        </div>
        

        
    )
}
export default MusicPlayer;
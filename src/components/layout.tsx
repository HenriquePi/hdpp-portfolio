import React from "react";
import { Nav } from './navigation';
import { Hero } from './hero';
import { Footer } from './footer';

type LayoutType = {
    children: any; //type it
}


const Layout: React.FC<LayoutType> =({children}:LayoutType) => {
    return(
        <div className="body">
            {/* <Hero/> */}
            <Nav/>
            <div className="content">    
                {children}
            </div>
            <Footer/>
        </div>
    );
}
export default Layout;

import React, { useState } from "react";
import Layout from 'components/layout';
import { cnb } from "cnbuilder";
import { GoalsBlurb } from "components/about/goals-blurb";
import { ProfileImage } from "components/about/profile-image";
import { Experience } from "components/about/experience-tile";
import { AboutMe } from "components/about/about-me-tab";
// TODO pull xpTile data from either a data.tsx file, or linked in
const About = () => {
  const [isResumeTabActive, setTabActive] = useState(true);
  const xpTileOne: XpTile = {
    title: "Web Development Intern",
    company: "Jupio Labs",
    dateStart: "Dec 2020",
    dateEnd: "Present",
    description: "words",
    key: 0,
  }
  const xpTileTwo: XpTile = {
    title: "General Contractor",
    company: "Voxel Builds",
    dateStart: "Jan 2017",
    dateEnd: "Present",
    description: "words",
    key: 1,
  }
  const xpTileThree: XpTile = {
    title: "Shift Manager",
    company: "Pizza Hut",
    dateStart: "Jul 2015",
    dateEnd: "Aug 2016",
    description: "words",
    key: 2,
  }
  const [experienceTileList, setExperienceTileList] = useState<XpTile[]>([xpTileOne, xpTileTwo, xpTileThree])

    return (
      <Layout>
        <div className="tabs is-medium">
          <ul>
            <li className={cnb({"is-active": isResumeTabActive})}>
              <a onClick={() => setTabActive(true)}>Resume</a></li>
            <li className={cnb({"is-active": !isResumeTabActive})}>
              <a onClick={() => setTabActive(false)}>About Henrique P</a></li>
          </ul>
        </div>
        <div className="tile is-ancestor">
        {isResumeTabActive && (
          <>
            <div className="tile is-parent is-vertical is-12">
              <div className="tile">
                <GoalsBlurb /> <ProfileImage/>
              </div>
              {console.log(experienceTileList[0])}
                <Experience {...experienceTileList[0]}/>
                <Experience {...experienceTileList[1]}/>
                <Experience {...experienceTileList[2]}/>
            </div>
          </>
          
        )}

        {!isResumeTabActive && (
          <>
            <AboutMe/>
          </>
              
            
        )}
        </div>
      </Layout>
    );
}
export default About;

import React from "react";
import xpTile from "../../pages/about";

// export type XpTile = {
//   title: string;
//   company: string;
//   dateStart: string;
//   dateEnd: string;
//   description: string;
//   key: number;
// }

export const Experience:React.FC<XpTile> = ({title, company, dateStart, dateEnd, description, key}) => {
  return(
    <div className="tile is-child" key={key}>
      <p>{title}</p>
      <p>{company}</p>
      <p>{dateStart}:{dateEnd}</p>
      <p>{description}</p>
    </div>
  )
}


import React from 'react';

const MovieTabs=(props)=>{

    const handleClick=(value)=>{
        return(event)=>{
            props.updateSortBy(value)
        }
    };

    const getClassForLink=(value)=>{
        return `nav-link ${props.sort_by===value ? "active":""}`;
    };

    return(
        <ul className="tabs nav nav-pills">
            <li  className="nav-item">
                <div className={getClassForLink("popularity.desc")}
                     onClick={handleClick("popularity.desc")}
                >
                    Popularity desc
                </div>
            </li>
            <li className="nav-item">
                <div className={getClassForLink("revenue.desc")}
                     onClick={handleClick("revenue.desc")}>
                    Revenue desc
                </div>
            </li>
            <li className="nav-item">
                <div className={getClassForLink("vote_average.desc")}
                     onClick={handleClick("vote_average.desc")}>
                   Vote average desc
                </div>
            </li>
        </ul>

    )
}
export default MovieTabs;

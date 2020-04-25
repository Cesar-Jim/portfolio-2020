import React from 'react';

const Language = ({language, proficiency, level}) => {
    return (
        <div className="language__main-container">
            <div className="language__box">
                <h5 className="language__name">{language}</h5>
                <p className="language__proficiency">{proficiency}</p>
            </div> 
            <div className="language__level">
                <ul className="language__spheres-container">
                    <li className={`sphere ${ level >= 10 ? "active" : "inactive" }`}></li>
                    <li className={`sphere ${ level >= 20 ? "active" : "inactive" }`}></li>
                    <li className={`sphere ${ level >= 30 ? "active" : "inactive" }`}></li>
                    <li className={`sphere ${ level >= 40 ? "active" : "inactive" }`}></li>
                    <li className={`sphere ${ level >= 50 ? "active" : "inactive" }`}></li>
                    <li className={`sphere ${ level >= 60 ? "active" : "inactive" }`}></li>
                    <li className={`sphere ${ level >= 70 ? "active" : "inactive" }`}></li>
                    <li className={`sphere ${ level >= 80 ? "active" : "inactive" }`}></li>
                    <li className={`sphere ${ level >= 90 ? "active" : "inactive" }`}></li>
                    <li className={`sphere ${ level >= 100 ? "active" : "inactive" }`}></li>
                </ul>
            </div> 
        </div>
    )
}

export default Language;
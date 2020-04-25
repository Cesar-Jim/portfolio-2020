import React from 'react';
import Language from './Language';

const Languages = () => {
    return (
        <div className="languages__container">
        <h2 className="languages__title">Languages I Speak</h2>
            <Language language="Spanish" proficiency="Native" level={100} />
            <Language language="English" proficiency="Professional Proficiency" level={90} />
            <Language language="Portuguese" proficiency="Professional Proficiency" level={90} />
            <Language language="French" proficiency="Conversational" level={70} />
        </div>
    )
}

export default Languages;
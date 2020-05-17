import React from "react";
import Language from "./Language";

const Languages = () => {
  return (
    <div className="languages__container">
      <div className="languages__title">
        <h2 className="main-title">Languages</h2>
      </div>
      <div className="languages__collection">
        <Language language="Spanish" proficiency="Native" level={100} />
        <Language
          language="English"
          proficiency="Full Professional"
          level={90}
        />
        <Language
          language="Portuguese"
          proficiency="Full Professional"
          level={90}
        />
        <Language language="French" proficiency="Conversational" level={60} />
      </div>
    </div>
  );
};

export default Languages;

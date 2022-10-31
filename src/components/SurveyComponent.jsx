import React from "react";

import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

import "survey-core/defaultV2.css";
// import "./index.css";
import { json } from "../data/json";

StylesManager.applyTheme("defaultV2");

function SurveyComponent() {
  const survey = new Model(json);

  return <Survey model={survey} />;
}

export default SurveyComponent;

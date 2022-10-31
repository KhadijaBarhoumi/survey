import React from 'react'

import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react'

import 'survey-core/survey.i18n.js'
import 'survey-creator-core/survey-creator-core.i18n.js'

import 'survey-core/defaultV2.css'
import 'survey-creator-core/survey-creator-core.css'
// import "./index.css";

function SurveyComponent() {
  const creatorOptions = {}
  const creator = new SurveyCreator(creatorOptions)
  function sendDataToServer(survey) {
    //send Ajax request to your web server
    alert('The results are: ' + JSON.stringify(survey.data))
  }
  creator.JSON = {
    completedHtml:
      '<h3>Thank you for your feedback.</h3><h5>Your thoughts and ideas will help us to create a great product!</h5>',
    completedHtmlOnCondition: [
      {
        expression: '{nps_score} > 8',
        html:
          '<h3>Thank you for your feedback.</h3><h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>',
      },
      {
        expression: '{nps_score} < 7',
        html:
          '<h3>Thank you for your feedback.</h3><h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br />',
      },
    ],
    pages: [
      {
        name: 'page1',
        elements: [
          {
            type: 'rating',
            name: 'nps_score',
            title:
              'On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?',
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            minRateDescription: '(Most unlikely)',
            maxRateDescription: '(Most likely)',
          },
          {
            type: 'checkbox',
            name: 'promoter_features',
            visible: false,
            visibleIf: '{nps_score} >= 9',
            title: 'Which features do you value the most?',
            isRequired: true,
            validators: [
              {
                type: 'answercount',
                text: 'Please select two features maximum.',
                maxCount: 2,
              },
            ],
            choices: [
              'Performance',
              'Stability',
              'User Interface',
              'Complete Functionality',
            ],
            hasOther: true,
            otherText: 'Other feature:',
            colCount: 2,
          },
          {
            type: 'comment',
            name: 'passive_experience',
            visible: false,
            visibleIf: '{nps_score} > 6  and {nps_score} < 9',
            title: 'What do you like about our product?',
          },
          {
            type: 'comment',
            name: 'disappointed_experience',
            visible: false,
            visibleIf: '{nps_score} notempty',
            title:
              'What do you miss or find disappointing in your experience with our products?',
          },
        ],
      },
    ],
    showQuestionNumbers: 'off',
  }

  return <SurveyCreatorComponent creator={creator} />
}

export default SurveyComponent

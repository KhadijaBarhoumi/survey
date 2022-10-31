import "./App.css";
import MuiFormikYup from "./components/MuiFormikYup";
import SurveyComponent from "./components/SurveyComponent";
import SurveyMultipage from "./components/SurveyMultipage";
import SurveyCreatorComponent from "./components/SurveyCreatorComponent"; 
function App() {
  return (
    <div>
       <SurveyCreatorComponent /> 
      {/* <SurveyComponent /> */}
      {/* <SurveyMultipage /> */}
     { /*<MuiFormikYup />*/}
    </div>
  );
}

export default App;

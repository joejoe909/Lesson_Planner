import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login"
import TeacherLanding from "./components/Teacherlanding"
import LessonPlanForm from "./components/handleinputform";
import AdminLanding from "./components/Adminlanding";
import viewLessonPlan from "./components/viewLessonPlan";
import viewAll from "./components/viewAll";
import Display from "./components/display/display";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/landingPage" component={TeacherLanding} />
        <Route exact path="/newLessonPlan" component={LessonPlanForm} />
        <Route exact path="/landingPageAdmin" component={AdminLanding} />
        <Route exact path="/viewLessonPlan" component={viewLessonPlan} />
        <Route exact path="/viewAll" component={viewAll} />
        <Route exact path="/lessonPlanView" component={Display}/>
      </div>
    </Router>
  );
}


export default App;
import React, { Component, useState } from "react";
import "../css/landingpagestyle.css";
import Navbar from "./navbar.js";
import LessonPlanButton from "./newLessonPlanbutton";
import LessonTile from "./LessonTile";

export default function viewAll() {
  return (
    <>
      <Navbar />
      <div class="column">
        <LessonPlanButton />
        <LessonTile />
        <LessonTile />
        <LessonTile />
        <LessonTile />
      </div>
    </>
  );
}
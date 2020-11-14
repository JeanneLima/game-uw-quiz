import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./pages/home/home";
import QuestionsPage from "./pages/questions/questions";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/questions" component={QuestionsPage} />
    </BrowserRouter>
  );
}

export default Routes;

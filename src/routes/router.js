import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import QuestionPage from "../pages/QuestionPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path = "/questions" component = {QuestionPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

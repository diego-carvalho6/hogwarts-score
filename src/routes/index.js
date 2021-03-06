import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ScoreCard from "../pages/ScoreCard";
const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <HomePage></HomePage>
        <Route path="/ScoreCard">
          <ScoreCard></ScoreCard>
        </Route>
      </Route>
    </Switch>
  );
};

export default Routes;

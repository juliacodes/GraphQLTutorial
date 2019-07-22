import React from "react";
import CreateLink from "./CreateLink";
import LinkList from "./LinkList";
import Header from "./Header";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Link as RouterLink } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import React from "react"
import Home from "./Home"
import Eat from "./Eat/Eat"
import Play from "./Play/Play"
import He from "./Pronouns/He"
import I from "./Pronouns/I"
import It from "./Pronouns/It"
import Me from "./Pronouns/Me"
import My from "./Pronouns/My"
import She from "./Pronouns/She"
import Them from "./Pronouns/Them"
import Us from "./Pronouns/Us"
import We from "./Pronouns/We"
import You from "./Pronouns/You"
import Verb from "./Verb/Verb"
import Nt from "./Verb/Nt"

function App() {


  return (

    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Eat" component={Eat}/>
          <Route exact path="/Play" component={Play}/>
          <Route exact path="/He" component={He}/>
          <Route exact path="/I" component={I}/>
          <Route exact path="/It" component={It}/>
          <Route exact path="/Me" component={Me}/>
          <Route exact path="/My" component={My}/>
          <Route exact path="/She" component={She}/>
          <Route exact path="/Them" component={Them}/>
          <Route exact path="/Us" component={Us}/>
          <Route exact path="/We" component={We}/>
          <Route exact path="/You" component={You}/>
          <Route exact path="/Verb" component={Verb}/>
          <Route exact path="/Nt" component={Nt}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

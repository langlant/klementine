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
import Drink from "./Drink/Drink"
import Want from "./Want/Want"
import Time from "./Time/Time"
import Good from "./Good/Good"
import Bad from "./Bad/Bad"
import In from "./In/In"
import Out from "./Out/Out"
import Up from "./Up/Up"
import Down from "./Down/Down"
import Not from "./Not/Not"
import Done from "./Done/Done"
import End from "./End/End"
import Work from "./Work/Work"

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
          <Route exact path="/Drink" component={Drink}/>
          <Route exact path="/Want" component={Want}/>
          <Route exact path="/Time" component={Time}/>
          <Route exact path="/Good" component={Good}/>
          <Route exact path="/Bad" component={Bad}/>
          <Route exact path="/Up" component={Up}/>
          <Route exact path="/Down" component={Down}/>
          <Route exact path="/Not" component={Not}/>
          <Route exact path="/Done" component={Done}/>
          <Route exact path="/Time" component={Time}/>
          <Route exact path="/End" component={End}/>
          <Route exact path="/Work" component={Work}/>
          <Route exact path="/Want" component={Want}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

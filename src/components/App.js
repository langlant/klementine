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
import Great from "./Good/Great"
import Wonderful from "./Good/Wonderful"
import Bad from "./Bad/Bad"
import In from "./In/In"
import Out from "./Out/Out"
import Down from "./Down/Down"
import Not from "./Not/Not"
import Done from "./Done/Done"
import End from "./End/End"
import Work from "./Work/Work"
import And from "./And/And"
import That from "./That/That"
import There from "./There/There"
import Spell from "./Spell/Spell"
import Am from "./Am/Am"
import Watch from "./Watch/Watch"
import Read from "./Read/Read"
import Like from "./Like/Like"
import Do from "./Do/Do"
import Find from "./Find/Find"
import Go from "./Go/Go"
import Get from "./Get/Get"
import Help from "./Help/Help"
import Look from "./Look/Look"
import Talk from "./Talk/Talk"
import Think from "./Think/Think"
import Hear from "./Hear/Hear"
import Make from "./Make/Make"
import Need from "./Need/Need"
import Turn from "./Turn/Turn"
import Stop from "./Stop/Stop"
import Fast from "./Fast/Fast"
import Slow from "./Slow/Slow"
import Love from "./Love/Love"
import New from "./New/New"
import Have from "./Have/Have"
import Feel from "./Feel/Feel"
import All from "./All/All"
import Come from "./Come/Come"
import Color from "./Color/Color"
import Right from "./Right/Right"
import Said from "./Said/Said"
import Follow from "./Follow/Follow"
import Ride from "./Ride/Ride"
import Put from "./Put/Put"
import Wear from "./Wear/Wear"
import Sit from "./Sit/Sit"
import Body from "./Body/Body"
import Left from "./Left/Left"
import Who from "./Who/Who"
import What from "./What/What"
import When from "./When/When"
import Where from "./Where/Where"
import Why from "./Why/Why"
import Count from "./Count/Count"
import Please from "./Please/Please"
import Shapes from "./Shapes/Shapes"
import Numbers from "./Numbers/Numbers"
import Letters from "./Letters/Letters"
import Weather from "./Weather/Weather"
import Animal from "./Animal/Animal"
import Template from "./template"

function App() {


  return (

    <div>
      <Router>
        <Switch>
          <Route path="/Template" component={Template}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/In" component={In}/>
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
          <Route exact path="/Good/Great" component={Great}/>
          <Route exact path="/Good/Wonderful" component={Wonderful}/>
          <Route exact path="/Bad" component={Bad}/>
          <Route exact path="/Down" component={Down}/>
          <Route exact path="/Not" component={Not}/>
          <Route exact path="/Done" component={Done}/>
          <Route exact path="/Time" component={Time}/>
          <Route exact path="/End" component={End}/>
          <Route exact path="/Work" component={Work}/>
          <Route exact path="/Want" component={Want}/>
          <Route exact path="/And" component={And}/>
          <Route exact path="/That" component={That}/>
          <Route exact path="/There" component={There}/>
          <Route exact path="/Spell" component={Spell}/>
          <Route exact path="/Am" component={Am}/>
          <Route exact path="/Watch" component={Watch}/>
          <Route exact path="/Read" component={Read}/>
          <Route exact path="/Like" component={Like}/>
          <Route exact path="/Do" component={Do}/>
          <Route exact path="/Find" component={Find}/>
          <Route exact path="/Go" component={Go}/>
          <Route exact path="/Get" component={Get}/>
          <Route exact path="/Help" component={Help}/>
          <Route exact path="/Look" component={Look}/>
          <Route exact path="/Talk" component={Talk}/>
          <Route exact path="/Think" component={Think}/>
          <Route exact path="/Hear" component={Hear}/>
          <Route exact path="/Make" component={Make}/>
          <Route exact path="/Need" component={Need}/>
          <Route exact path="/Turn" component={Turn}/>
          <Route exact path="/Stop" component={Stop}/>
          <Route exact path="/Slow" component={Slow}/>
          <Route exact path="/Fast" component={Fast}/>
          <Route exact path="/Love" component={Love}/>
          <Route exact path="/Feel" component={Feel}/>
          <Route exact path="/New" component={New}/>
          <Route exact path="/Have" component={Have}/>
          <Route exact path="/All" component={All}/>
          <Route exact path="/Come" component={Come}/>
          <Route exact path="/Color" component={Color}/>
          <Route exact path="/Right" component={Right}/>
          <Route exact path="/Said" component={Said}/>
          <Route exact path="/Ride" component={Ride}/>
          <Route exact path="/Put" component={Put}/>
          <Route exact path="/Sit" component={Sit}/>
          <Route exact path="/Wear" component={Wear}/>
          <Route exact path="/Body" component={Body}/>
          <Route exact path="/Left" component={Left}/>
          <Route exact path="/Who" component={Who}/>
          <Route exact path="/What" component={What}/>
          <Route exact path="/When" component={When}/>
          <Route exact path="/Where" component={Where}/>
          <Route exact path="/Why" component={Why}/>
          <Route exact path="/Count" component={Count}/>
          <Route exact path="/Please" component={Please}/>
          <Route exact path="/Shapes" component={Shapes}/>
          <Route exact path="/Numbers" component={Numbers}/>
          <Route exact path="/Letters" component={Letters}/>
          <Route exact path="/Weather" component={Weather}/>
          <Route exact path="/Animal" component={Animal}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Link as RouterLink } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import React from "react"
import Home from "./Home"
import Eat from "./Eat/Eat"
import Condiment from "./Eat/Condiment"
import Dairy from "./Eat/Dairy"
import Fruit from "./Eat/Fruit"
import Meals from "./Eat/Meals"
import Meat from "./Eat/Meat"
import Snack from "./Eat/Snack"
import Vegetables from "./Eat/Vegetables"
import Play from "./Play/Play"
import Games from "./Play/Games"
import Lose from "./Play/Lose"
import Skip from "./Play/Skip"
import Slide from "./Play/Slide"
import Swing from "./Play/Swing"
import Toy from "./Play/Toy"
import Win from "./Play/Win"
import Match from "./Play/Match"
import Party from "./Play/Party"
import Difficult from"./Play/Difficult"
import He from "./Pronouns/He"
import I from "./Pronouns/I"
import It from "./Pronouns/It"
import Me from "./Pronouns/Me"
import My from "./Pronouns/My"
import She from "./Pronouns/She"
import They from "./Pronouns/They"
import Us from "./Pronouns/Us"
import We from "./Pronouns/We"
import You from "./Pronouns/You"
import Drink from "./Drink/Drink"
import DrinkNt from "./Drink/Nt"
import Want from "./Want/Want"
import WantNt from "./Want/Nt"
import Time from "./Time/Time"
import TimeTime from "./Time/TimeTime"
import Calendar from "./Time/Calendar"
import TDate from "./Time/TDate"
import TimeNt from "./Time/TimeNt"
import Good from "./Good/Good"
import Great from "./Good/Great"
import Wonderful from "./Good/Wonderful"
import Bad from "./Bad/Bad"
import Awful from "./Bad/Awful"
import Divorce from "./Bad/Divorce"
import Fight from "./Bad/Fight"
import Mistake from "./Bad/Mistake"
import Terrible from "./Bad/Terrible"
import Trouble from "./Bad/Trouble"
import In from "./In/In"
import Not from "./Not/Not"
import Done from "./Done/Done"
import End from "./End/End"
import Direct from "./End/Direct"
import US from "./End/US"
import Work from "./Work/Work"
import Abuse from "./Work/Abuse"
import Achieve from "./Work/Achieve"
import Adjust from "./Work/Adjust"
import Bend from "./Work/Bend"
import Break from "./Work/Break"
import Complete from "./Work/Complete"
import Employ from "./Work/Employ"
import Fix from "./Work/Fix"
import Hit from "./Work/Hit"
import Hook from "./Work/Hook"
import Jobs from "./Work/Jobs"
import Tools from "./Work/Tools"
import Use from "./Work/Use"
import WorkNt from "./Work/WorkNt"
import And from "./And/And"
import That from "./That/That"
import There from "./There/There"
import Spell from "./Spell/Spell"
import Am from "./Am/Am"
import AmNt from "./Am/Nt"
import Watch from "./Watch/Watch"
import Read from "./Read/Read"
import ReadNt from "./Read/Nt"
import Material from "./Read/Material"
import Like from "./Like/Like"
import Do from "./Do/Do"
import DoNt from "./Do/Nt"
import Catch from "./Do/Catch"
import Dig from "./Do/Dig"
import Fold from "./Do/Fold"
import Hold from "./Do/Hold"
import Lay from "./Do/Lay"
import Pass from "./Do/Pass"
import Pick from "./Do/Pick"
import Point from "./Do/Point"
import Pull from "./Do/Pull"
import Push from "./Do/Push"
import Remember from "./Do/Remember"
import Roll from "./Do/Roll"
import Rough from "./Do/Rough"
import Smooth from "./Do/Smooth"
import Soft from "./Do/Soft"
import Throw from "./Do/Throw"
import Touch from "./Do/Touch"
import Wave from "./Do/Wave"
import Wrap from "./Do/Wrap"
import Find from "./Find/Find"
import Go from "./Go/Go"
import GoNt from "./Go/Nt"
import Building from "./Go/Building"
import Get from "./Get/Get"
import Dark from "./Get/Dark"
import Fall from "./Get/Fall"
import Flower from "./Get/Flower"
import Light from "./Get/Light"
import Sky from "./Get/Sky"
import Space from "./Get/Space"
import Terrain from "./Get/Terrain"
import Trees from "./Get/Trees"
import GWater from "./Get/GWater"
import Help from "./Help/Help"
import Ache from "./Help/Ache"
import Bleed from "./Help/Bleed"
import Breathe from "./Help/Breathe"
import Brush from "./Help/Brush"
import Burn from "./Help/Burn"
import Clean from "./Help/Clean"
import Comb from "./Help/Comb"
import Cough from "./Help/Cough"
import Dirty from "./Help/Dirty"
import Drool from "./Help/Drool"
import Dry from "./Help/Dry"
import Fart from "./Help/Fart"
import Flush from "./Help/Flush"
import Health from "./Help/Health"
import Hurt from "./Help/Hurt"
import Itch from "./Help/Itch"
import Mess from "./Help/Mess"
import Pee from "./Help/Pee"
import Poop from "./Help/Poop"
import Scratch from "./Help/Scratch"
import Sneeze from "./Help/Sneeze"
import Toiletries from "./Help/Toiletries"
import Wash from "./Help/Wash"
import Wipe from "./Help/Wipe"
import Look from "./Look/Look"
import Talk from "./Talk/Talk"
import Think from "./Think/Think"
import ThinkNt from "./Think/ThinkNt"
import Hear from "./Hear/Hear"
import Make from "./Make/Make"
import Holiday from "./Make/Holiday"
import Shape from "./Make/Shape"
import Need from "./Need/Need"
import NeedNt from "./Need/NeedNt"
import Turn from "./Turn/Turn"
import Stop from "./Stop/Stop"
import StopNt from "./Stop/Nt"
import Fast from "./Fast/Fast"
import Equipment from "./Fast/Equipment"
import Sports from "./Fast/Sports"
import Slow from "./Slow/Slow"
import SlowNt from "./Slow/SlowNt"
import Love from "./Love/Love"
import LoveNt from "./Love/LoveNt"
import More from "./More/More"
import New from "./New/New"
import Cheat from "./New/Cheat"
import False from "./New/False"
import Grade from "./New/Grade"
import Graduate from "./New/Graduate"
import Learn from "./New/Learn"
import NewNt from "./New/NewNt"
import Study from "./New/Study"
import Sure from "./New/Sure"
import Teach from "./New/Teach"
import True from "./New/True"
import Try from "./New/Try"
import Have from "./Have/Have"
import HaveNt from "./Have/Nt"
import Pay from "./Have/Pay"
import Actual from "./Have/Actual"
import Check from "./Have/Check"
import Cheap from "./Have/Cheap"
import Expensive from "./Have/Expensive"
import Own from "./Have/Own"
import Buy from "./Have/Buy" 
import Shop from "./Have/Shop"
import Inexpensive from "./Have/Inexpensive"
import Cost from "./Have/Cost"
import Change from "./Have/Change"
import Feel from "./Feel/Feel"
import All from "./All/All"
import AllNt from "./All/AllNt"
import Adopt from "./All/Adopt"
import Allow from "./All/Allow"
import Belong from "./All/Belong"
import Family from "./All/Family"
import Foster from "./All/Foster"
import Marry from "./All/Marry"
import Come from "./Come/Come"
import Rainbow from "./Rainbow/Rainbow"
import Right from "./Right/Right"
import RightNt from "./Right/Nt"
import Said from "./Said/Said"
import Follow from "./Follow/Follow"
import Baby from "./Follow/Baby"
import People from "./Follow/People"
import Strange from "./Follow/Strange"
import Ride from "./Ride/Ride"
import RideNt from "./Ride/Nt"
import Air from "./Ride/Air"
import VWater from "./Ride/Water"
import Land from "./Ride/Land"
import RParts from "./Ride/Parts"
import Road from "./Ride/Road"
import Drive from "./Ride/Drive"
import Fly from "./Ride/Fly"
import Move from "./Ride/Move"
import Front from "./Ride/Front"
import Back from "./Ride/Back"
import Put from "./Put/Put"
import Wear from "./Wear/Wear"
import WearNt from "./Wear/Nt"
import Clothing from "./Wear/Clothing"
import WButton from "./Wear/WButton"
import Dress from "./Wear/Dress"
import Loose from "./Wear/Loose"
import Tie from "./Wear/Tie"
import Tight from "./Wear/Tight"
import Zip from "./Wear/Zip"
import Sit from "./Sit/Sit"
import Body from "./Body/Body"
import Left from "./Left/Left"
import Who from "./Who/Who"
import What from "./What/What"
import When from "./When/When"
import Where from "./Where/Where"
import Why from "./Why/Why"
import Count from "./Count/Count"
import Add from "./Count/Add"
import Subtract from "./Count/Subtract"
import Multiply from "./Count/Multiply"
import Divide from "./Count/Divide"
import Please from "./Please/Please"
import Shapes from "./Shapes/Shapes"
import Letters from "./Letters/Letters"
import Weather from "./Weather/Weather"
import Animal from "./Animal/Animal"
import AnimalBaby from "./Animal/AnimalBaby"
import Birds from "./Animal/Birds"
import Bring from "./Come/Bring"
import Bugs from "./Animal/Bugs"
import Carry from "./Come/Carry"
import Dino from "./Animal/Dino"
import Fantasy from "./Animal/Fantasy"
import Forest from "./Animal/Forest"
import Homes from "./Animal/Homes"
import Parts from "./Animal/Parts"
import Pet from "./Animal/Pet"
import Receive from "./Come/Receive"
import Water from "./Animal/Water"
import Zoo from "./Animal/Zoo"
import Template from "./template"
import Big from "./Big/Big"
import Strong from "./Big/Strong"
import Thick from "./Big/Thick"
import Heavy from "./Big/Heavy"
import Lift from "./Big/Lift"
import Drop from "./Big/Drop"
import Fat from "./Big/Fat"
import Powerful from "./Big/Powerful"
import BigNt from "./Big/Nt"
import Ask from "./Ask/Ask"
import Little from "./Little/Little"
import Weak from "./Little/Weak"
import Skinny from "./Little/Skinny"
import Thin from "./Little/Thin"
import Live from "./Live/Live"
import LHome from "./Live/LHome"

function App() {

  return (

    <div>
      <Router>
        <Switch>
          <Route exact path="/Template" component={Template}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/In" component={In}/>
          <Route exact path="/Big" component={Big}/>
          <Route exact path="/Big/Strong" component={Strong}/>
          <Route exact path="/Big/Thick" component={Thick}/>
          <Route exact path="/Big/Heavy" component={Heavy}/>
          <Route exact path="/Big/Lift" component={Lift}/>
          <Route exact path="/Big/Drop" component={Drop}/>
          <Route exact path="/Big/Fat" component={Fat}/>
          <Route exact path="/Big/Powerful" component={Powerful}/>
          <Route exact path="/Big/Nt" component={BigNt}/>
          <Route exact path="/Little" component={Little}/>
          <Route exact path="/Little/Weak" component={Weak}/>
          <Route exact path="/Little/Skinny" component={Skinny}/>
          <Route exact path="/Little/Thin" component={Thin}/>
          <Route exact path="/Ask" component={Ask}/>
          <Route exact path="/Eat" component={Eat}/>
          <Route exact path="/Eat/Condiment" component={Condiment}/>
          <Route exact path="/Eat/Dairy" component={Dairy}/>
          <Route exact path="/Eat/Fruit" component={Fruit}/>
          <Route exact path="/Eat/Meals" component={Meals}/>
          <Route exact path="/Eat/Meat" component={Meat}/>
          <Route exact path="/Eat/Snack" component={Snack}/>
          <Route exact path="/Eat/Vegetables" component={Vegetables}/>
          <Route exact path="/Play" component={Play}/>
          <Route exact path="/Play/Difficult" component={Difficult}/>
          <Route exact path="/Play/Games" component={Games}/>
          <Route exact path="/Play/Lose" component={Lose}/>
          <Route exact path="/Play/Match" component={Match}/>
          <Route exact path="/Play/Party" component={Party}/>
          <Route exact path="/Play/Skip" component={Skip}/>
          <Route exact path="/Play/Side" component={Slide}/>
          <Route exact path="/Play/Swing" component={Swing}/>
          <Route exact path="/Play/Toy" component={Toy}/>
          <Route exact path="/Play/Win" component={Win}/>
          <Route exact path="/He" component={He}/>
          <Route exact path="/I" component={I}/>
          <Route exact path="/It" component={It}/>
          <Route exact path="/Me" component={Me}/>
          <Route exact path="/My" component={My}/>
          <Route exact path="/She" component={She}/>
          <Route exact path="/They" component={They}/>
          <Route exact path="/Us" component={Us}/>
          <Route exact path="/We" component={We}/>
          <Route exact path="/You" component={You}/>
          <Route exact path="/Drink" component={Drink}/>
          <Route exact path="/Drink/Nt" component={DrinkNt}/>
          <Route exact path="/Want" component={Want}/>
          <Route exact path="/Want/Nt" component={WantNt}/>
          <Route exact path="/Time" component={Time}/>
          <Route exact path="/Time/TimeTime" component={TimeTime}/>
          <Route exact path="/Time/Calendar" component={Calendar}/>
          <Route exact path="/Time/TDate" component={TDate}/>
          <Route exact path="/Time/TimeNt" component={TimeNt}/>
          <Route exact path="/Good" component={Good}/>
          <Route exact path="/Good/Great" component={Great}/>
          <Route exact path="/Good/Wonderful" component={Wonderful}/>
          <Route exact path="/Bad" component={Bad}/>
          <Route exact path="/Bad/Awful" component={Awful}/>
          <Route exact path="/Bad/Divorce" component={Divorce}/>
          <Route exact path="/Bad/Fight" component={Fight}/>
          <Route exact path="/Bad/Mistake" component={Mistake}/>
          <Route exact path="/Bad/Terrible" component={Terrible}/>
          <Route exact path="/Bad/Trouble" component={Trouble}/>
          <Route exact path="/Not" component={Not}/>
          <Route exact path="/Done" component={Done}/>
          <Route exact path="/End" component={End}/>
          <Route exact path="/End/Direct" component={Direct}/>
          <Route exact path="/End/US" component={US}/>
          <Route exact path="/Work" component={Work}/>
          <Route exact path="/Work/Abuse" component={Abuse}/>
          <Route exact path="/Work/Achieve" component={Achieve}/>
          <Route exact path="/Work/Adjust" component={Adjust}/>
          <Route exact path="/Work/Bend" component={Bend}/>
          <Route exact path="/Work/Break" component={Break}/>
          <Route exact path="/Work/Complete" component={Complete}/>
          <Route exact path="/Work/Employ" component={Employ}/>
          <Route exact path="/Work/Fix" component={Fix}/>
          <Route exact path="/Work/Hit" component={Hit}/>
          <Route exact path="/Work/Hook" component={Hook}/>
          <Route exact path="/Work/Jobs" component={Jobs}/>
          <Route exact path="/Work/Tools" component={Tools}/>
          <Route exact path="/Work/Use" component={Use}/>
          <Route exact path="/Work/WorkNt" component={WorkNt}/>
          <Route exact path="/Want" component={Want}/>
          <Route exact path="/And" component={And}/>
          <Route exact path="/That" component={That}/>
          <Route exact path="/There" component={There}/>
          <Route exact path="/Spell" component={Spell}/>
          <Route exact path="/Am" component={Am}/>
          <Route exact path="/Am/Nt" component={AmNt}/>
          <Route exact path="/Watch" component={Watch}/>
          <Route exact path="/Read" component={Read}/>
          <Route exact path="/Read/Nt" component={ReadNt}/>
          <Route exact path="/Read/Material" component={Material}/>
          <Route exact path="/Like" component={Like}/>
          <Route exact path="/Do" component={Do}/>
          <Route exact path="/Do/Nt" component={DoNt}/>
          <Route exact path="/Do/Catch" component={Catch}/>
          <Route exact path="/Do/Dig" component={Dig}/>
          <Route exact path="/Do/Fold" component={Fold}/>
          <Route exact path="/Do/Hold" component={Hold}/>
          <Route exact path="/Do/Lay" component={Lay}/>
          <Route exact path="/Do/Pass" component={Pass}/>
          <Route exact path="/Do/Pick" component={Pick}/>
          <Route exact path="/Do/Point" component={Point}/>
          <Route exact path="/Do/Pull" component={Pull}/>
          <Route exact path="/Do/Push" component={Push}/>
          <Route exact path="/Do/Remember" component={Remember}/>
          <Route exact path="/Do/Roll" component={Roll}/>
          <Route exact path="/Do/Rough" component={Rough}/>
          <Route exact path="/Do/Smooth" component={Smooth}/>
          <Route exact path="/Do/Soft" component={Soft}/>
          <Route exact path="/Do/Throw" component={Throw}/>
          <Route exact path="/Do/Touch" component={Touch}/>
          <Route exact path="/Do/Wave" component={Wave}/>
          <Route exact path="/Do/Wrap" component={Wrap}/>
          <Route exact path="/Find" component={Find}/>
          <Route exact path="/Go" component={Go}/>
          <Route exact path="/Go/Nt" component={GoNt}/>
          <Route exact path="/Go/Building" component={Building}/>
          <Route exact path="/Get" component={Get}/>
          <Route exact path="/Get/Dark" component={Dark}/>
          <Route exact path="/Get/Fall" component={Fall}/>
          <Route exact path="/Get/Flower" component={Flower}/>
          <Route exact path="/Get/GWater" component={GWater}/>
          <Route exact path="/Get/Light" component={Light}/>
          <Route exact path="/Get/Sky" component={Sky}/>
          <Route exact path="/Get/Space" component={Space}/>
          <Route exact path="/Get/Terrain" component={Trees}/>
          <Route exact path="/Get/Trees" component={Trees}/>
          <Route exact path="/Help" component={Help}/>
          <Route exact path="/Help/Ache" component={Ache}/>
          <Route exact path="/Help/Bleed" component={Bleed}/>
          <Route exact path="/Help/Breathe" component={Breathe}/>
          <Route exact path="/Help/Brush" component={Brush}/>
          <Route exact path="/Help/Burn" component={Burn}/>
          <Route exact path="/Help/Clean" component={Clean}/>
          <Route exact path="/Help/Comb" component={Comb}/>
          <Route exact path="/Help/Cough" component={Cough}/>
          <Route exact path="/Help/Dirty" component={Dirty}/>
          <Route exact path="/Help/Drool" component={Drool}/>
          <Route exact path="/Help/Dry" component={Dry}/>
          <Route exact path="/Help/Fart" component={Fart}/>
          <Route exact path="/Help/Flush" component={Flush}/>
          <Route exact path="/Help/Health" component={Health}/>
          <Route exact path="/Help/Hurt" component={Hurt}/>
          <Route exact path="/Help/Itch" component={Itch}/>
          <Route exact path="/Help/Mess" component={Mess}/>
          <Route exact path="/Help/Pee" component={Pee}/>
          <Route exact path="/Help/Poop" component={Poop}/>
          <Route exact path="/Help/Scratch" component={Scratch}/>
          <Route exact path="/Help/Sneeze" component={Sneeze}/>
          <Route exact path="/Help/Toiletries" component={Toiletries}/>
          <Route exact path="/Help/Wash" component={Wash}/>
          <Route exact path="/Help/Wipe" component={Wipe}/>
          <Route exact path="/Look" component={Look}/>
          <Route exact path="/Talk" component={Talk}/>
          <Route exact path="/Think" component={Think}/>
          <Route exact path="/Think/ThinkNt" component={ThinkNt}/>
          <Route exact path="/Hear" component={Hear}/>
          <Route exact path="/Make" component={Make}/>
          <Route exact path="/Make/Holiday" component={Holiday}/>
          <Route exact path="/Make/Shape" component={Shape}/>
          <Route exact path="/Need" component={Need}/>
          <Route exact path="/Need/NeedNt" component={NeedNt}/>
          <Route exact path="/Turn" component={Turn}/>
          <Route exact path="/Stop" component={Stop}/>
          <Route exact path="/Stop/Nt" component={StopNt}/>
          <Route exact path="/Slow" component={Slow}/>
          <Route exact path="/Slow/SlowNt" component={SlowNt}/>
          <Route exact path="/Fast" component={Fast}/>
          <Route exact path="/Fast/Equipment" component={Equipment}/>
          <Route exact path="/Fast/Sports" component={Sports}/>
          <Route exact path="/Love" component={Love}/>
          <Route exact path="/Love/LoveNt" component={LoveNt}/>
          <Route exact path="/Feel" component={Feel}/>
          <Route exact path="/More" component={More}/>
          <Route exact path="/New" component={New}/>
          <Route exact path="/New/Cheat" component={Cheat}/>
          <Route exact path="/New/False" component={False}/>
          <Route exact path="/New/Grade" component={Grade}/>
          <Route exact path="/New/Graduate" component={Graduate}/>
          <Route exact path="/New/Learn" component={Learn}/>
          <Route exact path="/New/NewNt" component={NewNt}/>
          <Route exact path="/New/Study" component={Study}/>
          <Route exact path="/New/Sure" component={Sure}/>
          <Route exact path="/New/Teach" component={Teach}/>
          <Route exact path="/New/True" component={True}/>
          <Route exact path="/New/Try" component={Try}/>
          <Route exact path="/Have" component={Have}/>
          <Route exact path="/Have/Nt" component={HaveNt}/>
          <Route exact path="/Have/Pay" component={Pay}/>
          <Route exact path="/Have/Actual" component={Actual}/>
          <Route exact path="/Have/Check" component={Check}/>
          <Route exact path="/Have/Cheap" component={Cheap}/>
          <Route exact path="/Have/Expensive" component={Expensive}/>
          <Route exact path="/Have/Own" component={Own}/>
          <Route exact path="/Have/Buy" component={Buy}/>
          <Route exact path="/Have/Shop" component={Shop}/>
          <Route exact path="/Have/Inexpensive" component={Inexpensive}/>
          <Route exact path="/Have/Cost" component={Cost}/>
          <Route exact path="/Have/Change" component={Change}/>
          <Route exact path="/All" component={All}/>
          <Route exact path="/All/AllNt" component={AllNt}/>
          <Route exact path="/All/Adopt" component={Adopt}/>
          <Route exact path="/All/Allow" component={Allow}/>
          <Route exact path="/All/Belong" component={Belong}/>
          <Route exact path="/All/Family" component={Family}/>
          <Route exact path="/All/Foster" component={Foster}/>
          <Route exact path="/All/Marry" component={Marry}/>
          <Route exact path="/Come" component={Come}/>
          <Route exact path="/Rainbow" component={Rainbow}/>
          <Route exact path="/Right" component={Right}/>
          <Route exact path="/Right/Nt" component={RightNt}/>
          <Route exact path="/Said" component={Said}/>
          <Route exact path="/Ride" component={Ride}/>
          <Route exact path="/Ride/Nt" component={RideNt}/>
          <Route exact path="/Ride/Air" component={Air}/>
          <Route exact path="/Ride/Water" component={VWater}/>
          <Route exact path="/Ride/Land" component={Land}/>
          <Route exact path="/Ride/Parts" component={RParts}/>
          <Route exact path="/Ride/Road" component={Road}/>
          <Route exact path="/Ride/Drive" component={Drive}/>
          <Route exact path="/Ride/Fly" component={Fly}/>
          <Route exact path="/Ride/Move" component={Move}/>
          <Route exact path="/Ride/Front" component={Front}/>
          <Route exact path="/Ride/Back" component={Back}/>
          <Route exact path="/Put" component={Put}/>
          <Route exact path="/Sit" component={Sit}/>
          <Route exact path="/Wear" component={Wear}/>
          <Route exact path="/Wear/Nt" component={WearNt}/>
          <Route exact path="/Wear/Clothing" component={Clothing}/>
          <Route exact path="/Wear/WButton" component={WButton}/>
          <Route exact path="/Wear/Dress" component={Dress}/>
          <Route exact path="/Wear/Loose" component={Loose}/>
          <Route exact path="/Wear/Tie" component={Tie}/>
          <Route exact path="/Wear/Tight" component={Tight}/>
          <Route exact path="/Wear/Zip" component={Zip}/>
          <Route exact path="/Body" component={Body}/>
          <Route exact path="/Left" component={Left}/>
          <Route exact path="/Who" component={Who}/>
          <Route exact path="/What" component={What}/>
          <Route exact path="/When" component={When}/>
          <Route exact path="/Where" component={Where}/>
          <Route exact path="/Why" component={Why}/>
          <Route exact path="/Count" component={Count}/>
          <Route exact path="/Count/Add" component={Add}/>
          <Route exact path="/Count/Subtract" component={Subtract}/>
          <Route exact path="/Count/Multiply" component={Multiply}/>
          <Route exact path="/Count/Divide" component={Divide}/>
          <Route exact path="/Please" component={Please}/>
          <Route exact path="/Shapes" component={Shapes}/>
          <Route exact path="/Letters" component={Letters}/>
          <Route exact path="/Weather" component={Weather}/>
          <Route exact path="/Animal" component={Animal}/>
          <Route exact path="/Animal/AnimalBaby" component={AnimalBaby}/>
          <Route exact path="/Animal/Birds" component={Birds}/>
          <Route exact path="/Come/Bring" component={Bring}/>
          <Route exact path="/Animal/Bugs" component={Bugs}/>
          <Route exact path="/Come/Carry" component={Carry}/>
          <Route exact path="/Animal/Dino" component={Dino}/>
          <Route exact path="/Animal/Fantasy" component={Fantasy}/>
          <Route exact path="/Animal/Forest" component={Forest}/>
          <Route exact path="/Animal/Homes" component={Homes}/>
          <Route exact path="/Animal/Parts" component={Parts}/>
          <Route exact path="/Animal/Pet" component={Pet}/>
          <Route exact path="/Come/Receive" component={Receive}/>
          <Route exact path="/Animal/Water" component={Water}/>
          <Route exact path="/Animal/Zoo" component={Zoo}/>
          <Route exact path="/Follow" component={Follow}/>
          <Route exact path="/Follow/Baby" component={Baby}/>
          <Route exact path="/Follow/People" component={People}/>
          <Route exact path="/Follow/Strange" component={Strange}/>
          <Route exact path="/Live" component={Live}/>
          <Route exact path="/Live/LHome" component={LHome}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

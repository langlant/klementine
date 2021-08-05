import React, {useState} from 'react'
import { Button, Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { Link as RouterLink } from 'react-router-dom';
import Speech from 'speak-tts'



const useStyles = makeStyles({
  helloThereStyle:{
    fontStyle: 'oblique',
    color: "blue",
    fontSize: '30px'
  },
  buttonStyles: {
    color: 'blue',
    flexDirection: 'column'

  }
});
  const click = () =>{
    console.log("click")
  }
  
const speech = new Speech() // will throw an exception if not browser supported
if(speech.hasBrowserSupport()) { // returns a boolean
    console.log("speech synthesis supported")
}

  speech.init().then((data) => {
      // The "data" object contains the list of available voices and the voice synthesis params
      console.log("Speech is ready, voices are available", data)
  }).catch(e => {
      console.error("An error occured while initializing : ", e)
  })

function Stop({route}) {
  
  const classes = useStyles(); 

  const [textString, setTextString] = useState("")
  
  function setText(word){
    var newString = textString
    setTextString(newString + " " + word)
  }

  function tokenDelete(word){
    var str = word
    const myArr = str.split(" ")
    var newStr = ""
    for(let x = 0; x < myArr.length-1; x++ ){
      newStr +=  " " + myArr[x]
    }

    setTextString(newStr)
  }

  function buttonSpeak(word) {
    speech.speak({
      text: word,
  }).then(() => {
      console.log("Success !")
  }).catch(e => {
      console.error("An error occurred :", e)
  })

    setText(word)
  }

  function setLText(word){
    var newString = textString
    setTextString(newString + word)
  }
  
  function buttonSpeakL(word) {
    setLText(word)

    speech.speak({
      text: textString,
  }).then(() => {
      console.log("Success !")
  }).catch(e => {
      console.error("An error occurred :", e)
  })

  }
  
  return (
    <div className="Home">
      <Typography color="primary" variant="h1" className={classes.helloThereStyle}>
        Stop
      </Typography>
      <div>
        <Grid container>
          <form className={classes.root} noValidate autoComplete="off">
          <TextField xs={11} id="outlined-basic" label={textString} variant="outlined"/>
          <Button 
            className={classes.buttonStyles} 
            variant="outlined" 
            color="primary"
            startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
            onClick={()=> {speech.cancel(); tokenDelete(textString);}}
            >Delete
            </Button>
            <Button 
            className={classes.buttonStyles} 
            variant="outlined" 
            color="primary"
            startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
            onClick={()=> speech.speak({
              text: textString,
          }).then(() => {
              console.log("Success !")
          }).catch(e => {
              console.error("An error occurred :", e)
          })}
            >Replay
            </Button>
          </form>
        </Grid>
      </div>
      <Grid container>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={"/Assets/back.png"}/>}
          component={RouterLink} 
          to="/"
          >BACK
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >002
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeakL("ly")}
          to="/"
          >-ly
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeakL("ing")}
          to="/"
          >+ing
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeakL("ed")}
          to="/"
          >+ed
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeakL("er")}
          to="/"
          >+er
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeakL("est")}
          to="/"
          >+est
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >008
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeakL(".")}
          to="/"
          >.
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeakL("'s")}
          to="/"
          >'s
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeakL("?")}
          to="/"
          >?
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >012
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Should I")}
          to="/"
          >Should I
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Should You")}
          to="/"
          >Should You
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >015
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >016
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >017
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >018
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >019
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >020
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >021
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >022
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >023
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >024
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} onClick={click} />}
          >25
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Should We")}
          to="/"
          >Should We
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Wait")}
          to="/"
          >Wait
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Waits")}
          to="/"
          >Waits
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Waiting")}
          to="/"
          >Waiting
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Waited")}
          to="/"
          >Waited
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("To Wait")}
          to="/"
          >To Wait
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >032
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >033
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >034
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >035
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >036
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} onClick={click} />}
          >37
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >38
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >039
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >040
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >41
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >042
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >043
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >044
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >045
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >046
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >047
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >048
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} onClick={click} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Should It")}
          to="/"
          >Should It
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Should They")}
          to="/"
          >Should They
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("")}
          to="/"
          >Stop
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Stops")}
          to="/"
          >Stops
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Stopping")}
          to="/"
          >Stopping
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Stopped")}
          to="/"
          >Stopped
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("To Stop")}
          to="/"
          >To Stop
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >056
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >057
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >058
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >059
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >060
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} onClick={click} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Should She")}
          to="/"
          >Should She
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Should He")}
          to="/"
          >Should He
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >063
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >064
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >065
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >066
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >067
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >068
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >069
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >070
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >071
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >072
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} onClick={click} />}
          >073
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >074
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Quit")}
          to="/"
          >Quit
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Quits")}
          to="/"
          >Quits
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Quitting")}
          to="/"
          >Quitting
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("To Quit")}
          to="/"
          >To Quit
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Quitter")}
          to="/"
          >Quitter
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Quitters")}
          to="/"
          >Quitters
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >081
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >082
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >083
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >084
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} onClick={click} />}
          >085
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >086
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >087
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >088
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >089
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >090
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >091
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >092
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >093
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >094
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >095
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >096
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} onClick={click} />}
          component={RouterLink}
          onClick={()=> setTextString("")}
          to="/"
          >CLEAR
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          to="/Stop/Nt"
          >Nt
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >099
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >100
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >101
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >102
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >103
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >104
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >105
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >106
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >107
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >108
          </Button>
        </Grid>
      </Grid>
    </div>

  );
}

export default Stop;

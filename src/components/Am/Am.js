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

function Am({route}) {
  
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
    speech.speak({
      text: word,
  }).then(() => {
      console.log("Success !")
  }).catch(e => {
      console.error("An error occurred :", e)
  })

    setLText(word)
  }
  
  return (
    <div className="Home">
      <Typography color="primary" variant="h1" className={classes.helloThereStyle}>
        Am
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
          >
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >011
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
          onClick={()=> buttonSpeak("Am I")}
          to="/"
          >Am I
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Are You")}
          to="/"
          >Are You
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
          onClick={()=> buttonSpeak("Are We")}
          to="/"
          >Are We
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >027
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Be")}
          to="/"
          >Be
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Being")}
          to="/"
          >Being
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Been")}
          to="/"
          >Been
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("To Be")}
          to="/"
          >To Be
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Must")}
          to="/"
          >Must
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Wil")}
          to="/"
          >Will
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
          onClick={()=> buttonSpeak("Is It")}
          to="/"
          >Is It
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Are They")}
          to="/"
          >Are They
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Am")}
          to="/"
          >Am
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >052
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Busy")}
          to="/"
          >Busy
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Busier")}
          to="/"
          >Busier
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Busiest")}
          to="/"
          >Busiest
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Busily")}
          to="/"
          >Busily
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Might")}
          to="/"
          >Might
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Should")}
          to="/"
          >Should
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
          onClick={()=> buttonSpeak("Is She")}
          to="/"
          >Is She
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Is He")}
          to="/"
          >Is He
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
          >075
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >076
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >077
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >078
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >079
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Would")}
          to="/"
          >Would
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Can")}
          to="/"
          >Can
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Could")}
          to="/"
          >Could
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
          to="/Am/Nt"
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

export default Am;

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

function Drink({route}) {
  
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
        Drink
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
          onClick={()=> buttonSpeak("Chocolate")}
          to="/"
          >Chocolate Milk
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >004
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Coffee")}
          to="/"
          >Coffee
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >006
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Soda")}
          to="/"
          >Soda
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
          onClick={()=> buttonSpeak("Tea")}
          to="/"
          >Tea
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >010
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Water")}
          to="/"
          >Water
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
          onClick={()=> buttonSpeak("Can I")}
          to="/"
          >Can I
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Can You")}
          to="/"
          >Can You
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Beverage")}
          to="/"
          >Beverage
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Beverages")}
          to="/"
          >Beverages
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
          onClick={()=> buttonSpeak("Can We")}
          to="/"
          >Can We
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Hot Tea")}
          to="/"
          >Hot Tea
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >028
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Iced Tee")}
          to="/"
          >Iced Tee
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >030
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Juice")}
          to="/"
          >Juice
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Lemonade")}
          to="/"
          >Lemonade
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Milk")}
          to="/"
          >Milk
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Thirstily")}
          to="/"
          >Thirstily
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
          onClick={()=> buttonSpeak("Can It")}
          to="/"
          >Can It
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Can They")}
          to="/"
          >Can They
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
          >Drink
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Drinks")}
          to="/"
          >Drinks
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Drinking")}
          to="/"
          >Drinking
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Drank")}
          to="/"
          >Drank
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Drunk")}
          to="/"
          >Drunk
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("To Drink")}
          to="/"
          >To Drink
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
          onClick={()=> buttonSpeak("Thirsty")}
          to="/"
          >Thirsty
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Thirstier")}
          to="/"
          >Thirstier
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Thirstiest")}
          to="/"
          >Thirstiest
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
          onClick={()=> buttonSpeak("Can She")}
          to="/"
          >Can She
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Can He")}
          to="/"
          >Can He
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
          onClick={()=> buttonSpeak("Small")}
          to="/"
          >Small
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >Smaller
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >Smallest
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Medium")}
          to="/"
          >Medium
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >080
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Large")}
          to="/"
          >Large
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Larger")}
          to="/"
          >Larger
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Largest")}
          to="/"
          >Largest
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Empty")}
          to="/"
          >Empty
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Emptier")}
          to="/"
          >Emptier
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Emptiest")}
          to="/"
          >Emptiest
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
          to="/Drink/Nt"
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Suck")}
          to="/"
          >Suck
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Swallow")}
          to="/"
          >Swallow
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Blow")}
          to="/"
          >Blow
          </Button>
        </Grid>
      </Grid>
    </div>

  );
}

export default Drink;

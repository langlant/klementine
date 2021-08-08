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

function Zoo({route}) {
  
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
        Zoo
      </Typography>
      <div>
        <Grid container>
          <form className={classes.root} noValidate autoComplete="off">
          <TextField xs={11} id="outlined-basic" label={textString} variant="outlined"/>
          <Button 
            className={classes.buttonStyles} 
            variant="outlined" 
            color="primary"
            startIcon={<Avatar src={'/Assets/blank.png'} />}
            onClick={()=> {speech.cancel(); tokenDelete(textString);}}
            >Delete
            </Button>
            <Button 
            className={classes.buttonStyles} 
            variant="outlined" 
            color="primary"
            startIcon={<Avatar src={'/Assets/blank.png'} />}
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
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/bear.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Bear")}
          to="/"
          >Bear
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/elephant.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Elephant")}
          to="/"
          >Elephant
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >  
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/giraffe.jpg'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Giraffe")}
          to="/"
          >Giraffe
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >  
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/lion.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Lion")}
          to="/"
          >Lion
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >  
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/monkey.jpg'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Monkey")}
          to="/"
          >Monkey
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >  
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >  
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >  
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >0  
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >  
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} onClick={click} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/tiger.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Tiger")}
          to="/">Tiger
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/zebra.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Zebra")}
          to="/"
          >Zebra
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/hippo.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Hippopotamus")}
          to="/"
          >Hippopotamus
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/camel.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Camel")}
          to="/"
          >Camel
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/gorilla.jpg'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Gorilla")}
          to="/"
          >Gorilla
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} onClick={click} />}
          >37
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >38
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          > 
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >41
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >042
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >043
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >044
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >045
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >046
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >047
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
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
          startIcon={<Avatar src={'/Assets/blank.png'} onClick={click} />}
          >049
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >050
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Zoo")}
          to="/"
          >Zoo
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/zoo.jpg'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Zoos")}
          to="/"
          >Zoos
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/plusS.png'} />}
          >053
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >054
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >055
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >056
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >057
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >058
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >059
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
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
          startIcon={<Avatar src={'/Assets/blank.png'} onClick={click} />}
          >061
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >062
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >063
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >064
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >065
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >066
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >067
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >068
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >069
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >070
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >071
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
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
          startIcon={<Avatar src={'/Assets/blank.png'} onClick={click} />}
          >073
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >074
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/kangaroo.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Kangaroo")}
          to="/"
          >Kangaroo
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >076
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/dingo.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Dingo")}
          to="/"
          >Dingo
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >078
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/echidna.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Echidna")}
          to="/"
          >Echidna
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >080
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/platypus.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Platypus")}
          to="/"
          >Platypus
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >082
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/iguana.png'} />}
          >Iguana
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
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
          startIcon={<Avatar src={'/Assets/blank.png'} onClick={click} />}
          >085
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >086
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >087
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >088
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >089
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >090
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >091
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >092
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >093
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >094
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >095
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
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
          startIcon={<Avatar src={'/Assets/blank.png'} onClick={click} />}
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
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >098
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Penguin")}
          to="/"
          >Penguin
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >100
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Rhinoceros")}
          to="/"
          >Rhinoceros
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >102
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Otter")}
          to="/"
          >Otter
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >104
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Panda")}
          to="/"
          >Panda
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >106
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Chimpanzee")}
          to="/"
          >Chimpanzee
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'/Assets/blank.png'} />}
          >108
          </Button>
        </Grid>
      </Grid>
    </div>

  );
}

export default Zoo;

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

function Read({route}) {
  
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
        Read
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
          to="/Read/Material"
          >Material
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
          onClick={()=> buttonSpeak("Word")}
          to="/"
          >Word
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Words")}
          to="/"
          >Words
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >007
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Page")}
          to="/"
          >Page
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Pages")}
          to="/"
          >Pages
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
          onClick={()=> buttonSpeak("Story")}
          to="/"
          >Story
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Stories")}
          to="/"
          >Stories
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
          onClick={()=> buttonSpeak("Will I")}
          to="/"
          >Will I
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Will You")}
          to="/"
          >Will You
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
          onClick={()=> buttonSpeak("Will You")}
          to="/"
          >Will You
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Word")}
          to="/"
          >Word
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
          onClick={()=> buttonSpeak("Sentence")}
          to="/"
          >Sentence
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
          onClick={()=> buttonSpeak("Paragraph")}
          to="/"
          >Paragraph
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
          onClick={()=> buttonSpeak("Chapter")}
          to="/"
          >Chapter
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
          onClick={()=> buttonSpeak("Book")}
          to="/"
          >Book
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Books")}
          to="/"
          >Books
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
          onClick={()=> buttonSpeak("Will It")}
          to="/"
          >Will It
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Will They")}
          to="/"
          >Will They
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Read")}
          to="/"
          >Read
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Reads")}
          to="/"
          >Reads
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Reading")}
          to="/"
          >Reading
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("To Read")}
          to="/"
          >To Read
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          >055
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Favorite")}
          to="/"
          >Favorite
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
          onClick={()=> buttonSpeak("Will She")}
          to="/"
          >Will She
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Will He")}
          to="/"
          >Will He
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
          onClick={()=> buttonSpeak("Understand")}
          to="/"
          >Understand
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Understands")}
          to="/"
          >Understands
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Understanding")}
          to="/"
          >Understanding
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Understood")}
          to="/"
          >Understood
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("To Understand")}
          to="/"
          >To Understand
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Understandable")}
          to="/"
          >Understandable
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Understandably")}
          to="/"
          >Understandably
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
          to="/Read/Nt"
          >Nt
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Smart")}
          to="/"
          >Smart
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Smarter")}
          to="/"
          >Smarter
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Smartest")}
          to="/"
          >Smartest
          </Button>
        </Grid>
        <Grid xs={1}> 
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Smartly")}
          to="/"
          >Smartly
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
          component={RouterLink}
          onClick={()=> buttonSpeak("Dumb")}
          to="/"
          >Dumb
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Dumber")}
          to="/"
          >Dumber
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Dumbest")}
          to="/"
          >Dumbest
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button 
          className={classes.buttonStyles} 
          variant="outlined" 
          color="primary"
          startIcon={<Avatar src={'https://i.redd.it/w3kr4m2fi3111.png'} />}
          component={RouterLink}
          onClick={()=> buttonSpeak("Dumbly")}
          to="/"
          >Dumbly
          </Button>
        </Grid>
      </Grid>
    </div>

  );
}

export default Read;

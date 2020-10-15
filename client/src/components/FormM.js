import React, {useState} from 'react'
import firebase from 'firebase'
import Axios from 'axios'
import FormGroup from '@material-ui/core/FormGroup';
import Footer from './Footer';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {FormLabel, TextField, Container, Hidden}from '@material-ui/core';

import  {makeStyles, withStyles} from '@material-ui/core/styles';
import  {Typography, Button, Grid, Box,Radio, RadioGroup} from '@material-ui/core'
import SendIcon from "@material-ui/icons/Send"




const useStyles = makeStyles(theme => ({

  form: {
    top: "110%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position:"absolute",
    overflowX:'hidden',
    height:"auto",
    [theme.breakpoints.down("sm")]: {
     
      overflowX:"hidden",
      float:"none",
      height:"40vh",
      position:"absolute",
      paddingBottom:'2rem',
      justifyContent:'center',

    
      },
      [theme.breakpoints.up("lg")]: {
     
        overflowX:"hidden",
        float:"none",
        justifyContent:'center',
  
      
        },
  },

  ledgend:{
    color: 'tomato',
  },
  cbLabel:{
  color: 'tan',
},
button : {
  marginTop: "1rem",
  color:"tomato",
  borderColor: "tan",
},
}))

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color:"tomato",
    },
    "& label":{
      color: "tan",
    },
    
    "& .MuiOutLinedInput-root":{
      borderColor:"tomato",
    },
    "&:hover fieldset": {
      borderColor:"tan",
    },
    "&.Mui-focused fieldset":{
      borderColor: "tan",
    },
  },
})(TextField);






const FormM = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [service, setService] = useState('');
  const [launch, setLaunch] = useState('');
  const [value, setValue] = useState('female');

  const [platform,setPlatform] = useState({
    WP: false,
    WIX: false,
    Code:false,
    Others: false,
  })
  const [domain, setDomain] = useState({
    both:false,
    hosting:false,
    DandH:false,
    Neither:false
  })
  
  function onOpChange(e) {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  }
  
  const handleChange = (event) => {
    setPlatform({ ...platform, [event.target.name]: event.target.checked });
  }
  const { WP, WIX, Code,Others } = platform;


  const handleChangedomain = (event) =>{
    setDomain({ ...domain, [event.target.name]: event.target.checked });
  }
  const {both, hosting, DandH, Neither} = domain;

  const handleSubmit = (e) =>{
  e.preventDefault();
  const variables = {
      email:firebase.auth().currentUser.email,
      name: name,
      link:link,
      domain: domain,
      platform: platform,
      radiobox: value,
      service: service,
      launch: launch,
  }

  console.log(variables)
  Axios.post('/api/uploadInfo', variables)
      .then(response => {
          if (response.data.success) {
              alert('Product Successfully Uploaded')
          
          } else {
              alert('Failed to upload Product')
          }
      })

  }

const classes = useStyles()
return (
 <>
<Box component="div" style={{background:"#233",height:"200vh" }}></Box>

<Grid container justify="center">
<Box component="form" className={classes.form} >
 <Typography variant="h5"  style={{color:"tan", textAlign:"center", textTransform:"uppercase" }}>
   Share your requirements...</Typography>
   <br/>
<FormLabel className={classes.ledgend} component="legend">1. Whats your good name? </FormLabel>
 <InputField
fullWidth={true}
label="Name"
variant="outlined"
margin="dense" size="medium"
inputProps={{style:{color: "white"}}}
value={name}
onChange={(e)=> {setName(e.target.value)}} />
<br />
<br />


<FormLabel className={classes.ledgend} component="legend">2. Explain your service /blog / product.  </FormLabel>
 <InputField
fullWidth={true}
label="Type Here"
placeholder="Type here :)"
variant="outlined"
inputProps={{style:{color: "white"}}}
margin="dense" size="medium"
value={service}
multiline= 'true'
rows='4'
onChange={(e)=> {setService(e.target.value)}}
 />
<br />
<br />



<FormLabel className={classes.ledgend} component="legend">3.Any competitor or reference website? </FormLabel>
 <InputField
fullWidth={true}
label="Website Link"
variant="outlined"
inputProps={{style:{color: "white"}}}
margin="dense" size="medium"
value={link}
onChange={(e)=> {setLink(e.target.value)}}
 />
 <br />
<br />


<FormLabel className={classes.ledgend} component="legend">4. Which platform you want to use?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="WordPress"
            onChange={handleChange}
            name="WP"
            checked={WP}
            className={classes.cbLabel}
          
          />
          <FormControlLabel
            control={<Checkbox />}
            label="WIX"
            onChange={handleChange}
            name="WIX"
            checked={WIX}
            className={classes.cbLabel}
          />
            <FormControlLabel
            control={<Checkbox  />}
            label="Hard Coded: JavaScript"
            onChange={handleChange}
            name="Code"
            checked={Code}
            className={classes.cbLabel}
          />
          <FormControlLabel
            control={<Checkbox  />}
            label="Others"
            onChange={handleChange}
            name="others"
            checked={Others}
            className={classes.cbLabel}
          />
        </FormGroup>
     
        <br /><br />
        <FormLabel className={classes.ledgend} component="legend">5. Do you have domain name & hosting space?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Yes, I have both"
            className={classes.cbLabel}
            onChange={handleChangedomain}
            name="both"
            checked={both}

          />
          <FormControlLabel
            control={<Checkbox />}
            label="Just hosting space"
            className={classes.cbLabel}
            onChange={handleChangedomain}
            name="hosting"
            checked={hosting}

          />
          <FormControlLabel
            control={<Checkbox  />}
            label="just domain name"
            className={classes.cbLabel}
            onChange={handleChangedomain}
            name="DandH"
            checked={DandH}
          />
            <FormControlLabel
            control={<Checkbox  />}
            label="I dont have either of them"
            className={classes.cbLabel}
            onChange={handleChangedomain}
            name="Neither"
            checked={Neither}
          />
        </FormGroup>
        <br /><br />
        <FormLabel className={classes.ledgend} component="legend">6. Number of Pages</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={onOpChange}   className={classes.cbLabel}>
        <FormControlLabel value="2 - 3" control={<Radio />} label="2 - 3"   className={classes.cbLabel}/>
        <FormControlLabel value="5-7" control={<Radio />} label="5 - 7"   className={classes.cbLabel} />
        <FormControlLabel value="Blog based website with multiple category" control={<Radio />} label="Blog based website with multiple category" />
   
      </RadioGroup>


      <FormLabel className={classes.ledgend} component="legend">8. When do you want to launch?  </FormLabel>
 <InputField
fullWidth={true}
label="Type Here"
placeholder="Type here :)"
variant="outlined"
inputProps={{style:{color: "white"}}}
margin="dense" size="medium"
value={launch}
multiline= 'true'
rows='4'
onChange={(e)=> {setLaunch(e.target.value)}}
 />
<br />
<br />

        <Button type="button" className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />} onClick={handleSubmit}>
        Submit</Button>
        
        <br />
<br />

<p style={{color: "white"}} >Thanks for submitting the form!</p>
</Box>
        </Grid>
    
        <Footer/>
        

        </>
    )
}

export default FormM

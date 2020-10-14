import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import Facebook from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';
import GitHub from '@material-ui/icons/GitHub';
import Apps from '@material-ui/icons/Apps';


const useStyles = makeStyles(theme=>({
  root: {
   "&. MuiBottomNavigationAction-root":{
     minWidth: 0,
     maxWidth: 100,
     position: 'absolute',
     [theme.breakpoints.down("sm")]: {
      paddingTop: '100px',
      position: 'absolute'
    
      },
  
     
   },
   "& .MuiSvgIcon-root": {
     fill:"tomato",
     "&:hover": {
       fill:"tan",
       fontSize:"1.8rem",
     },
   }
  }
}))

const Footer =() => {

const classes = useStyles();

  return(
<BottomNavigation width="auto" height="auto" style={{background:"#222", paddingTop:'10px' }}>
<BottomNavigationAction className={classes.root} style={{padding:0}}
 icon={<LinkedIn />}
 href="https://www.linkedin.com/in/anjana-sinha/"
  />
<BottomNavigationAction className={classes.root} style={{padding:0}}
icon={<Facebook/>}
href="https://www.facebook.com/anjana.sinhaa"/>

  <BottomNavigationAction className={classes.root} style={{padding:0}}
  icon={<Instagram/>}
  href="https://www.instagram.com/anjana.sinha.india/"/>
  <BottomNavigationAction className={classes.root} style={{padding:0}}
  icon={<GitHub/>}
  href="https://github.com/sinhaanjana32"/>

<BottomNavigationAction className={classes.root} style={{padding:0}}
  icon={<Apps />}
  href="https://anjanasinha.herokuapp.com/"/>


</BottomNavigation>

);
}

export default Footer;

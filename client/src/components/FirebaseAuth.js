import React, { Component } from "react"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { NavBar } from "./NavBar"
import Footer from './Footer';
import FormM from "./FormM"
import {API_KEY} from "./Config"



firebase.initializeApp({
    apiKey: API_KEY,
    authDomain: "fir-learn-bc13c.firebaseapp.com"
})




class Auth extends Component {
  
npm 
    state = { isSignedIn : false }
    
    uiConfig = {
    
      callbacks: {
        signInSuccess: () => false
      },
      signInFlow: "popup",
      signInSuccessUrl:'/formList',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
         ],
     
    }
    

   
componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  

  
  render() {
    return (
        <div className="App">
          {this.state.isSignedIn ? (
           <>
          <NavBar user={firebase.auth().currentUser} />
             <FormM/>
             <Footer/>
           </>
         ) : (

           <>
           <NavBar/>
        <div className="login" >
      
           <h1 className="note">  SignIn</h1>
           <StyledFirebaseAuth
             uiConfig={this.uiConfig}
             firebaseAuth={firebase.auth()}
           />
              
           <p className="note">Your email Id will be received and I will get back to you :)</p>
           </div>
           </>
         )}
        
      </div>
    )
  }

}
export default Auth

import React from 'react'
import firebase from "firebase"
import { Layout, Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
const { Header} = Layout;




const navbarStyle = {
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign:'center',
    color: 'tomato',
    display:'flex',
    fontSize:'25px',
 
}

export const NavBar = (props) => {
    return (

        !props.user ?
        <div className="container">
        <Header style ={navbarStyle}>
        <p>Login</p> 
       </Header>
  </div>:
        
       

        <div className="container">
              <Header style ={navbarStyle}>
             Welcome {props.user.displayName}
            <Button
                style={{direction:'float-right', backgroundColor:'tomato' , border:'none'}}
                type="primary"
                icon={<PoweroffOutlined />}
                onClick={() => firebase.auth().signOut()}>
                Sign out!
                </Button>
             </Header>
        </div>
    )
}

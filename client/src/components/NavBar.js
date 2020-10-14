import React from 'react'
import firebase from "firebase"
import { Layout, Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
const { Header} = Layout;



export const NavBar = (props) => {
    return (

        !props.user ?
        <div className="container">
        <Header className="navbarStyle">
        <p style={{marginBottom:'0px' }}>Please Register</p> 
       </Header>
  </div>:
        
       

        <div className="flexContainer">
              <Header className="navbarStyle">
             Welcome {props.user.displayName}
            <Button
                className="button"
                style={{direction:'float-right', backgroundColor:'tomato' , border:'none'}}
                type="primary"
                size="small"
                icon={<PoweroffOutlined />}
                onClick={() => firebase.auth().signOut()}>
                Sign out!
                </Button>
             </Header>
        </div>
    )
}

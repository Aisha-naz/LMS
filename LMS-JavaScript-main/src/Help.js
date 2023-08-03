import React, { Component,  useState, useEffect } from 'react';
import { Menu, Form, Input, Button, Carousel, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import "antd/dist/antd.css";
import "https://kit.fontawesome.com/a076d05399.js";   // icons from fontawesome are used
import { MailFilled, PhoneFilled , FacebookFilled, QuestionOutlined, CheckCircleOutlined, MonitorOutlined, HomeOutlined, MailOutlined, AppstoreOutlined, UserOutlined, LockOutlined, LeftOutlined, SearchOutlined, RightOutlined } from '@ant-design/icons';


// ################################# Header Having Heading and Login Form #####################################

function Header() {
  return (<div stye={{ }}>
    <img alt=""/>
    <div style={{marginLeft: '100px'}}>
      <h1 style={{fontFamily: 'cursive', marginLeft: '150px', fontSize: '43px', marginBottom: '-15px'}}>Reader's Library</h1>
    </div>
  </div>)
}

// ################################# Header End #####################################

// ################################# NavBar Start #####################################

const NavBar = () => {
  const [current,setCurrent] = useState('mail');


  let navigate = useNavigate();
  const handleClick = e => {
  
   
    console.log('click ', e);
  
    if(e.key=="home"){
      navigate("/home")
    }else if(e.key=="browse"){
      navigate("/browse")
    }else if(e.key=="rent"){
      navigate("/rent")
    }else if(e.key=="about"){
      navigate("/about")
    }else if(e.key=="contact"){
      navigate("/contact")
    }else if(e.key=="help"){
      navigate("/help")
    }
    setCurrent(e.key);
  };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{fontFamily: 'cursive', display: 'inline-block', textDecoration: 'none', marginBottom: '25px', marginTop: '25px',marginLeft: '25px',marginRight: '25px', width: '96%', height: '50px', borderRadius: '30px', background: 'linear-gradient(180deg, #b6b6b6, #fbfbfb), linear-gradient(180deg, #999999, #fbfbfb)', backgroundBlendMode: 'lighten, screen, hard-light, exclusion'}}>
        <Menu.Item key="home" icon={<HomeOutlined style={{fontSize:'20px', marginRight: '2px'}}/>} style={{display: 'inline-block',  marginRight: '90px',paddingRight: '30px', marginLeft: '40px', fontWeight: 'bold', fontSize: '1.25em'}}>
          Home
        </Menu.Item>
        <Menu.Item key="browse" icon={<MonitorOutlined style={{fontSize:'20px', marginRight: '2px'}}/>} style={{display: 'inline-block',  paddingRight: '30px',marginRight: '90px', fontWeight: 'bold', fontSize: '1.25em'}}>
          Browse                                                            {/* list of books */}
        </Menu.Item>
        <Menu.Item key="rent" icon={<CheckCircleOutlined style={{fontSize:'20px', marginRight: '2px'}}/>} style={{display: 'inline-block',  paddingRight: '30px',marginRight: '90px', fontWeight: 'bold', fontSize: '1.25em'}}>
          Rental Conditions                                                 {/* Issuence limit(no. of books, no. of days) */}
        </Menu.Item>
        <Menu.Item key="about"  style={{display: 'inline-block',  paddingRight: '30px',marginRight: '90px', fontWeight: 'bold', fontSize: '1.25em'}}>
        <i class='fas fa-users' style={{fontSize:'20px', marginRight: '10px'}}></i> About Us
        </Menu.Item>
        <Menu.Item key="contact" style={{display: 'inline-block',  paddingRight: '30px',marginRight: '90px', fontWeight: 'bold', fontSize: '1.25em'}}>
        <i class='fas fa-address-book'style={{fontSize:'20px', marginRight: '10px'}}></i>Contact
        </Menu.Item>
        <Menu.Item key="help" icon={<QuestionOutlined style={{fontSize:'20px', marginRight: '2px'}}/>} style={{display: 'inline-block', fontWeight: 'bold', fontSize: '1.25em'}}>
        Help
        </Menu.Item>
      </Menu>
    )
}

// ################################# NavBar End #####################################


// ################################# Combining Components Of Body #####################################
// This function contains all the components that are under navbar

function Body(){
  return(
  <div style={{marginLeft: '200px', marginRight: '200px'}}>
    <h1 style={{color:'white'}}>We are always there for your assistance</h1><br/><br/>
    <h3>If you are having problem in using the interface, email us your problem at <u>reader.library@gmail.com</u>. We will try our best to help you solving your queries.</h3>
    <h3>If you want to donate books for our library, you can contact us through any of the sources below:</h3>
    <h3>We are available for you 24/7. You can contact us:</h3>
    <div>
        <h3><i className='fab fa-whatsapp' style={{fontSize:'20px'}}></i> whatsapp: 071-9078601</h3>
    </div>
    <div>
        <h3><FacebookFilled /> Facebook: ReaderLibrary</h3>
    </div>
    <div>
        <h3><MailFilled /> Email: reader.library@hotmail.com</h3>
    </div>
    <div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  </div>
  )
}

// ################################# Body End #####################################

// ################################# Combining All Components #####################################

export function Help(){
  return(<>
  <div style={{backgroundImage: 'url(https://opengameart.org/sites/default/files/bg-wood.png)', color: 'white', height: '100%', width: '100%'}}>
    <Header />
    <NavBar />
    <Body />
  </div>
  </>)
}


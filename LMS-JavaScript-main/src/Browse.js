import React, { Component,  useState, useEffect } from 'react';
import { Menu, Form, Input, Button, Carousel, Row, Col } from 'antd';
import { BrowserRouter as Router,Routes, Route, Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Bio } from './Biology';
import { Comics } from './Comics';
import { Business } from './Business';
import { ComputerScience } from './ComputerSci';
import { Electronics } from './Electronics';
import { Books } from './Books';
import "antd/dist/antd.css";
import "https://kit.fontawesome.com/a076d05399.js";   // icons from fontawesome are used
import { QuestionOutlined, CheckCircleOutlined, MonitorOutlined, HomeOutlined, MailOutlined, AppstoreOutlined, UserOutlined, LockOutlined, LeftOutlined, SearchOutlined, RightOutlined } from '@ant-design/icons';


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
        <Menu.Item key="browse" icon={<MonitorOutlined style={{fontSize:'20px', marginRight: '2px' }}/>} style={{display: 'inline-block',  paddingRight: '30px',marginRight: '90px', fontWeight: 'bold', fontSize: '1.25em'}}>
          Browse                                                            {/* list of books */}
        </Menu.Item>
        <Menu.Item key="rent" icon={<CheckCircleOutlined style={{fontSize:'20px', marginRight: '2px'}}/>} style={{display: 'inline-block',  paddingRight: '30px',marginRight: '90px', fontWeight: 'bold', fontSize: '1.25em'}}>
          Rental Conditions                                                 {/* Issuence limit(no. of books, no. of days) */}
        </Menu.Item>
        <Menu.Item key="about"  style={{display: 'inline-block',  paddingRight: '30px',marginRight: '90px', fontWeight: 'bold', fontSize: '1.25em'}}>
        <i className='fas fa-users' style={{fontSize:'20px', marginRight: '10px'}}></i> About Us
        </Menu.Item>
        <Menu.Item key="contact" style={{display: 'inline-block',  paddingRight: '30px',marginRight: '90px', fontWeight: 'bold', fontSize: '1.25em'}}>
        <i className='fas fa-address-book'style={{fontSize:'20px', marginRight: '10px'}}></i>Contact
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
  const handleClick = e => {
                e.target.style.color='purple';
      };


  return(
    <div style={{marginLeft: '200px', marginRight: '200px'}}>
    <Row>
      <Col style={{width: '70%'}}  >
        <Routes>
              <Route exact path = '/' element={<Books/>}></Route>
              <Route exact path = 'bio' element={<Bio/>}></Route>
              <Route exact path = 'ee' element={<Electronics/>}></Route>
              <Route exact path = 'com' element={<Comics/>}></Route>
              <Route exact path = 'bns' element={<Business/>}></Route>
              <Route exact path = 'cs' element={<ComputerScience/>}></Route>

        </Routes>
      </Col>
      <Col style={{width: '30%'}}>
        
        <h1 style={{color: '#7c1c05'}}>Categories</h1>
        <ul style={{fontFamily: 'cursive', color: 'black', fontSize: '20px'}}>
          <li onClick={handleClick}><NavLink to="bio">Biology</NavLink></li>
          <li onClick={handleClick}><NavLink to="cs">Computer Science</NavLink></li>
          <li onClick={handleClick}><NavLink to="ee">Electronics</NavLink></li>
          <li onClick={handleClick}><NavLink to="bns">Business</NavLink></li>
          <li onClick={handleClick}><NavLink to="com">Comics</NavLink></li>
          <li style={{listStyleType:'none'}}><NavLink to="/"></NavLink></li>

        </ul>
        <div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </Col>
    </Row>    
  </div>
  )
}

// ################################# Body End #####################################

// ################################# Combining All Components #####################################

export function Browse(){
  return(<>
  <div style={{backgroundImage: 'url(https://opengameart.org/sites/default/files/bg-wood.png)', color: 'white', height: '100%', width: '100%'}}>
    <Header />
    <NavBar />
    <Body />
  </div>
  </>)
}

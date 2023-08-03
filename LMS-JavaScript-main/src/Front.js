import React, { Component,  useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router,Routes, Route, Link, NavLink } from 'react-router-dom';
import { Menu, Form, Input, Button, Carousel, Row, Col } from 'antd';
import Dataservices from "./Dataservices";
import "antd/dist/antd.css";
import "https://kit.fontawesome.com/a076d05399.js";   // icons from fontawesome are used
import { QuestionOutlined, CheckCircleOutlined, MonitorOutlined, HomeOutlined, MailOutlined, AppstoreOutlined, UserOutlined, LockOutlined, LeftOutlined, SearchOutlined, RightOutlined } from '@ant-design/icons';


// login form handle krna hai
// crousal ko update krna hai jis me books ka data aaye database se, me ne 1 2 3 print krwaya hai check krne k liye
// categories ko bi edit krna hai jo hamare data base me ho or jis pe click kr k us category ki sari books show hon
// book of the week or author on focus ki conditions laga k print krwani hai
//search button above categories ko handle krna hai



// ################################# Login Form Start #####################################

const HorizontalLoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Finish:', values);
      Dataservices.findUser(values.username).then(res => {
        if(res.data._id=="admin" && res.data.password==values.password){
          console.log('Welcome to Admin');
          navigate("/admin");
        }else if(res.data.password==values.password){
          console.log('Welcome to User');
          navigate("/user");
        }else {
            alert("Invalid username or password...!");
          }
      }).catch(err => console.log(err))  
   
  };

  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} style={{ marginTop: '-50px', float: 'right'}}>
      <Form.Item
        name="username"
        style={{display: 'inline-block', borderRadius: '07px', border: 'none', height: '30px'}}
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        style={{display: 'inline-block', borderRadius: '07px', border: 'none', height: '30px'}}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            style={{display: 'inline', marginLeft: '10px',fontFamily: 'cursive', color: 'black', border: 'none', width: '120px', borderRadius: '30px', background: 'linear-gradient(180deg, #b6b6b6, #fbfbfb), linear-gradient(180deg, #999999, #fbfbfb)', backgroundBlendMode: 'lighten, screen, hard-light, exclusion'}}
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Login
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

// ################################# Login Form End #####################################

// ################################# Header Having Heading and Login Form #####################################

function Header() {
  return (<div stye={{ }}>
    <img alt=""/>
    <div style={{marginLeft: '100px'}}>
      <h1 style={{fontFamily: 'cursive', marginLeft: '100px', fontSize: '43px', marginBottom: '-15px'}}>Reader's Library</h1>
    </div>
    <div style={{marginRight: '120px'}}>
      <HorizontalLoginForm />
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
        navigate("/")
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
          <Menu.Item key="home"  icon={<HomeOutlined style={{fontSize:'20px', marginRight: '2px'}}/>} style={{display: 'inline-block',  marginRight: '90px',paddingRight: '30px', marginLeft: '40px', fontWeight: 'bold', fontSize: '1.25em'}}>
           Home
          </Menu.Item>
          <Menu.Item key="browse" icon={<MonitorOutlined style={{fontSize:'20px', marginRight: '2px'}}/>} style={{display: 'inline-block',  paddingRight: '30px',marginRight: '90px', fontWeight: 'bold', fontSize: '1.25em'}}>
           Browse                                                           {/* list of books */}
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

// ################################# Crousal Start #####################################

class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <LeftOutlined onClick={this.previous} style={{display: 'inline-block'}}/>
        <Carousel ref={node => (this.carousel = node)} {...props} >
          <div>
            <ul>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://www.practicalmoneyskills.com/assets/images/non-card/marvels_guardians_cover.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://fivebooks.com/app/uploads/2018/04/0132350882.01.LZ_-232x300.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://img.etimg.com/photo/msid-76767770,quality-100/john-brookss-business-adventures-was-recommended-to-gates-by-friend-and-fellow-entrepreneur-warren-buffett-almost-three-decades-ago-.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://inteng-storage.s3.amazonaws.com/img/iea/V0OyLWZ2wQ/sizes/413bz73hiql-sx349-bo1204203200_resize_md.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <hr style={{height: '5px', backgroundColor: '#0D3722'}}/>
            </ul><br/>
          </div>
          <div>
            <ul>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://img.etimg.com/photo/msid-76767770,quality-100/john-brookss-business-adventures-was-recommended-to-gates-by-friend-and-fellow-entrepreneur-warren-buffett-almost-three-decades-ago-.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://inteng-storage.s3.amazonaws.com/img/iea/V0OyLWZ2wQ/sizes/413bz73hiql-sx349-bo1204203200_resize_md.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://www.practicalmoneyskills.com/assets/images/non-card/marvels_guardians_cover.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://fivebooks.com/app/uploads/2018/04/0132350882.01.LZ_-232x300.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <hr style={{height: '5px', backgroundColor: '#0D3722'}}/>
            </ul>
          </div>
          <div>
            <ul>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://fivebooks.com/app/uploads/2018/04/0132350882.01.LZ_-232x300.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://img.etimg.com/photo/msid-76767770,quality-100/john-brookss-business-adventures-was-recommended-to-gates-by-friend-and-fellow-entrepreneur-warren-buffett-almost-three-decades-ago-.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://www.practicalmoneyskills.com/assets/images/non-card/marvels_guardians_cover.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://inteng-storage.s3.amazonaws.com/img/iea/V0OyLWZ2wQ/sizes/413bz73hiql-sx349-bo1204203200_resize_md.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <hr style={{height: '5px', backgroundColor: '#0D3722'}}/>
            </ul><br/>
          </div>
          <div>
            <ul>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://inteng-storage.s3.amazonaws.com/img/iea/V0OyLWZ2wQ/sizes/413bz73hiql-sx349-bo1204203200_resize_md.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://img.etimg.com/photo/msid-76767770,quality-100/john-brookss-business-adventures-was-recommended-to-gates-by-friend-and-fellow-entrepreneur-warren-buffett-almost-three-decades-ago-.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://fivebooks.com/app/uploads/2018/04/0132350882.01.LZ_-232x300.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <li style={{display: 'inline-block', marginLeft:'14px'}}><img src="https://www.practicalmoneyskills.com/assets/images/non-card/marvels_guardians_cover.jpg" alt="" style={{width: '160px', height: '200px', objectFit: 'cover'}}></img></li>
              <hr style={{height: '5px', backgroundColor: '#0D3722'}}/>
            </ul>
          </div>
          
        </Carousel>
        <RightOutlined onClick={this.next} style={{display: 'inline-block'}}/>
      </div>
    );
  }
}

// ################################# Crousal End #####################################

// ################################# Combining Components Of Body #####################################
// This function contains all the components that are under navbar

function Body(){

  
  let userValue ='';
  const getInputValue = (e)=>{
    userValue = e.target.value;
    console.log(userValue);
 };
 const goToBrowse = (e)=>{
  console.log('click ', e);
  navigate("/browse")
};
  let navigate = useNavigate();
  const handleClick = e => {
  
   
    console.log('click ', e);

    if(userValue==="Biology" || userValue==="Computer Science" || userValue==="Electronics" || userValue==="Business" || userValue==="Comics"){
      console.log('hello')
      navigate("/browse")
    }else{
      alert("Your entered category is not found!");
    }
  }

  return(
  <div style={{marginLeft: '200px', marginRight: '200px'}}>
    <Row>
      <Col style={{width: '70%'}}>
        <img src="https://static.onecms.io/wp-content/uploads/sites/23/2021/07/15/great-books-for-anytime-2000.jpg" alt="" style={{width: '600px', height: '300px',  borderRadius: '8px', objectFit: 'cover'}}></img>     {/* front image or can be slidebar */}
        <h2 style={{color: '#7c1c05'}}>Top rated books</h2>
        <hr style={{width: '600px', marginLeft: '-0px'}} />
        <CarouselComponent />   
        <br />
        <h2 style={{color: '#7c1c05'}}>Latest arrivals</h2>
        <hr style={{width: '600px', marginLeft: '-0px'}} />
        <CarouselComponent /><br/><br/>
      </Col>
      <Col style={{width: '30%'}}>
        <input type="text" onChange={getInputValue} style={{color: 'black', width: '200px', borderBottomLeftRadius: '07px', borderTopLeftRadius: '07px', border: 'none', borderColor: 'black', height: '30px'}} placeholder="Search Category"></input>
        <button onClick={handleClick} style={{color: 'black', fontWeight: 'bold', fontSize: '1.29em', borderBottomRightRadius: '07px', borderTopRightRadius: '07px',border: 'none', borderColor: 'black', background: 'linear-gradient(180deg, #b6b6b6, #fbfbfb), linear-gradient(180deg, #999999, #fbfbfb)', backgroundBlendMode: 'lighten, screen, hard-light, exclusion'}}><SearchOutlined /></button>

        <h1 style={{color: '#7c1c05'}}>Categories</h1>
        <ul style={{fontFamily: 'cursive', color: 'black', fontSize: '20px'}}>
          <li>Biology</li>
          <li>Computer Science</li>
          <li>Electronics</li>
          <li>Business</li>
          <li>Comics</li>
        </ul>
        <Button id='more' onClick={goToBrowse} style={{fontFamily: 'cursive', color: 'black', border: 'none', width: '80px',height: '30px',marginLeft:'20px', borderRadius: '30px', background: 'linear-gradient(180deg, #b6b6b6, #fbfbfb), linear-gradient(180deg, #999999, #fbfbfb)', backgroundBlendMode: 'lighten, screen, hard-light, exclusion'}}>More</Button>

        <h2 style={{color: '#7c1c05'}}>Book of the week</h2>
        <div>
        <img src="https://res.cloudinary.com/ezvid-inc/image/upload/c_scale,f_auto,h_720,q_auto:eco,w_1280/c_scale,h_720,l_mws1zxfwmte0y340bsex,w_1280/white16by9_sqmvhu" alt="" style={{ height: '300px',  borderRadius: '8px', objectFit: 'cover'}}></img>  
        </div><br/>                                 {/* Contains the book that is the most issued one */}

        <h2 style={{color: '#7c1c05'}}>Author on focus</h2>
        <div>
        <img src="https://opengraph.githubassets.com/bb4388586bab28286324e6fa34e300bda10fe00cfc3c0cec027ca98b5e52f05c/drypycode/zelle-python" alt="" style={{width: '500px', height: '300px',  borderRadius: '8px'}}></img>
        </div>                                 {/* Contains about author whose books are the most issued one */}

      </Col>
    </Row>    
  </div>
  )
}

// ################################# Body End #####################################

// ################################# Combining All Components #####################################

export function Front(){
  return(<>
  <div style={{backgroundImage: 'url(https://opengameart.org/sites/default/files/bg-wood.png)', color: 'white', height: '100%', width: '100%'}}>
    <Header />
    <NavBar />
    <Body />
  </div>
  </>)
}

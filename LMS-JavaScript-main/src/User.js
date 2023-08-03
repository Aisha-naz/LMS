import React, { Component,  useState, useEffect } from 'react';
import { Table, Space, Menu, Form, Input, Button, Carousel, Row, Col } from 'antd';
import { BrowserRouter as Router,Routes, Route, Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Dataservices from './Dataservices';
import { UserBooks } from './UserBooks';
import Highlighter from 'react-highlight-words';
import "antd/dist/antd.css";
import "https://kit.fontawesome.com/a076d05399.js";   // icons from fontawesome are used
import { QuestionOutlined, CheckCircleOutlined, MonitorOutlined, HomeOutlined, MailOutlined, AppstoreOutlined, UserOutlined, LockOutlined, LeftOutlined, SearchOutlined, RightOutlined } from '@ant-design/icons';


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
    navigate("/");
  };


  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} style={{ marginTop: '-50px', float: 'right'}}>
      {/* <Form.Item
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
      </Form.Item> */}
      {/* <Form.Item
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
      </Form.Item> */}
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            style={{display: 'inline', marginLeft: '10px',fontFamily: 'cursive', color: 'black', border: 'none', width: '80px', borderRadius: '30px', background: 'linear-gradient(180deg, #b6b6b6, #fbfbfb), linear-gradient(180deg, #999999, #fbfbfb)', backgroundBlendMode: 'lighten, screen, hard-light, exclusion'}}
          >
            Log out
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
      <h1 style={{fontFamily: 'cursive', marginLeft: '150px', fontSize: '43px', marginBottom: '-15px'}}>Reader's Library</h1>
    </div>
    <div style={{marginRight: '120px'}}>
      <HorizontalLoginForm />
    </div>
  </div>)
}

// ################################# Header End #####################################


// ################################# pay penalty start ##############################
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };


class IssueBook extends React.Component {
    formRef = React.createRef();
    onGenderChange = (value) => {
      switch (value) {
        case 'male':
          this.formRef.current.setFieldsValue({
            note: 'Hi, man!',
          });
          return;
  
        case 'female':
          this.formRef.current.setFieldsValue({
            note: 'Hi, lady!',
          });
          return;
  
        case 'other':
          this.formRef.current.setFieldsValue({
            note: 'Hi there!',
          });
      }
    };
    onFinish = (values) => {
      console.log(values);
      Dataservices.createIssuedBook(values.isbn, values.title, values.author, 1);
      console.log("Book issued");
    };
    componentDidMount(){
      Dataservices.getAllIssuedBooks().then(res => this.setState({data:res.data})).catch(er => console.log(er));
    }
    componentDidUpdate(){
      Dataservices.getAllIssuedBooks().then(res => this.setState({data:res.data})).catch(er => console.log(er));
    }
    
    onReset = () => {
      this.formRef.current.resetFields();
    };
    onFill = () => {
      this.formRef.current.setFieldsValue({
        note: 'Hello world!',
        gender: 'male',
      });
    };
    render() {
      return(
        <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
         <Form.Item
          name="isbn"
          label="ISBN"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="author"
          label="Author"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="_id"
          label="User ID"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick = {this.onFill}>
            Issue
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
      );
  }
  
  }


const returnBook = (id, e) => {
  console.log(e);
  Dataservices.findIssuedBook(id).then(res =>{console.log(res.data)
    Dataservices.updateIssuedBook(id,res.data.title,res.data.author,res.data.issuedBy,res.data.bookIssued-1)
  }
  )    
}

  const columns = [
    {
      title: 'ISBN',
      dataIndex: '_id',
      key: '_id',
      width: '30%',
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ['descend', 'ascend']
    },  
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        width: '30%',
        sorter: (a, b) => a.title.length - b.title.length,
        sortDirections: ['descend', 'ascend']
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        width: '20%',
        sorter: (a, b) => a.author.length - b.author.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Issued By',
        dataIndex: 'issuedBy',
        key: 'issuedBy',
        sorter: (a, b) => a.issuedBy.length - b.issuedBy.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Issued Books',
        dataIndex: 'bookIssued',
        key: 'bookIssued',
        sorter: (a, b) => a.bookIssued.length - b.bookIssued.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Actions',
        dataIndex: '_id',
        key: '_id',
        render:(id) => {return <Button type='danger' onClick={() => returnBook(id)}>Return Book</Button>}
      }

    ];
  
class Show extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    data:[]
  };
  componentDidMount(){
    Dataservices.getAllIssuedBooks().then(res => this.setState({data:res.data})).catch(er => console.log(er));
  }
  componentDidUpdate(){
    Dataservices.getAllIssuedBooks().then(res => this.setState({data:res.data})).catch(er => console.log(er));
  }
  
  render() {
    return (<><br/><br/><br/><Table columns={columns} dataSource={this.state.data} title={() => 'Books Record'} /></>);
  }
  }
const bookColumns = [
    {
      title: 'ISBN',
      dataIndex: '_id',
      key: '_id',
      width: '30%',
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ['descend', 'ascend']
    },  
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        width: '30%',
        sorter: (a, b) => a.title.length - b.title.length,
        sortDirections: ['descend', 'ascend']
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        width: '20%',
        sorter: (a, b) => a.author.length - b.author.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Edition',
        dataIndex: 'edition',
        key: 'edition',
        sorter: (a, b) => a.edition.length - b.edition.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        sorter: (a, b) => a.quantity.length - b.quantity.length,
        sortDirections: ['descend', 'ascend'],
      },
      // {
      //   title: 'Actions',
      //   dataIndex: '_id',
      //   key: '_id',
      //   render:(id) => {return <Button type='danger' onClick={() => returnBook(id)}>Return Book</Button>}
      // }

    ];
class ShowBooks extends React.Component {
    state = {
      searchText: '',
      searchedColumn: '',
      data:[]
    };
    componentDidMount(){
      Dataservices.getAllBooks().then(res => this.setState({data:res.data})).catch(er => console.log(er));
    }
    componentDidUpdate(){
      Dataservices.getAllIssuedBooks().then(res => this.setState({data:res.data})).catch(er => console.log(er));
    }
    
    render() {
      return (<><br/><br/><br/><Table columns={bookColumns} dataSource={this.state.data} title={() => 'Books Record'} /></>);
    }
}
// ################################# pay penalty end ##############################

// ################################# Combining Components Of Body #####################################
// This function contains all the components that are under navbar

function Body(){
  const handleClick = e => {
                e.target.style.color='purple';
      };


  return(
    <div style={{marginLeft: '150px', marginRight: '200px'}}>
    <Row>
      <Col style={{width: '70%'}}  >
        <Routes>
              <Route exact path = '/' element={<UserBooks/>}></Route>
              <Route exact path = 'books' element={<ShowBooks/>}></Route>
              <Route exact path = 'issued' element={<IssuedBooks/>}></Route>
              <Route exact path = 'penalty' element={<Penalty/>}></Route>

        </Routes>
      </Col>
      <Col style={{width: '30%'}}>
        
        <h1 style={{color: '#7c1c05'}}>Hi! User...!</h1>
        <ul style={{fontFamily: 'cursive', color: 'black', fontSize: '20px'}}>
          <li onClick={handleClick}><NavLink to="issued">
          <Button
            type="primary"
            style={{display: 'inline', marginLeft: '10px',fontFamily: 'cursive', color: 'black', border: 'none', width: '180px', borderRadius: '30px', background: 'linear-gradient(180deg, #b6b6b6, #fbfbfb), linear-gradient(180deg, #999999, #fbfbfb)', backgroundBlendMode: 'lighten, screen, hard-light, exclusion'}}
            
          >
            Issued Books
          </Button>
            </NavLink></li><br/>
            <li onClick={handleClick}><NavLink to="penalty">
          <Button
            type="primary"
            style={{display: 'inline', marginLeft: '10px',fontFamily: 'cursive', color: 'black', border: 'none', width: '180px', borderRadius: '30px', background: 'linear-gradient(180deg, #b6b6b6, #fbfbfb), linear-gradient(180deg, #999999, #fbfbfb)', backgroundBlendMode: 'lighten, screen, hard-light, exclusion'}}
           
          >
            Panelty
          </Button>
            </NavLink></li><br/>
            <li onClick={handleClick}><NavLink to="books">
          <Button
            type="primary"
            style={{display: 'inline', marginLeft: '10px',fontFamily: 'cursive', color: 'black', border: 'none', width: '180px', borderRadius: '30px', background: 'linear-gradient(180deg, #b6b6b6, #fbfbfb), linear-gradient(180deg, #999999, #fbfbfb)', backgroundBlendMode: 'lighten, screen, hard-light, exclusion'}}
          >
            Books
          </Button>
            </NavLink></li>
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

let penalty = 0;
function IssuedBooks(){
    return(
    <div style={{marginLeft: '60px', marginRight: '20px'}}><br/><br/><br/>
      <h1 style={{color: 'blue'}}>Books are issued for two weeks</h1>
      <h2>After two weeks books should be renewed or returned back, otherwise Rs.50 per day penalty will have to be paid.</h2> 
      <br/>
      <div>
        <IssueBook/>
        <Show/>
        
      </div>
    </div>);
}  
function Penalty(){
  return(
  <div style={{marginLeft: '60px', marginRight: '20px'}}><br/><br/><br/>
    <h1 style={{color: 'blue'}}>Hi User!  Books are issued for two weeks</h1>
    <h2>After two weeks books should be renewed or returned back, otherwise Rs.50 per day penalty will have to be paid.</h2> 
    <br/><br/>
    <h1 style={{color: 'red'}}>Your current issued books penalty is : {penalty}</h1>
  </div>);
}  
// ################################# Body End #####################################

// ################################# Combining All Components #####################################

export function User(){
  return(<>
  <div style={{backgroundImage: 'url(https://opengameart.org/sites/default/files/bg-wood.png)', color: 'white', height: '100%', width: '100%'}}>
    <Header /><br/>
    <div style={{backgroundColor: '#650621', height: '100px'}}>
      <hr style={{backgroundColor:'green', height: '20px', border:'none'}}/>
      <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center', color: 'white'}}>User Dashboard</h1>
      <hr style={{backgroundColor:'blue', height: '20px', border:'none'}}/>
    </div><br/>
    <Body />
  </div>
  </>)
}

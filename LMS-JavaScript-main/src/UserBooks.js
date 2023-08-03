import React from "react";
// import { Alert } from "bootstrap";
import { Card, Col, Row } from 'antd';
import { Button } from 'react-bootstrap';
const { Meta } = Card;

const handleClick = e => {
    
     
  console.log('click ', e);
  alert ("Selected Book is issued for 2 weeks!");
  
}

export default class Biolgy extends React.Component {
  state = {
    loading: true,
    book: null
  };

  async componentDidMount() {
    const url = "https://www.googleapis.com/books/v1/volumes?q=biology";
    const response = await fetch(url);
    const data = await response.json();
   for(let i = 0 ; i < 9 ; i++)
   {
    this.setState({ books: data, loading: false });
   }
  }
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.books) {
      return <div>didn't get a book</div>;
    }

    return (
      
      <div className="site-card-wrapper" >
          <Row gutter={16} onClick={handleClick}>
          <Col span={8}>
           <Card 
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[0].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title={this.state.books.items[0].volumeInfo.title} description={this.state.books.items[0].volumeInfo.authors[0]} />
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
            </Col>  

             <Col span={8}>  
         <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[1].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[1].volumeInfo.title} description= {this.state.books.items[1].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>   
        </Col>  


           <Col span={8}>       
                
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[2].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[2].volumeInfo.title} description= {this.state.books.items[2].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card><br/>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[3].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[3].volumeInfo.title} description= {this.state.books.items[3].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[4].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[4].volumeInfo.title} description= {this.state.books.items[4].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
                <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[5].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[5].volumeInfo.title} description= {this.state.books.items[5].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card><br/>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[6].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[6].volumeInfo.title} description= {this.state.books.items[6].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[7].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[7].volumeInfo.title} description= {this.state.books.items[7].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[8].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[8].volumeInfo.title} description= {this.state.books.items[8].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 
                
                
        </Row><br/>
      </div>
  
       
    );
  }
}


class Bus extends React.Component {
  state = {
    loading: true,
    books: null
  };

  async componentDidMount() {
    const url = "https://www.googleapis.com/books/v1/volumes?q=business";
    const response = await fetch(url);
    const data = await response.json();
   for(let i = 0 ; i < 9 ; i++)
   {
    this.setState({ books: data, loading: false });
   }
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.books) {
      return <div>didn't get a book</div>;
    }
    

    return (
      
     <div className="site-card-wrapper" >
          <Row gutter={16} onClick={handleClick}>
          <Col span={8}>
           <Card 
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[0].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}}/>}
          >
          <Meta title={this.state.books.items[0].volumeInfo.title} description="Unknown Author" />
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
            </Col>  

             <Col span={8}>  
         <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[1].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}}/>}
          >
          <Meta title= {this.state.books.items[1].volumeInfo.title} description="Unknow Author"/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>   
        </Col>  


           <Col span={8}>       
                
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[2].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}}/>}
          >
          <Meta title= {this.state.books.items[2].volumeInfo.title} description= {this.state.books.items[2].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card><br/>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[3].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}}/>}
          >
          <Meta title= {this.state.books.items[3].volumeInfo.title} description= {this.state.books.items[3].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[4].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}}/>}
          >
          <Meta title= {this.state.books.items[4].volumeInfo.title} description= {this.state.books.items[4].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
                <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[5].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}}/>}
          >
          <Meta title= {this.state.books.items[5].volumeInfo.title} description= {this.state.books.items[5].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card><br/>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[6].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}}/>}
          >
          <Meta title= {this.state.books.items[6].volumeInfo.title} description="Unknown Author"/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[7].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}}/>}
          >
          <Meta title= {this.state.books.items[7].volumeInfo.title} description="Unknown Author"/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[8].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}}/>}
          >
          <Meta title= {this.state.books.items[8].volumeInfo.title} description="Unknown Author"/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 
                
                
        </Row><br/>
      </div>
       
    );
  }
}



class Com extends React.Component {
  state = {
    loading: true,
    books: null
  };

  async componentDidMount() {
    const url = "https://www.googleapis.com/books/v1/volumes?q=comics";
    const response = await fetch(url);
    const data = await response.json();
   for(let i = 0 ; i < 9 ; i++)
   {
    this.setState({ books: data, loading: false });
   }
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.books) {
      return <div>didn't get a books</div>;
    }

    return (
      
      <div className="site-card-wrapper" >
          <Row gutter={16} onClick={handleClick}>
          <Col span={8}>
           <Card 
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[0].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}}/>}
          >
          <Meta title={this.state.books.items[0].volumeInfo.title} description={this.state.books.items[0].volumeInfo.industryIdentifiers[0].type} />
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
         </Col>  

             <Col span={8}>  
         <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[1].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}}/>}
          >
          <Meta title= {this.state.books.items[1].volumeInfo.title} description= {this.state.books.items[1].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>   
        </Col>  


           <Col span={8}>       
                
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[2].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}}/>}
          >
          <Meta title= {this.state.books.items[2].volumeInfo.title} description= {this.state.books.items[2].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card><br/>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[3].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}}/>}
          >
          <Meta title= {this.state.books.items[3].volumeInfo.title} description= {this.state.books.items[3].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[5].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[5].volumeInfo.title} description= "Unknown Author"/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[6].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[6].volumeInfo.title} description= {this.state.books.items[6].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[7].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[7].volumeInfo.title} description= {this.state.books.items[7].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[8].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[8].volumeInfo.title} description= {this.state.books.items[8].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 
                
                
        </Row><br/>  
      </div>
    );
  }
}


class ComSci extends React.Component {
  state = {
    loading: true,
    books: null
  };

  async componentDidMount() {
    const url = "https://www.googleapis.com/books/v1/volumes?q=computerScience";
    const response = await fetch(url);
    const data = await response.json();
   for(let i = 0 ; i < 9 ; i++)
   {
    this.setState({ books: data, loading: false });
   }
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.books) {
      return <div>didn't get a book</div>;
    }

   
    return (
      
      <div className="site-card-wrapper" >
          <Row gutter={16} onClick={handleClick}>
          <Col span={8}>
           <Card 
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[0].volumeInfo.imageLinks.smallThumbnail} />}
          >
          <Meta title={this.state.books.items[0].volumeInfo.title} description={this.state.books.items[0].volumeInfo.industryIdentifiers[0].type} />
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
            </Col>  

             <Col span={8}>  
         <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[1].volumeInfo.imageLinks.smallThumbnail} />}
          >
          <Meta title= {this.state.books.items[1].volumeInfo.title} description= {this.state.books.items[1].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>   
        </Col>  


           <Col span={8}>       
                
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[2].volumeInfo.imageLinks.smallThumbnail} />}
          >
          <Meta title= {this.state.books.items[2].volumeInfo.title} description= {this.state.books.items[2].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card><br/>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[3].volumeInfo.imageLinks.smallThumbnail} />}
          >
          <Meta title= {this.state.books.items[3].volumeInfo.title} description= {this.state.books.items[3].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[4].volumeInfo.imageLinks.smallThumbnail} />}
          >
          <Meta title= {this.state.books.items[4].volumeInfo.title} description= {this.state.books.items[4].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
                <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[5].volumeInfo.imageLinks.smallThumbnail} />}
          >
          <Meta title= {this.state.books.items[5].volumeInfo.title} description= {this.state.books.items[5].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card><br/>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[6].volumeInfo.imageLinks.smallThumbnail} />}
          >
          <Meta title= {this.state.books.items[6].volumeInfo.title} description= {this.state.books.items[6].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[7].volumeInfo.imageLinks.smallThumbnail} />}
          >
          <Meta title= {this.state.books.items[7].volumeInfo.title} description= {this.state.books.items[7].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[8].volumeInfo.imageLinks.smallThumbnail} />}
          >
          <Meta title= {this.state.books.items[8].volumeInfo.title} description= {this.state.books.items[8].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 
                
                
        </Row><br/>        
  
      </div>
    );
  }
}


class Elc extends React.Component {
  state = {
    loading: true,
    books: null
  };

  async componentDidMount() {
    const url = "https://www.googleapis.com/books/v1/volumes?q=electronics";
    const response = await fetch(url);
    const data = await response.json();
   for(let i = 0 ; i < 9 ; i++)
   {
    this.setState({ books: data, loading: false });
   }
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.books) {
      return <div>didn't get a person</div>;
    }

    return (
      
      <div className="site-card-wrapper" >
          <Row gutter={16} onClick={handleClick}>
          <Col span={8}>
           <Card 
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[0].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title={this.state.books.items[0].volumeInfo.title} description={this.state.books.items[0].volumeInfo.authors[0]} />
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
            </Col>  

             <Col span={8}>  
         <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[1].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[1].volumeInfo.title} description= {this.state.books.items[1].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>   
        </Col>  


           <Col span={8}>       
                
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[2].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[2].volumeInfo.title} description= {this.state.books.items[2].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card><br/>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[3].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[3].volumeInfo.title} description= {this.state.books.items[3].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[4].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[4].volumeInfo.title} description= {this.state.books.items[4].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
                <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[5].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[5].volumeInfo.title} description= {this.state.books.items[5].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card><br/>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[6].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[6].volumeInfo.title} description= {this.state.books.items[6].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[7].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[7].volumeInfo.title} description= {this.state.books.items[7].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[8].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[8].volumeInfo.title} description= {this.state.books.items[8].volumeInfo.authors[0]}/>
          <br/><Button style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 
                
                
        </Row><br/>       
      </div>     
    );
  }
}
export function UserBooks(){
    return(<>
    <div style={{backgroundImage: 'url(https://opengameart.org/sites/default/files/bg-wood.png)', color: 'white', height: '100%', width: '100%'}}>
    
      <Biolgy/>
      <Bus/>
      <Com/>
      <ComSci/>
      <Elc />
      
    </div>
    </>)
  }

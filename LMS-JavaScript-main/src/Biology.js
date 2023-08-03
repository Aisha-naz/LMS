import React from "react";
import { Card, Col, Row } from 'antd';
import { Button } from 'react-bootstrap';
const { Meta } = Card;

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
          <Row gutter={16}>
          <Col span={8}>
           <Card 
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[0].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title={this.state.books.items[0].volumeInfo.title} description={this.state.books.items[0].volumeInfo.authors[0]} />
          <br/><Button disabled={true} style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
            </Col>  

             <Col span={8}>  
         <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[1].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[1].volumeInfo.title} description= {this.state.books.items[1].volumeInfo.authors[0]}/>
          <br/><Button disabled={true} style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>   
        </Col>  


           <Col span={8}>       
                
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[2].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[2].volumeInfo.title} description= {this.state.books.items[2].volumeInfo.authors[0]}/>
          <br/><Button disabled={true} style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card><br/>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[3].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[3].volumeInfo.title} description= {this.state.books.items[3].volumeInfo.authors[0]}/>
          <br/><Button disabled={true} style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[4].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[4].volumeInfo.title} description= {this.state.books.items[4].volumeInfo.authors[0]}/>
          <br/><Button disabled={true} style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
                <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[5].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[5].volumeInfo.title} description= {this.state.books.items[5].volumeInfo.authors[0]}/>
          <br/><Button disabled={true} style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card><br/>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[6].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[6].volumeInfo.title} description= {this.state.books.items[6].volumeInfo.authors[0]}/>
          <br/><Button disabled={true} style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[7].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[7].volumeInfo.title} description= {this.state.books.items[7].volumeInfo.authors[0]}/>
          <br/><Button disabled={true} style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 

        <Col span={8}>  
        <Card
          hoverable
          style={{ width: 200 }}
          cover={ <img src={this.state.books.items[8].volumeInfo.imageLinks.smallThumbnail} style={{height:'250px'}} />}
          >
          <Meta title= {this.state.books.items[8].volumeInfo.title} description= {this.state.books.items[8].volumeInfo.authors[0]}/>
          <br/><Button disabled={true} style={{backgroundColor:'#40EA95'}}><h3>Issue Book</h3></Button>
        </Card>
        </Col> 
                
                
        </Row><br/>
      </div>
  
       
    );
  }
}
export function Bio(){
    return(<>
    <div style={{backgroundImage: 'url(https://opengameart.org/sites/default/files/bg-wood.png)', color: 'white', height: '100%', width: '100%'}}>
    
      <Biolgy />
      
    </div>
    </>)
  }
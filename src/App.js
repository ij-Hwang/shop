/* eslint-disable*/ 

import React, { useContext, useState, useEffect, lazy, Suspense } from 'react';
import {Navbar, Container, Nav, NavDropdown, Button, Row, Col} from 'react-bootstrap';
import './App.css';
import Data from './data'
// import Detail from './Detail'
let Detail = lazy(()=>{ return import('./Detail.js')})

import axios from 'axios';
import Cart from './Cart';

import { Link, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

let 재고context = React.createContext();

function App() {

  let [shoes, shoes_chg] = useState(Data)
  let [재고, 재고변경] = useState([10,11,13]);
  let [더보기, 더보기변경] =useState(true)

  return (
    <div className="App">
        <Navbar bg="light" expand="sm">
          <Container>
            <Navbar.Brand as={Link} to="/">OkShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" > Home</Nav.Link>
                <Nav.Link as={Link} to="/detail/0" >Detail</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/test" >Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      <Switch>

        <Route exact path="/">
          <div className="jumbotron background">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>
          <Container>

            <재고context.Provider value={재고}>

            <Row>
              <Shoes shoes={shoes} />

            </Row>
            {더보기===true
            ?(
              <button className="btn btn-primary" onClick={()=>{
  
                axios.get('http://codingapple1.github.io/shop/data2.json')
                .then((result)=>{
                  shoes_chg([...shoes, ...result.data])
                })
                .catch(()=>{
                  console.log('실패했어요')
                })
              더보기변경(!더보기)
              }}>더보기</button>
            ): null
            }



            </재고context.Provider>
          </Container>
        </Route>

          
        <Route path="/detail/:id">
          <Suspense fallback={<div>로딩중이에요.</div>}>
            <Detail shoes={shoes} stock={재고} stockchg={재고변경} />
          </Suspense>

        </Route>


        <Route path="/cart">
          <Cart />
        </Route>

        {/* <Route path="/:id">
          <div>아무거나 적었을때 이거 보여줘</div>
        </Route> */}

        <Route path="/test">
          <Test/>
        </Route>


      </Switch>


    </div>
  );
}


function Test() {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20)


  useEffect(()=>{
    if (count !=0 && count < 3) {
      setAge(age+1)
    } 
  },[count])

  return (
    <div>
      <div>안녕하십니까 전 {age}</div>
      <button onClick={()=>{
        setCount(count+1)
      }}>누르면 한살먹기</button>
    </div>
  )
}


function Shoes(props) {

  let 재고 = useContext(재고context);
  let history = useHistory();

  // console.log(props)
  return (
    props.shoes.map((v,i) =>{
      return (
        <Col md={4} key={i}>
          <div onClick={()=>{ history.push('/detail/'+ props.shoes[i].id) }}>
            <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="100%" alt={`shoes${i+1}`} />
            <h4>{v.title}</h4>
            <p>{v.content}</p>
            <p>{v.price}</p>
            <p>{재고[i]}개</p>
          </div>
        </Col>
      )
    })
  )
}

export default App;

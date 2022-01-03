/* eslint-disable */

import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap'
import styled from 'styled-components';
import './detail.scss'

import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

let 박스 = styled.div`
  padding : 20px;
`;
let 제목 = styled.h4`
  font size : 25px;
`;



function Detail(props) {

  let [Alert_stat,Alert_stat_chg] = useState(true)
  let [inputData, inputDatachg] = useState('');
  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  let { id } = useParams();
  let history = useHistory();

  useEffect(()=>{
    let 타이머 = setTimeout(()=>{ Alert_stat_chg(false)  }, 2000)
    return ()=> { clearTimeout(타이머) }
  },[]);
  
  useEffect(()=>{
    let arr = localStorage.getItem('watched');
    if(arr===null) { arr = [] } else {arr = JSON.parse(arr)} 

    arr.push(id)
    arr = new Set(arr);
    arr = [...arr];

    localStorage.setItem('watched', JSON.stringify(arr))

  },[]);

  return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
      </박스>


      <input onChange={ (e)=>{ inputDatachg(e.target.value) }} />

      {
        Alert_stat === true
        ?  <Alert/>
        : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${Number(id)+1}.jpg`} width="100%" alt="shoes1" />
        </div>
        <div className="col-md-6 mt-4">
          {props.shoes.map((v)=>{
            return (
              v.id===Number(id)
              ? (
              <div key={v.title}>
                <h4 className="pt-5">{v.title}</h4>
                <p>{v.content}</p>
                <p>{v.price}</p>
                <Info stock={props.stock[id]} />
              </div>
              ) : null
            )
          })}
          <button className="btn btn-danger" onClick={()=>{
            // const temp = [...props.stock]
            // temp[id] -= 1
            // props.stockchg(temp)
// console.log(props.shoes)
            props.dispatch({type: '항목추가', payload: {id:  props.shoes[id].id , name: props.shoes[id].title, quan:1}})
            history.push('/cart')
          }}>주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{
            history.goBack();
          }}>뒤로가기</button> 
        </div>
      </div>

      <div className='recentBox'>
        <RecentItem shoes={props.shoes} recent={JSON.parse(localStorage.getItem('watched'))} />
      </div>

      <Nav className='mt-5' variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); 누른탭변경(0)}} >Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); 누른탭변경(1)}}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={스위치} classNames="wow" timeout={1000}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
      </CSSTransition>

    </div> 
  )
}

function RecentItem (props) {
  return (
    <div>
      <p>최근 본 상품</p>
      {props.recent.map((v)=>{
        return <span key={v}>{props.shoes[v].title}<br/></span>
    })}
    </div>
    
  ) 
}

function TabContent(props) {

  useEffect(()=>{
    props.스위치변경(true);
  });

  if (props.누른탭 === 0) {
    return <div>0번째 내용입니다.</div>
  } else if (props.누른탭 ===1) {
    return <div>1번째 내용입니다.</div>
  } else if (props.누른탭 ===2) {
    return <div>2번째 내용입니다.</div>
  }  

}



function Info(props) {
  return (
    <p>재고 : {props.stock}</p>
  )

}

function Alert() {
   return <div className="my-alert2">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>
}

function stateToprops(state){
  // console.log(state)
  return {
    state : state.reducer,
    alert열렸니 : state.reducer2
  }
}


export default connect(stateToprops)(Detail)
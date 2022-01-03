import React from 'react';
import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

function Cart(props) {

  let state = useSelector((state)=> state)
  // console.log(state)
  let dispatch = useDispatch()



  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {
            state.reducer.map((a,i)=>{
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.quan}</td>
                  <td><button onClick={()=>{
                    dispatch({ type : '수량증가' , payload : {id : a.id}})
                  }}>+</button>
                  <button onClick={()=>{
                    dispatch({ type : '수량감소' , payload : {id : a.id}})                    
                  }}>-</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      {
        props.alert열렸니 === true
        ?(
        <div className="my-alert2">
          <p>지금 구매하시면 신규할인 20%</p>
          <button onClick={()=>{
            props.dispatch({ type: '창변환'})
          }}>닫기</button>
        </div>
        ) 
        : (
          <button onClick={()=>{
            props.dispatch({ type: '창변환'})
          }}>열기</button>
        )
      }



    </div>
  )
}

// function 함수명(state) { //state를 Props화 해주세요.
//   return {
//     state : state.reducer,
//     alert열렸니 : state.reducer2,

//   }
// }

// export default connect(함수명)(Cart)

export default Cart
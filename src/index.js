import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'

import {Provider} from 'react-redux'
import { createStore, combineReducers } from 'redux';


let alert초기값 = true;
function reducer2(state = alert초기값, 액션){
  if(액션.type === '창변환'){
    let copy = !state 
    return copy
  } else {
    return state

  }
}

let 초기값 = []


function reducer(state = 초기값, 액션){
  if ( 액션.type === '항목추가') {
    let find = state.findIndex((v)=>{ return v.id===액션.payload.id})
    let copy = [...state];
    if (find < 0 ){
      copy.push(액션.payload)
      return copy
    } else {
      copy.map((v)=>{
        v.id === 액션.payload.id && v.quan++
        return v 
      })
      return copy
    }

  }
  else if(액션.type==='수량증가'){
    let copy = [...state]
    console.log(액션.payload)
    copy[액션.payload.id].quan++;
    return copy
  } else if(액션.type==='수량감소'){
      let copy = [...state]
      copy[액션.payload.id].quan--;
      return copy
  } else {
    return state
  }
  
}

let store = createStore(combineReducers({reducer, reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
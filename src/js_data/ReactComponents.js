// реакт компомнент с большой буквы
const Header = () => <h2>Hi</h2>;

const Field = () => {
  const holder = 'Enter here';
  const styledField = {
      width: '300px'
  };
  return <input placeholder={holder} 
                  type='text' 
                  style={styledField} /> 
};

import {Component} from 'react';
class FieldClass extends Component { // ипорт перед использование.
    render() {
      const holder = 'Enter here';
      const styledField = {
        width: '300px'
      };
      return <input placeholder={holder} 
                  type='text' 
                  style={styledField} /> 
    }
  }

const Btn = () => { 
  const text = 'Log in';
  const logged = true; // if false then - Log in
  return <button>{logged ? 'Enter' : text}</button>; // только тернарный оператор нельзя if else. если надо др используем выше  

  const res = () => 'Log in';
  const p = <p>Log in</p>
  //return <button>{text}</button>;
  // return <button>{res()}</button>;
  // return <button>{p}</button>;

  
};
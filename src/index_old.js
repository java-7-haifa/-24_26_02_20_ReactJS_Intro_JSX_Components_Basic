import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

// let h1 = React.createElement('h1',{id:'myTitle',className:'mySuperClass'},'Hello world!');
// let p = React.createElement('p',null,'My text');
// let div = React.createElement('div',null,h1,p);

// ReactDOM.render(div,document.querySelector('#root'));
// ReactDOM.render(h1,document.querySelector('#root2'));

const styles = {
    color:'blue',
    textAlign: 'center'
}
let div = (
    <div>
        <h1 style={{color:'red', textAlign:'center'}}>Second text</h1>
        <p style={styles}>My text</p>
        <small>{143 + 45}</small>
        <input/>
    </div>
);

ReactDOM.render(
    <h1 id='myId' className='mySuperClass'>Hello world</h1>
    ,document.querySelector('#root'));

ReactDOM.render(div,document.querySelector('#root2')); 
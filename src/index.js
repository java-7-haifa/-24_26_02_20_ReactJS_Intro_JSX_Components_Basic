import React from 'react'
import ReactDOM from 'react-dom'
import Person from './components/Person'
import Counter from './components/Counter'

import './style.css';

function App(){
    let styles = {
        display: 'flex',
        width:'80%',
        margin:'0 auto'
    }
    return (
        <div style={styles}>
            <Person 
            name='Vasya' 
            age={23}
            avalible={true}/>
            <Person 
            name='Petya' 
            age={32}
            avalible={false}/>
            <Counter title='My Title'/>
        </div>
    );
}

// function P1(props){
//     let styles = {
//         width:'100px',
//         margin:'15px',
//         border: '1px solid black',
//         padding: '10px'
//     };
//     return (
//         <div style={styles}>
//             <h1>{props.name}</h1>
//             <small>age: {props.age}</small>
//         </div>
//     );
// }

// function P2(){
//     let styles = {
//         width:'100px',
//         margin:'15px',
//         border: '1px solid black',
//         padding: '10px'
//     };
//     return (
//         <div style={styles}>
//             <h1>Petya</h1>
//             <small>age: 32</small>
//         </div>
//     );
// }

ReactDOM.render(<App/>,
    document.querySelector('#root')
);
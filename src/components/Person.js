import React from 'react';

const styles = {
    width: '100px',
    margin: '15px',
    border: '1px solid black',
    padding: '10px'
};

export default function Person(props) {
    let count = 0;
    return (
        <div style={styles}>
            <h1>{props.name}</h1>
            <small>count: {count}</small><br/>
            <small>age: {props.age}</small>
            <br />
            {
                props.avalible ?
                    <button
                        onClick={() => {
                            // console.log(`Was clicked ${props.name}`)
                            count++;
                        }}>Click me</button>
                    :
                    <small>Not avalible</small>
            }

        </div>
    );
}
import React from 'react';


export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    changeCount(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div className='counter'>
                <h3>My Counter</h3>
                <h4>{this.props.title}</h4>
                <small>count: {this.state.count}</small><br />
                <button onClick={this.changeCount.bind(this)}>Add count</button>
                <button onClick={()=> this.changeCount()}>Add count</button>
            </div>
        );
    }
}



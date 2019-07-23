import React, { Component } from 'react'
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from './testActions'
import { Button } from 'semantic-ui-react';

const mapState = (state) => ({
    data: state.test.data
})

const actions = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
    render() {
        const {data, incrementCounter, decrementCounter} = this.props;
        return (
            <div>
               <h1>Test Compoonent </h1> 
               <h3>The answer is: {this.props.data}</h3>
               <Button onClick={incrementCounter} positive content='Increment'/>
               <Button onClick={decrementCounter} negative content='Decrement'/>

            </div>
        )
    }
}

//The mapstate function will be called which will get our state from the store
// which is state.data which is assigned to the data property which is used in 
// the component
export default connect(mapState, actions)(TestComponent)

//Here's how the connect highorder component works:
// The mapState function tells the component which function
// we want to get from our store and the we pass the TestComponent as 
// another parameter for the higherorder component that returns another
// component with the properties from the store

//This is how to connect the component to the store
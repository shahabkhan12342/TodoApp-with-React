import React from 'react';

class Home extends React.Component{
    componentWillUnmount(){
        console.log('Component will khalas');
    }
    render(){
        return(
            <h1>{this.props.count}</h1>
        )
    }
}
export default Home
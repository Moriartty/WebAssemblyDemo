import * as React from 'react';
const ReactDOM = require('react-dom');

class Root extends React.Component{
    render(){
        return (
            <div>WebAssembly</div>
        )
    }
}

ReactDOM.render(
    <Root/>
    ,
    document.getElementById('container')
);
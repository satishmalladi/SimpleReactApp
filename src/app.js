import React from 'react';
import ReactDom from 'react-dom';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <h1>Welcome to React App!</h1>
        );
    }
}
ReactDom.render(<App />, document.getElementById('root'));
import LikerComponent from './liker.jsx';
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return (
            <div>
                <p>Hello React!!!!</p>
                <LikerComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));

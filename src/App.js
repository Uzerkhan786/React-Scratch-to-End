import ReactDOM from 'react-dom';
import React from 'react';
const header = React.createElement('div', {},
    React.createElement('div', {},
        React.createElement('h1', {}, 'header'),
        React.createElement('h3', {}, 'third')
    ));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header)




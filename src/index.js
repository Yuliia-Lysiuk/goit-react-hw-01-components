import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

// const element = React.createElement('a', { href: 'cccc' }, 'fdshfjkdshgdhsg');
// ReactDOM.render(element, document.querySelector('#root'));

// const el1 = <span>hello </span>;
// const el2 = <span>world</span>;
// const jsx = (
//   <div>
//     {el1}
//     {el2}
//   </div>
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

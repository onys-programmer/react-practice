import React from 'react';
import ReactDom from 'react-dom';

function renderButton(value) {
  return (
    <button type="button">
      {value}
    </button>
  );
}

function renderButtons() {
  return (
    <div>
      {[1, 2, 3, 4].map((i) => (
        renderButton(i)
      ))}
    </div>
  );
}

const element = (
  <div>
    <p>Hello, world!</p>
    <p>Hi</p>
    {renderButtons()}

  </div>
);

ReactDom.render(element, document.getElementById('app'));
console.log(element);

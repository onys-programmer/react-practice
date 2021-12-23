/* @jsx createElement */

function createElement(tagName, props, ...children) {
  console.log(tagName, props, ...children);

  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

console.log('hi');

let count = 0;

function handleClick() {
  count += 1;
  console.log(count);
  console.log('click!');
  render();
}

function render() {
  const element = (
    <div id="hello" className="greeting">
      <p>Hello, world!</p>
      <p>Hi!</p>
      <button type="button" onClick={handleClick}>
        click me! (
          {count}
        )
      </button>
    </div>
  );
  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();

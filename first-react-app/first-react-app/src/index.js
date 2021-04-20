import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const btnText = 'Click Me!';
  const labelText = 'Enter name;';

  return (
    <div>
      <label className="laber" htmlFor="name">{labelText}</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}} type="submit">
          {btnText}
      </button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
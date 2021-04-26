import React from 'react';

import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';


class Button extends React.Component {
  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => value === 'english' ? 'Name' : 'Voorleggen'}
        </LanguageContext.Consumer>
      </button>
    );
  }
  

  render() {
    return (
      <ColorContext.Consumer>
        { color => this.renderButton(color) }
      </ColorContext.Consumer>
    );
  }
}

export default Button;
import React from 'react';

import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';
import CreateUser from './CreateUser';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
            <CreateUser />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
};

export default App;
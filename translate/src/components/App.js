import React from 'react';

import ColorContext from '../contexts/ColorContext';
import { LanguageStore } from '../contexts/LanguageContext';
import CreateUser from './CreateUser';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <CreateUser />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
};

export default App;
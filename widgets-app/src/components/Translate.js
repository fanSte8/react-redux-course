import React, { useEffect, useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Afrikans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  const [debouncedText, setDebouncedText] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [text]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
        <label>Enter Text</label>
        <input value={text} onChange={(event) => setText(event.target.value)} />
        </div>
      </div>
      <Dropdown 
        selected={language} 
        options={options} 
        onSelectedChange={setLanguage}
        message="Select a language"
      />
      <hr/>
      <h3 className="ui header">Output: </h3>
      <Convert language={language.value} text={debouncedText} />
    </div>
  );
}

export default Translate;
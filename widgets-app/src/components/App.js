import React, { useState } from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end js framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a very popular framework'
  },
  {
    title: 'How do you use React?',
    content: 'You use react by creating component'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  }
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown 
        selected={selected} 
        options={options} 
        onSelectedChange={setSelected}
      /> */}
      <Translate />
    </div>
  );
}

export default App;
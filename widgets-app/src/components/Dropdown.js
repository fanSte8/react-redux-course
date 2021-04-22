import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, message }) => {

  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });
 
    return () => {
      document.body.removeEventListener("click", onBodyClick, { capture: true });
    };
  }, []);

  const renderedOption = options.map(option => {
    if (selected === option) {
      return;
    }

    return (
      <div 
        key={option.value} 
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{message}</label>
          <div 
            className={`ui selection dropdown ${open ? 'visible active' : ''}`} 
            onClick={() => setOpen(!open)}
          >
            <i className="dropdown icon" />
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedOption}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
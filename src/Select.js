import React from 'react';

export default class Select extends React.Component {

  render () {
    const { name, value, options, width} = this.props;
    return (
      <label>
        {name}:
        <select className="input-small" name="refinery" style={{width:`${width || 65}px`}}>
          {options.map(option => (
            <option selected={ String(value) === String(option.value) ? 'selected' : '' } key={`${option.value}_${option.label}`} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }

}

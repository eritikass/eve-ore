import React from 'react';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

export default class Select extends React.Component {

  render () {
    const { classes, name, value, options, helperText } = this.props;
    return (
      <TextField
      id={ `select-${name}` }
      select
      label={ `${name}:` }
      className={ classes.textField }
      value={ String(value) }
      onChange={ this.props.onChange }
      SelectProps={{
        MenuProps: {
          className: classes.menu,
        },
      }}
      helperText={ helperText || '' }
      margin="normal"
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
    );
  }

}

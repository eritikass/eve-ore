import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

import Select from './Select';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Form extends React.Component {
  state = {
    name: 'Cat in the Hat',
    refinery: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  syncPropsToState () {
    const { data } = this.props;
    this.setState({
      raw: data.raw,
      // settings
      refinery: data.refinery,
      tax: data.tax,
      implant: data.implant,
      // skills
      reprocessing: data.skills.reprocessing,
      reprocessing_efficiency: data.skills.reprocessing_efficiency,
      ore_processing: data.skills.ore_processing,
    });
  }

  componentDidMount() {
    this.syncPropsToState();
  }

  getNumberRangeForSelect(min, max, percentage = false) {
    return Array.apply(null, {length: max}).map((v, i) => ({
      value: String(min + i),
      label: percentage ? `${min + i}%` : String(min + i),
    }))
  }

  render() {
    const { classes, data } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">

        <Select
          name="refinery"
          value={ this.state.refinery }
          onChange={this.handleChange('refinery')}
          classes={ classes }
          options={ data.meta.refinerys.map(v => {
            return {
              value: v.efficiency,
              label: v.name,
            };
          }) }
        ></Select>
        <Select
          name="tax"
          value={ this.state.tax }
          onChange={this.handleChange('tax')}
          classes={ classes }
          options={ this.getNumberRangeForSelect(0, 100, true) }
        ></Select>
        <Select
          name="implant"
          value={ this.state.implant }
          onChange={this.handleChange('implant')}
          classes={ classes }
          options={ data.meta.implants.map(v => {
            return {
              value: String(v),
              label: v && `${v}%` || 'none',
            };
          }) }
        ></Select>

        <Select
          name="Reprocessing"
          value={ this.state.reprocessing }
          onChange={this.handleChange('reprocessing')}
          classes={ classes }
          options={ this.getNumberRangeForSelect(1, 5, false) }
        ></Select>

        <Select
          name="Reprocessing Efficiency"
          value={ this.state.reprocessing_efficiency }
          onChange={this.handleChange('reprocessing_efficiency')}
          classes={ classes }
          options={ this.getNumberRangeForSelect(1, 5, false) }
        ></Select>

        <Select
          name="Ore processing"
          value={ this.state.ore_processing }
          onChange={this.handleChange('ore_processing')}
          classes={ classes }
          options={ this.getNumberRangeForSelect(1, 5, false) }
        ></Select>

      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);

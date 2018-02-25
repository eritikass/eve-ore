import React from "react";
import {
  Link,
} from "react-router-dom";

import Select from "./Select";

class Form extends React.Component {
  state = {
    raw: "",
    // settings
    refinery: 50,
    tax: 0,
    implant: 0,
    // skills
    reprocessing: 5,
    reprocessing_efficiency: 5,
    ore_processing: 5
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  syncPropsToState(props = this.props) {
    const { data } = props;
    this.setState({
      showForm: false,
      // form data
      raw: data.raw,
      // settings
      refinery: data.refinery,
      tax: data.tax,
      implant: data.implant,
      // skills
      reprocessing: data.skills.reprocessing,
      reprocessing_efficiency: data.skills.reprocessing_efficiency,
      ore_processing: data.skills.ore_processing
    });
    console.log('raw', data.raw);
  }

  componentDidMount() {
    this.syncPropsToState();
  }

  componentWillReceiveProps(newProps) {
    this.syncPropsToState(newProps);
  }

  getNumberRangeForSelect(min, max, percentage = false) {
    return Array.apply(null, { length: max }).map((v, i) => ({
      value: String(min + i),
      label: percentage ? `${min + i}%` : String(min + i)
    }));
  }

  toggleForm = e => {
    e.preventDefault();
    this.setState({
      showForm: !this.state.showForm
    });
  };

  render() {
    const { data } = this.props;
    const { state } = this;
    const { showForm } = state;

    return (
      <form id="dataform" className="form-inline">
        <center className={showForm ? "" : "hide"}>
          <b>Refinery:</b> <br />
          <Select
            name="refinery"
            value={state.refinery}
            onChange={this.handleChange("refinery")}
            width="250"
            options={data.meta.refinerys.map(v => {
              return {
                value: v.efficiency,
                label: v.name
              };
            })}
          />
          <Select
            name="tax"
            value={state.tax}
            onChange={this.handleChange("tax")}
            options={this.getNumberRangeForSelect(0, 100, true)}
          />
          <Select
            name="implant"
            value={state.implant}
            onChange={this.handleChange("implant")}
            options={data.meta.implants.map(v => {
              return {
                value: String(v),
                label: (v && `${v}%`) || "none"
              };
            })}
          />
          <br />
          <b>Skills</b> (<a
            target="_blank"
            href="//wiki.eveonline.com/en/wiki/Reprocessing#Skills"
          >
            wiki
          </a>): <br />
          <Select
            name="Reprocessing"
            value={state.reprocessing}
            onChange={this.handleChange("reprocessing")}
            options={this.getNumberRangeForSelect(1, 5, false)}
          />
          <Select
            name="Reprocessing Efficiency"
            value={state.reprocessing_efficiency}
            onChange={this.handleChange("reprocessing_efficiency")}
            options={this.getNumberRangeForSelect(1, 5, false)}
          />
          <Select
            name="Ore processing"
            value={state.ore_processing}
            onChange={this.handleChange("ore_processing")}
            options={this.getNumberRangeForSelect(1, 5, false)}
          />

          <br/><br/>

          copy paste from eve assets or contract (ctrl+a > ctrl+c), compressed ore only! (<Link to="/ore/all"><i>example oretable</i></Link>)<br/>
          <textarea value={state.raw} className="orelist" style={{width:'100%', width:'760px'}} rows="15" />


        </center>

        <center>
          <button
            id="settings"
            className={`btn ${
              showForm ? 'btn-large btn-primary"' : "btn-info"
            }`}
            onClick={this.toggleForm}
            style={{'marginTop': showForm && '10px'}}
          >
            {showForm ? "show refinery results" : "show/change settings"}
          </button>
        </center>

      </form>
    );
  }
}

export default Form;

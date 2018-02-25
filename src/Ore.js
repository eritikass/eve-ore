import React, {
  Component,
} from "react";

import Form from './Form';

import loadData from './loadData';


class Ore extends Component {

  state = {
    hash: '',
    data: undefined,
  };

  loadData = (hash) => {
    loadData(hash).then(data => {
      console.log('upa1', data);
      this.setState({
        hash,
        data,
      });
    });
  }

  componentWillMount() {
    const { hash } = this.props.match.params;
    this.loadData(hash);
  }

  componentWillReceiveProps(newProps) {
    const { hash } = newProps.match.params;
    this.loadData(hash);
  }

  render () {
    const { hash, data } = this.state;
    console.log('!!state!!', hash, data);
    return (
      <div>
        { data && <Form data={ data.settings } /> }
        ORE [ { hash } ]
        <pre>{ JSON.stringify(data, null, 4) }</pre>
      </div>
    );
  }

}

export default Ore;

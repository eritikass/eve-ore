import React, {
  Component,
} from "react";

import Form from './Form';
import TestTable from './TestTable';

import loadData from './loadData';


class Ore extends Component {

  state = {
    hash: '',
    data: undefined,
  };

  componentWillMount() {
    const { hash } = this.props.match.params;
    console.log('hash', hash);
    loadData(hash).then(data => {
      console.log('@', hash, data);
      this.setState({
        hash,
        data,
      });
    });
  }

  render () {
    const { hash, data } = this.state;
    console.log('!!state!!', hash, data);
    return (
      <div>
        { data && <Form data={ data.settings } /> }
        { data && <TestTable data={ data.minerals } /> }
        ORE [ { hash } ]
        {/* <pre>{ JSON.stringify(data, null, 4) }</pre> */}
      </div>
    );
  }

}

export default Ore;

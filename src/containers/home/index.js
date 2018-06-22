import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../actions/counter';
const AREA_MAP = {
  default: 'כל האזורים',
  pt: 'פתח תקווה'
}
class Home extends Component {
  constructor(props) {
    super()
    this.state = {
      areaTitle: 'default',
      car: ''
    }
  }
  onSelect = (evt) => {
    this.setState({ areaTitle: evt });
  }
  onCarChange = (e) => {
    this.setState({car: e.value});
  }
  render () {
    const { areaTitle } = this.state;
    var cars = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}
  ];

    return (
      <div>
       <Dropdown value={this.state.car} options={cars} onChange={this.onCarChange} style={{width:'150px'}} placeholder="Select a Car"/>;
      { /*<DropdownButton onSelect={ this.onSelect }
        title={ AREA_MAP[areaTitle] }
        id={`dropdown-basic-1`}>
        <MenuItem eventKey="pt">{ AREA_MAP["pt"] }</MenuItem>
    </DropdownButton> */ }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);

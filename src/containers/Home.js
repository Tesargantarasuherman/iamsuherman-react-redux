import React, { Component } from "react";
import { TabelComponent } from "../components";
import { connect } from 'react-redux'
import {getUserAction} from '../actions/userAction'
 class Home extends Component {
  componentDidMount(){
    this.props.dispatch(getUserAction())
  }

  render() {
    return (
      <div>
        <TabelComponent/>
      </div>
    );
  }
}
export default connect()(Home)
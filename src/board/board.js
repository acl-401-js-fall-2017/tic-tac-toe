import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

export default class Board extends PureComponent {

  render(){
    return(
      <table className="board">
        <tr>
          <td>a</td>
          <td>b</td>
          <td>c</td>
        </tr>
        <tr>
          <td>d</td>
          <td>e</td>
          <td>f</td>
        </tr>
        <tr>
          <td>g</td>
          <td>h</td>
          <td>i</td>
        </tr>
      </table>
    );
  }
}
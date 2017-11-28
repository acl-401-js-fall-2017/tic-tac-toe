import React, { PureComponent } from 'react';

class Tile extends PureComponent {
  render() {
    const { mark, row, col, onMove } = this.props;
    return (
      <td
        onClick={() => mark ? null : onMove(row, col)}
        style={{
          height: '160px',
          width: '160px',
          border: 'black solid 1px',
          background: mark ? 'white' : 'gray',
          fontSize: '140px',
          margin: '5px'
        }}
      >{mark}</td>
    );
  }
}

export default Tile;
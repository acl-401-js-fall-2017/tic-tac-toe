import React, { PureComponent } from 'react';

class Tile extends PureComponent {
  render() {
    const { mark, row, col, onMove } = this.props;
    return (
      <td
        onClick={() => mark ? null : onMove(row, col)}
        style={{
          height: '100px',
          width: '100px',
          border: 'gray 10px',
          borderStyle: mark ? 'inset' : 'outset',
          background: mark ? 'white' : 'gray',
          fontSize: '85px',
          fontWeight: 'bold',
          margin: '5px'
        }}
      >{mark}</td>
    );
  }
}

export default Tile;
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { initGame } from './actions';
import { connect } from 'react-redux'; 

class Game extends PureComponent {

  componentDidMount(state) {
    console.log('we just mounted');
    const board = [ ['b', 'b', 'b'], [ 'b', 'b', 'b'], ['b', 'b', 'b'] ];
    this.props.initGame({ board, turn:'PlayerX', finished: false }) ;
  }

  render(){
    return (
      <div>
        <StyledDiv>
          { this.props.game.board.map(row => {
            console.log('row is', row);
            return row.map(column => {
              console.log('column is', column);
              return <div style={{ border: '1px solid black' }}>{column}</div>;
            });
          })}
        </StyledDiv>
      </div>
    );
  }
}

const Block = styled.div`
border: 1px solid black;
`;

const StyledDiv = styled.div`
margin-left: 30%;
width: 500px;
height: 500px;
display: grid;
grid-template-columns: repeat(3, 33%);
grid-template-rows: repeat(3, 33%);
border: 1px solid black;
`;

function mapStateToProps(state) {
  return {
    game: state
  };
}
export default connect(
  mapStateToProps,
  { initGame }
)(Game);
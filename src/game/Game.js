import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { initGame } from './actions';
import { connect } from 'react-redux'; 

class Game extends PureComponent {

  componentDidMount(state) {
    console.log('we just mounted');
    const board = [ ['a', 'a', 'a'], [ 'a', 'a', 'a'], ['a', 'a', 'a'] ];
    this.props.initGame({ board, turn:'PlayerX', finished: false }) ;
    console.log('props after init Game', this.props);
  }

  render(){
    return (
      <div>
        {/* <StyledDiv>
          { this.props.state.board.map(row => (
            row.map(column => {
              return (<Block>A</Block>);
            })
          ))}
        </StyledDiv> */}
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
  console.log('state is', state);
  return {
    game: state
  };
}
export default connect(
  mapStateToProps,
  { initGame }
)(Game);
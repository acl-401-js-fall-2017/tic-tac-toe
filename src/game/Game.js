import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { takeTurn } from './actions';
import { connect } from 'react-redux'; 

class Game extends PureComponent {

  handleTurn = index => {
    this.props.takeTurn(index);
  }

  handleFinish = finished =>{
    console.log(finished);
  }

  // componentWillReceiveProps(){
  //   if(this.props.state.finished) this.handleFinish(this.props.state.finished);
  // }

  render(){
    return (
      <div>
        <h1>{this.props.state.finished}</h1>
        <StyledDiv>
          { 
            this.props.state.board.map((square, i) => {
              return <div key={i} onClick={() => this.handleTurn(i)} style={{ border: '1px solid black' }}>{square}</div>;
            }
            )}
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
    state: state
  };
}

export default connect(
  mapStateToProps,
  { takeTurn }
)(Game);
import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


const Detail = ({ toDos }) => {

  const id = Number(useParams().id);

  const toDo = toDos.find(toDo => toDo.id === id);

  // const test = { value: 777 };

  return (
    <h1>{test?.value}
    </h1>
  );
};

function mapStateToProps(state, ownProps) {
  console.log(ownProps);

  return { toDos: state };
}


export default connect(mapStateToProps)(Detail);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../component/toDo';
import { actionCreators } from '../store';

const Home = (props) => {

  const { toDos, addToDo } = props;

  const [text, setText] = useState("");
  // const [title, setTitle] = useState("");

  const onChangeText = e => {
    setText(e.target.value);
  }
  // const onChangeTitle = e => {
  //   setTitle(e.target.value);
  // }

  const onSubmit = e => {
    e.preventDefault();
    addToDo(text);
    setText("");
    // setTitle("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChangeText} />
        {/* <input type="text" value={title} onChange={onChangeTitle} /> */}
        <button>Add</button>
      </form>
      <ul>{toDos.map(toDo => <ToDo {...toDo} key={toDo.id} />)}</ul>
    </>
  );
};

function mapSateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text))
  };
}


export default connect(mapSateToProps, mapDispatchToProps)(Home);
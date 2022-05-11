import { useState } from "react";
import { connect } from "react-redux";
import { ADD_TODO } from "../redux/actions";

const Todo = (props) => {
  //  console.log("Todo Render");

  const { todo, clickAdd } = props;
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        <input onChange={changeText} value={text} />
        <button onClick={() => clickAdd(text, setText)}>todo</button>
        <ul>
          {todo.map((row, index) => {
            return <li key={index}>{row}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todo: state.todo.todo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickAdd: (text, setText) => {
      if (text) {
        dispatch({ type: ADD_TODO, payload: { todo: text } });
      }
      setText("");
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

import Counter from "./components/Counter";
import Todo from "./components/Todo";
import "./styles.css";

const App = (props) => {
  return (
    <>
      <Counter index={0} />
      <br />
      <Counter index={1} />
      <br />
      <Counter index={2} />
      <br />
      <br />

      <Todo />
    </>
  );
};

export default App;

/*
import { connect } from "react-redux";

const App = ({ count }) => {
  return (
    <p>count: {count}</p>
  );
}
*/

import { useEffect } from "react";
import { connect } from "react-redux";
import { ADD_COUNT, SUB_COUNT, INIT_COUNT } from "../redux/actions";
import { makeMapStateToProps } from "../redux/selector";

const Counter = (props) => {
  console.log(`Counter Render:${props.index}`);
  const { init, count, clickAdd, clickSub } = props;

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <span>{count}</span>
      <button onClick={clickAdd}>add</button>
      <button onClick={clickSub}>sub</button>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(`mapStateToProps:${ownProps.index}`, state);

  if (!state.count[ownProps.index]) {
    return {};
  }

  return { count: state.count[ownProps.index].value };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //  dispatch({ type: INIT_COUNT, payload: { index: ownProps.index } });

  return {
    init: () =>
      dispatch({ type: INIT_COUNT, payload: { index: ownProps.index } }),
    clickAdd: () =>
      dispatch({
        type: ADD_COUNT,
        payload: { value: 1, index: ownProps.index }
      }),
    clickSub: () =>
      dispatch({
        type: SUB_COUNT,
        payload: { value: 2, index: ownProps.index }
      })
  };
};

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(makeMapStateToProps, mapDispatchToProps)(Counter);

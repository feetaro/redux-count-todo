import { useEffect } from "react";
import { connect } from "react-redux";
import { ADD_COUNT, SUB_COUNT, INIT_COUNT } from "../redux/actions";

const Counter = (props) => {
  console.log(`unter Render:${props.index}`);
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
  if (!state.count[ownProps.index]) {
    return ownProps;
  }

  //  console.log(state.count[0].value)
  //  return { count: state.count[ownProps.index].value };
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

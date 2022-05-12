import { createSelectorCreator, defaultMemoize } from "reselect";
import { isEqual } from "lodash-es";

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

export const makeMapStateToProps = () => {
  const getFormValues = makeGetFormValues();
  const mapStateToProps = (state, props) => {
    return getFormValues(state, props);
  };
  return mapStateToProps;
};

const makeGetFormValues = () => {
  return createDeepEqualSelector([getFormValue], (newProps) => {
    console.log(`makeGetFormValues`, newProps);
    return newProps;
  });
};

const getFormValue = (state, ownProps) => {
  console.log(`getFormValue:${ownProps.index}`, state);

  if (!state.count[ownProps.index]) {
    return {};
  }

  return { count: state.count[ownProps.index].value };
};

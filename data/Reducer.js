const LOAD_STUDIES = 'LOAD_STUDIES';

const initAllStudies = [];

const initialState = {
  allStudies: initAllStudies,
}

const loadStudies = (state, studies) => {
  return {
    ...state,
    allStudies: [...studies]
  }
}

function rootReducer(state=initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_STUDIES:
      return loadStudies(state, payload.allStudies);
    default:
      return state;
  }
}

export { 
  rootReducer, 
  LOAD_STUDIES
};
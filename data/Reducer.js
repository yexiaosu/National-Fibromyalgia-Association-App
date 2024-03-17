const LOAD_STUDIES = 'LOAD_STUDIES'
const LOAD_PROFILE = 'LOAD_PROFILE'

const initAllStudies = []

const initialState = {
  allStudies: initAllStudies,
  currentProfile: {}
}

const loadStudies = (state, studies) => {
  return {
    ...state,
    allStudies: [...studies]
  }
}

const loadProfile = (state, profile) => {
  return {
    ...state,
    currentProfile: { ...profile }
  }
}

function rootReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LOAD_STUDIES:
      return loadStudies(state, payload.allStudies)
    case LOAD_PROFILE:
      return loadProfile(state, payload.currentProfile)
    default:
      return state
  }
}

export { rootReducer, LOAD_STUDIES, LOAD_PROFILE }

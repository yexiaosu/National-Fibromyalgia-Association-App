const LOAD_STUDIES = 'LOAD_STUDIES'
const LOAD_PROFILE = 'LOAD_PROFILE'
const ADD_USER = 'ADD_USER'

const initAllStudies = []

const initialState = {
  allStudies: initAllStudies,
  currentProfile: {},
  users: []
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

const addUser = (state, user) => {
  return {
    ...state,
    users: [...state.users, user]
  }
}


function rootReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LOAD_STUDIES:
      return loadStudies(state, payload.allStudies)
    case LOAD_PROFILE:
      return loadProfile(state, payload.currentProfile)
    case ADD_USER:
      return addUser(state, payload.user)
    default:
      return state
  }
}


export { rootReducer, LOAD_STUDIES, LOAD_PROFILE, ADD_USER }

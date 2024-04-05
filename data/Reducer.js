const LOAD_STUDIES = 'LOAD_STUDIES'
const LOAD_PROFILE = 'LOAD_PROFILE'
const UPDATE_USER = 'UPDATE_USER'

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

const updateUser = (state, user) => {
  return {
    ...state,
    currentProfile: { ...user }
  }
}

function rootReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LOAD_STUDIES:
      return loadStudies(state, payload.allStudies)
    case LOAD_PROFILE:
      return loadProfile(state, payload.currentProfile)
    case UPDATE_USER:
      return updateUser(state, payload.user)
    default:
      return state
  }
}

export { rootReducer, LOAD_STUDIES, LOAD_PROFILE, UPDATE_USER }

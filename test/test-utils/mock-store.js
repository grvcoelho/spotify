import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
export const configureStore = configureMockStore(middlewares)


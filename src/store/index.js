import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './../reducer/index'
import userReducer from './../reducer/user'

export default configureStore({
  reducer: {
      authentication:authenticationReducer,
      user:userReducer
  },
})
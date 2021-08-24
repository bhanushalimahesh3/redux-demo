import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './../reducer/index'

export default configureStore({
  reducer: {
      authentication:authenticationReducer
  },
})

/* El Store es como quiero que luzca mi fuente central de la informacion, mi fuente unica de la verdad*/

import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})
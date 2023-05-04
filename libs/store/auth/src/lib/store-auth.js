// export function storeAuth() {
//   return 'store-auth';

import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "@workspace/redux/auth/demo-slice"

// }
export const store = configureStore({
  reducer: {
      [userApi.reducerPath] : userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userApi.middleware),
  
})
// export default store;
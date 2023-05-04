// export function reduxAuthDemoSlice() {
//   return 'redux-auth-demo-slice';
// }

// import { createSlice } from "@reduxjs/toolkit";

// const DemoSlice = createSlice({
//   name : "demo",
//   initialstate: 1,
//   reducers:{
//     increment: (state)=>{
//       state.value +=1
//     }
//   }
// })

// export const{ increment } = DemoSlice.actions
//  export default DemoSlice.reducer

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery : fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/"}),
    endpoints:(builder)=>({
        getAllUser:builder.query({
            query:()=>"users",
        }),
       
        // getSingleCourse:builder.query({
        //     query:(code)=>`tenant/cd2466f4-c40f-4a8e-ab92-617a1dac54ac/code/${code}`
        // })

        // deleteUser: builder.mutation({
        //     query: ({id, body}) => ({
        //       url: `user/${id}`,
        //       method: 'DELETE',
        //       body: body
        //     }),
        //   }),
      
    
})
})

export const { useGetAllUserQuery,useDeleteUserMutation } = userApi;
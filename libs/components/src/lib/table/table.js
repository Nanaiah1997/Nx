// import * as React from 'react';

import { Button } from "../button/button";
import { useStyle } from "./table.style";
// import {useDeleteUserMutation, useGetAllUserQuery}from '@workspace/redux/auth/demo-slice'





// export const Table = () => {
//   const {data:user=[]}= useGetAllUserQuery();

//   console.log(user)


//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name </th>
//             <th>Email</th>
//             <th>Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {user.map((u, i) => {
//             return (
//               <tr key={i}>
//                 <td> {u.id} </td>
//                 <td> {u.name} </td>
//                 <td> {u.email} </td>
//                 <td> {u.phone} </td>
                
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );

 
// };

export const Table=({coloums, row, handleClick})=>{

  const styles= useStyle();

  // const[del, setDel]= useState([]);
  
  // useEffect(()=>{
  //   setDel(row)
  // },[row])

  // console.table(del)
  // const handleDelete = (e)=>{
  //   setDel(del.filter((u)=>u.id !== e))
  // }
  
 
  return(
<table className={styles.table}>
 <thead className={styles.thead_th}>
   {  coloums.map((m) => {
      return <th >{m.title}</th>
     })}
 </thead>
 <tbody >
  {
    row.map((r)=>{
      return <tr className={styles.tbody}>
        {coloums.map((m)=>{
        return(<td>{r[m.key]}</td>
        )
        })}
       <td><Button label="delete"  handleClick={()=>handleClick(r.id)} bgcolor='red' /></td> 
      </tr>
    })
  }
 </tbody>
 </table>
 
  )
}


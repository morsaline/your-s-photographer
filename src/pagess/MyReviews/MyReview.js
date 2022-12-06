// import React, { useContext } from "react";
// import { AuthContext } from "../../Contextss/AuthProvider";

// const MyReview = ({ myReview, handleDelete }) => {
//   const { serviceName, author, review, photoURL, email, _id } = myReview;
//   const { user } = useContext(AuthContext);
//   return (
//     <div className="overflow-x-auto w-full">
//       <table className="table w-full">
//         <thead>
//           <tr>
//             <th>
//               <label>
//                 <img
//                   style={{ height: "30px", width: "30px" }}
//                   title={user?.displayName}
//                   src={user?.photoURL || "unregister"}
//                   className="rounded-full"
//                 />
//               </label>
//             </th>
//             <th>Author Detail</th>
//             <th>Review</th>
//             <th>Service Name</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="p-6">
//             <th>
//               <label>
//                 <button onClick={() => handleDelete(_id)}>X</button>
//               </label>
//             </th>
//             <td>
//               <div className="flex items-center space-x-3">
//                 <div className="avatar">
//                   <div className="mask mask-squircle w-12 h-12">
//                     <img src={photoURL} alt="Avatar Tailwind CSS Component" />
//                   </div>
//                 </div>
//                 <div>
//                   <div className="font-bold">{author}</div>
//                   <div className="text-sm opacity-50">{email}</div>
//                 </div>
//               </div>
//             </td>
//             <td>
//               <span className="badge badge-ghost badge-sm">{review}</span>
//             </td>
//             <td>{serviceName}</td>
//             <th>
//               <button className="btn btn-ghost btn-xs">Update</button>
//             </th>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyReview;

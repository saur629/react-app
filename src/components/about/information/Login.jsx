// src/Login.jsx
import "./Login.css"; // Import the CSS file
//import "./App.css";
function Login() {
  return (
    <div 
      className="h-screen flex items-center justify-center bg-cover bg-center relative border-2 p-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-black/90 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
// function Login() {
//   return (
//     <div  >
//     <div className="border-2 p-4">
//       {/* <form className="login-form">
        
      
//       </form> */}

//       <div className="bg-[url('/bg.jpg')] bg-cover bg-center w-full h-screen">
        

//         <div class="grid h-48 grid-cols-3 place-content-center gap-4 ...">
//           <div>01</div>
//           <div className="border-2">
//             <div className=" gap-2">
//               <div className="border-2- p-6 w-80 h-32  ">
//                 <input type="email" placeholder="Enter Email" className="login-input" />
//               </div>
              
//               <div className="border- border-gray-300 rounded p-3">
//                 <input
//                   type="password"
//                   placeholder="Enter Password"
//                   className="login-input"
//                 />
//               </div>

              

//               {/* <img className="h-" src="./public/bg.jpg" /> */}
//             </div>

//             <button type="submit"   className="w-full bg-red-800 text-white py-2 rounded hover:bg-red-700 transition">
//               Login
//             </button>
//           </div>
//           <div>03</div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Login;

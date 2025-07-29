// import React from "react";

// const App = () => {
//   const myname = "Omkar";
//   const myage = 22;
//   return (
//     <div>
//       <h1>Hey there Omkar This Side</h1>
//       <h2>
//         Hello How are you my Name is {myname} , my age is {myage}
//       </h2>
//     </div>
//   );
// };

// export default App;

// // Funtion calling
// import React from "react";

// const App = () => {
//   const user = "user";

//   const abc = () => {
//     console.log("Hello");
//   };

//   return (
//     <div>
//       <h1>username is {user}</h1>
//       <button onClick={abc}>Change user</button>
//     </div>
//   );
// };

// export default App;

// Funtion calling
// import React from "react";

// const App = () => {
//   let user = "Omkar";

//   const username = () => {
//     user = "Harsh";
//   };

//   return (
//     <div>
//       <h1>username is {user}</h1>
//       <button onClick={abc}>Change user</button>
//     </div>
//   );
// };

// export default App;

//hooks -special type of funtion

// Funtion calling
// import React from "react";

// const App = () => {
//   let user = "user";

//   const abc = () => {
//     console.log(user);
//     user = "Harsh";
//     console.log(user);
//   };

//   return (
//     <div>
//       <h1>username is {user}</h1>
//       <button onClick={abc}>Change user</button>
//     </div>
//   );
// };

// export default App;

// hooks
// import React, { useState } from "react";

// const App = () => {
//   const [a, setA] = useState(10);
//   const changeI = () => {
//     setA(a + 1);
//   };

//   return (
//     <div>
//       <h1>Value of A is {a}</h1>
//       <button onClick={changeI}>Increase</button>
//       <button onClick={() => setA(a - 1)}>Decrease</button>
//     </div>
//   );
// };

// export default App;

// adding css and tailwind
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-700 to-pink-500 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-5xl font-bold mb-4">Hey there</h1>
      <h2 className="text-2xl mb-6">Omkar This Side</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Hello");
        }}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
        action=""
      >
        <input
          type="text"
          placeholder="Enter something..."
          className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          type="submit"
          className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-md transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

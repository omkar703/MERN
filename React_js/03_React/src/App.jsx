import React from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    setUsername("");
    setPassword("");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 via-rose-500 to-red-400 flex items-center justify-center px-8">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 lg:p-12">
        <h1 className="text-5xl font-extrabold text-center text-pink-600 mb-4">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-500 mb-8 text-lg">
          Please login to continue
        </p>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-base"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="•••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-base"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-lg transition duration-200 text-lg"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

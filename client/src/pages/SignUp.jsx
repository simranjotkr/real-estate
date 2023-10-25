import React from "react";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg m-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button
          className="text-white p-3 bg-slate-700 
        rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
}

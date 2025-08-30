"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Adjust path to your firebaseConfig.js

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Only for sign up
  const [error, setError] = useState("");
  const router = useRouter();

  const handleAuthAction = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    if (isLogin) {
      // Handle Login
      try {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/get-started");
      } catch (err) {
        setError("Failed to log in. Please check your credentials.");
        console.error(err);
      }
    } else {
      // Handle Sign Up
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Note: You might want to save the username to Firestore here
        router.push("/get-started");
      } catch (err) {
        setError(
          "Failed to create an account. The email might already be in use."
        );
        console.error(err);
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-10 shadow-xl">
        {/* Header */}
        <div>
          <h1 className="text-center text-3xl font-bold text-gray-800">
            <Link href="/">LeetLeap</Link>
          </h1>
          <h2 className="mt-4 text-center text-2xl font-extrabold text-gray-900">
            {isLogin ? "Welcome Back!" : "Create your Account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError(""); // Clear error on toggle
              }}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleAuthAction}>
          <div className="space-y-4 rounded-md shadow-sm">
            {!isLogin && (
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Username"
                />
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {error && <p className="text-center text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-3 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isLogin ? "Log In" : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

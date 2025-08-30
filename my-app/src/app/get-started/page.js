"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../context/AuthContext";
import { auth } from "@/firebaseConfig";
import Link from "next/link";
export default function GetStartedPage() {
  const { user, loading } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    // If the loading is finished and there's no user, redirect to auth page
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  // While loading, show a simple loading indicator
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  // If the user is logged in, show the protected content
  if (user) {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800">
              <Link href="/">LeetLeap</Link>
            </h1>
            <div>
              <span className="text-gray-600 mr-4">Welcome, {user.email}</span>
              <button
                onClick={() => auth.signOut()} // Sign out the user
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Log Out
              </button>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-bold text-gray-900">Your Dashboard</h2>
          <p className="mt-2 text-gray-700">
            This is a protected page. You can only see this if you are logged
            in.
          </p>
          {/* Add your dashboard components here */}
        </div>
      </div>
    );
  }

  // This will be shown briefly before the redirect happens
  return null;
}

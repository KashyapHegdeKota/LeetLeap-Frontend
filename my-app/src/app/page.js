import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">LeetLeap</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto flex min-h-[calc(100vh-64px)] items-center px-6 py-12">
        {/* Left Side: Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
              Crack the Code to Your Future
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              LeetLeap provides the terminal velocity you need to accelerate
              your tech career through hands-on challenges.
            </p>
            <div className="mt-8">
              {/* CORRECTED LINK COMPONENT */}
              <Link
                href="/get-started"
                className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Stylized Terminal Mockup */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div
            className="
              relative mx-auto w-full max-w-md transform
              rounded-2xl bg-white p-4 shadow-2xl
              transition-all duration-500
              hover:scale-105 hover:rotate-0
              md:-rotate-3
            "
          >
            {/* Window Header Mockup */}
            <div className="mb-2 flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>

            {/* Terminal Body */}
            <div className="h-64 rounded-lg bg-gray-900 p-4 font-mono text-sm text-white">
              <div className="flex items-center">
                <span className="text-green-400">$</span>
                <p className="ml-2">./run_challenge --all</p>
              </div>
              <div className="mt-2">
                <span className="text-purple-400">Compiling...</span>
              </div>
              <div className="mt-2">
                <span className="text-blue-400">Success!</span>
                <span className="ml-2">Test cases passed: 10/10</span>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-400">$</span>
                <div className="ml-2 h-4 w-2 animate-pulse bg-green-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

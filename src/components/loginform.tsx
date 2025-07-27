import React, { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import travelImage from "../assets/image 26.png"; // Ensure correct path

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto rounded-none lg:rounded-2xl shadow-none lg:shadow-2xl overflow-hidden bg-white min-h-screen lg:min-h-0">
      {/* Left Column - Login Form */}
      <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-sky-200 via-white to-white flex flex-col justify-center">
        {/* Logo Icon */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="p-2 bg-white rounded-xl shadow-lg">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-login-orange rounded-xl flex items-center justify-center">
              <LogIn className="w-5 h-5 sm:w-7 sm:h-7 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-login-text mb-2">
            Sign in with email
          </h1>
          <p className="text-login-text-muted text-sm px-4 sm:px-0">
            Sign in to stay connected and get the most out of our services.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-3 sm:space-y-4 max-w-md mx-auto w-full">
          {/* Email Input */}
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-login-bg border-login-border rounded-lg text-login-text placeholder:text-login-text-muted focus:border-login-orange focus:ring-1 focus:ring-login-orange text-sm sm:text-base"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-login-bg border-login-border rounded-lg text-login-text placeholder:text-login-text-muted focus:border-login-orange focus:ring-1 focus:ring-login-orange pr-10 sm:pr-12 text-sm sm:text-base"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-login-text-muted hover:text-login-text p-1"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-login-text-muted text-xs sm:text-sm hover:text-login-orange">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-500-hover text-white py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base mt-4 sm:mt-6"
          >
            Get Started
          </Button>

          {/* Register Link */}
          <div className="text-center pt-3 sm:pt-4">
            <span className="text-login-text-muted text-xs sm:text-sm">
              Don't have any account?{" "}
              <a href="/register" className="text-orange-500 hover:underline font-medium">
                Register
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="w-full lg:w-1/2 relative min-h-64 lg:min-h-0">
        <img
          src={travelImage}
          alt="Login Visual"
          className="w-full h-full object-cover"
        />
        {/* Optional text overlay can go here if needed */}
      </div>
    </div>
  );
};

export default LoginForm;
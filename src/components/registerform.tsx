import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import travelImage from "../assets/image 26.png"; // Ensure correct path

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex w-full max-w-7xl mx-auto rounded-2xl shadow-2xl overflow-hidden bg-white">
  {/* Left Column - Login Form */}
      <div className="w-1/2 p-8 bg-gradient-to-b from-sky-200 via-white to-white flex flex-col justify-center">
        {/* Logo Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-2 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-login-orange rounded-xl flex items-center justify-center">
              <LogIn className="w-7 h-7 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-login-text mb-2">
            Register
          </h1>
          <p className="text-login-text-muted text-sm">
            Join us Today and enjoy a seamless<br></br> experience with your new account.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-login-bg border-login-border rounded-lg text-login-text placeholder:text-login-text-muted focus:border-login-orange focus:ring-1 focus:ring-login-orange"
            />
          </div>

          <div>
            <Input
              type="text"
              placeholder="Full Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-login-bg border-login-border rounded-lg text-login-text placeholder:text-login-text-muted focus:border-login-orange focus:ring-1 focus:ring-login-orange"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-login-bg border-login-border rounded-lg text-login-text placeholder:text-login-text-muted focus:border-login-orange focus:ring-1 focus:ring-login-orange pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-login-text-muted hover:text-login-text"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Password Input */}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-login-bg border-login-border rounded-lg text-login-text placeholder:text-login-text-muted focus:border-login-orange focus:ring-1 focus:ring-login-orange pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-login-text-muted hover:text-login-text"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-500-hover text-white py-3 rounded-lg font-medium transition-colors"
          >
            Get Started
          </Button>

          {/* Register Link */}
          <div className="text-center pt-4">
            <span className="text-login-text-muted text-sm">
              Already have an Account?{" "}
              <a href="/login" className="text-orange-500 hover:underline font-medium">
                Sign In
              </a>
            </span>
          </div>
        </form>
      </div>

      {/* Right Column - Image */}
      <div className="w-1/2 relative">
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

export default RegisterForm;

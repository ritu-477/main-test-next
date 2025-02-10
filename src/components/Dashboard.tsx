"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";

const Dashboard = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [remember, setRemember] = useState(false); // ✅ Fix: Added missing state

  useEffect(() => {
    if (typeof window !== "undefined") { 
      const isAuthenticated = localStorage.getItem("isAuthenticated");
      if (isAuthenticated && window.location.pathname !== "/dashboard") { // ✅ Fix: Corrected pathname check
        router.push("/dashboard");
      }
    }
  }, [router]);

  // Function to handle form submission
  const onSubmit = (data: { email: string; password: string }) => {
    console.log("Submitted Data:", data);

    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
    router.push("/dashboard");
  };

  return (
    <div className="h-screen max-w-[1597px] mx-auto bg-light-white">
      <div className="container py-[30px] xl:ps-[235px] xl:pr-[27px] max-w-[1597px] mx-auto px-5">
        <div className="flex gap-[120px]">
          <div className="xl:w-[456px] flex flex-col w-full">
            {/* Logo Section */}
            <div className="max-w-[163px] pt-5 pb-[138.92px]">
              <Link href="/">
                <Image 
                  src="/assets/images/webp/logo-image.webp" 
                  alt="Logo Image" 
                  width={163} 
                  height={31.71} 
                />
              </Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-3xl leading-custom-2xl font-semibold">Welcome Back</h2>
              <p className="text-sm leading-custom-xl text-custom-gray font-normal pb-[31px]">Welcome back! Please enter your details.</p>

              {/* Email Input */}
              <label className="block font-medium text-base leading-5 text-dark-black pb-[6px]">Email</label>
              <input
                {...register("email", { 
                  required: "Email is required", 
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" }
                })}
                className="w-full outline-none py-5 px-4 border border-gray-300 rounded-lg mb-3 bg-white text-sm"
                placeholder="Email"
                type="email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              {/* Password Input */}
              <label className="block font-medium text-base leading-5 text-dark-black pb-[6px]">Password</label>
              <input
                {...register("password", { 
                  required: "Password is required", 
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
                className="w-full outline-none py-5 px-4 border border-gray-300 rounded-lg mb-3 bg-white text-sm"
                type="password"
                placeholder="Password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

              <div className="flex justify-between items-center mb-4">
                <label className="flex items-center space-x-2 text-gray-600">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                    className="w-4 h-4 border-gray-300 rounded focus:ring-black"
                  />
                  <span>Remember for 30 days</span>
                </label>
                <Link href="/forgot-password" className="text-blue-500 text-sm">
                  Forgot password?
                </Link>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
                Sign In
              </button>

              <button className="w-full mt-3 flex items-center justify-center border py-3 rounded-lg font-medium">
                <Image
                  src="/assets/images/webp/google-icon.webp" 
                  alt="Google Icon"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Sign in with Google
              </button>
              <p className="text-center text-gray-600 mt-4">
                Don’t have an account?{" "}
                <Link href="/sign-up" className="text-blue-500 font-medium">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
          <div className="xl:w-[759px] w-full rounded-[20px] h-[899px]">
            <Image 
              src="/assets/images/webp/hero-image.webp" 
              alt="Hero Image" 
              width={759} 
              height={899} 
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

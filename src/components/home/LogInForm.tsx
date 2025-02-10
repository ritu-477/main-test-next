"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


const LogInForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const isAuthenticated = localStorage.getItem("isAuthenticated");
      if (isAuthenticated === "true") {
        router.push("/dashboard");
      }
    }, [router]);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
  
      const emailSyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!email || !password) {
        setError("Email and password are required");
        return;
      }
  
      if (!emailSyntax.test(email)) {
        setError("Invalid email format");
        return;
      }
  
      if (password.length < 6) {
        setError("Password must have a minimum of 6 characters");
        return;
      }
  
      if (!remember) {
        setError("You must agree to remember for 30 days");
        return;
      }
  
      localStorage.setItem("isAuthenticated", "true");
      router.push("/dashboard");
    };
  
    return (
        <div className="py-[30px] max-lg:pt-8">
        <div className="max-w-[1597px] mx-auto lg:px-[27px] max-lg:px-[35px]">
          <div className="flex justify-end lg:gap-[120px] flex-wrap max-2xl:justify-center">
            <div className="lg:pt-5">
              <Image
                src="/assets/images/webp/logo-image.webp"
                alt="page-logo"
                width={163}
                height={61.71}
                className="pointer-events-none pb-[138.9px] max-md:pb-[90px]"
              />
              <form onSubmit={handleSubmit} className="max-w-[456px]">
                <h2 className="text-3xl leading-custom-2xl font-semibold">
                  Welcome Back
                </h2>
                <p className="text-sm leading-custom-xl text-custom-gray font-normal pb-[31px]">
                  Welcome back! Please enter your details.
                </p>
                <div className="pb-[18px]">
                  <label
                    htmlFor="email"
                    className="font-medium text-base leading-5 text-dark-black pb-[6px]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-[14px] py-5 outline-none w-[456px] rounded-lg border border-light-gray max-md:w-[320px] shadow-[0_1px_2px_0_#1018280D] placeholder:text-custom-gray text-custom-gray"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="font-medium text-base leading-5 text-dark-black pb-[6px]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-[14px] py-5 outline-none w-[456px] rounded-lg border border-light-gray max-md:w-[320px] shadow-[0_1px_2px_0_#1018280D] placeholder:text-custom-gray text-custom-gray"
                  />
                </div>
                <div className="flex md:items-center justify-between pt-[18px] max-md:flex-col max-md:gap-[14px]">
                  <label
                    htmlFor="remember"
                    className="inline-flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      id="remember"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="!size-5 !bg-white !rounded-md !border !border-solid !border-custom-white"
                    />
                    <span className="font-inter leading-6 text-custom-blue">
                      Remember for 30 days
                    </span>
                  </label>
                  <Link
                    href="/"
                    className="text-custom-dark-blue leading-6 text-base font-inter"
                  >
                    Forgot password
                  </Link>
                </div>
                {error && <p className="text-red-500 pt-6">{error}</p>}
                <button
                  type="submit"
                  className="pt-[9px] outline-none pb-[10px] bg-dark-black text-white w-full mt-6 hover:bg-green-800 transition-all duration-300 rounded-[9px]"
                >
                  Sign In
                </button>
                <button className="pt-[11px] pb-3 bg-white w-full mt-[6px] rounded-[9px] border border-custom-white flex items-center gap-[10px] justify-center">
                <Image
                                        src="/assets/images/webp/google-icon.webp"
                                        alt="google-icon"
                                        width={20}
                                        height={20}
                                        className="mr-2"
                                    />
                  <p className="text-sm leading-5 text-custom-black font-medium">Sign in with Google</p>
                </button>
                <p className="font-inter leading-6 text-base md:text-center pt-[18px] text-custom-blue">
                  Don’t have an account?{" "}
                  <Link href="/" className="text-custom-dark-blue">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
            <Image
              src="/assets/images/webp/hero-image.webp"
              alt=""
              width={759}
              height={899}
              className="pointer-events-none max-lg:pt-24"
            />
          </div>
        </div>
      </div>
    );
};

export default LogInForm;
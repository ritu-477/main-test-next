'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const LoginForm = () => {
  const router = useRouter();
  const form = {email: "", password: "", checkbox: false,};

  const [formData, setFormData] = useState(form);
  const [error, setError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const emailSyntax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(true);
    setCheckboxError(!formData.checkbox);

    if (
      formData.email.includes("@") &&
      formData.password.length >= 6 &&
      formData.checkbox
    ) {
      setFormData(form);
      setError(false);
      setCheckboxError(false);
      localStorage.setItem("isAuthenticated", "true");
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Redirecting to dashboard...",
        timer: 2000,
        showConfirmButton: false,
      });
      setTimeout(() => router.push("/dashboard/button-1"), 2000);
    }
  };

  return (
    <div className="py-[30px] max-lg:pb-24 bg-light-white">
      <div className="max-w-[1597px] mx-auto lg:px-[27px] max-lg:px-[35px]">
        <div className="flex justify-end lg:gap-[120px] flex-wrap max-2xl:justify-center ">
          <div className="lg:pt-5">
            <Image src="/assets/images/webp/logo-image.webp" alt="page-logo"width={163}  height={61.71} className="pointer-events-none pb-[138.9px] max-md:pb-[90px]"
            />
            <h2 className="text-3xl leading-custom-2xl font-semibold">
              Welcome Back
            </h2>
            <p className="text-sm leading-custom-xl text-custom-gray font-normal pb-[31px]">
              Welcome back! Please enter your details.
            </p>
            <form onSubmit={handleSubmit} noValidate className="max-w-[456px]">
              <div className="pb-[18px]">
                <label
                  htmlFor="email"
                  className="font-medium text-base leading-5 text-dark-black pb-[6px]"
                >
                  Email
                </label>
                <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value }) } placeholder="Email" className="px-[14px] py-5 outline-none w-[456px] rounded-lg border border-light-gray max-md:w-[320px] shadow-[0_1px_2px_0_#1018280D] placeholder:text-custom-gray text-custom-gray"
                />
                {error && formData.email.length === 0 ? (
                  <p className="text-red-600 pt-2">Email is required</p>
                ) : !emailSyntax.test(formData.email) &&
                  formData.email.length > 0 ? (
                  <p className="text-red-600 pt-2">Enter valid email</p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="font-medium text-base leading-5 text-dark-black pb-[6px]"
                >
                  Password
                </label>
                <input type="password" id="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value }) } placeholder="••••••••" className="px-[14px] py-5 outline-none w-[456px] rounded-lg border border-light-gray max-md:w-[320px] shadow-[0_1px_2px_0_#1018280D] placeholder:text-custom-gray text-custom-gray"
                />
                {error && formData.password.length === 0 ? (
                  <p className="text-red-600 pt-2">Password is required</p>
                ) : formData.password.length < 6 &&
                  formData.password.length > 0 ? (
                  <p className="text-red-600 pt-2">
                    Password must be 6 characters
                  </p>) : (
                  ""
                )}
              </div>
              {/* Remember Me & Forgot Password */}
              <div className="flex md:items-center justify-between pt-[18px] max-md:flex-col max-md:gap-[14px]">
                <label
                  htmlFor="remember"
                  className="inline-flex items-center gap-3 cursor-pointer"
                >
                  <input type="checkbox" id="remember" checked={formData.checkbox} onChange={(e) => setFormData({ ...formData, checkbox: e.target.checked })
                    }
                    className="!size-5 !bg-white !rounded-md !border !border-solid !border-custom-white"
                  />
                  <span className="font-inter leading-6 text-custom-blue">
                    Remember for 30 days
                  </span>
                </label>
                <Link
                  href="https://main-test-next.vercel.app/"
                  className="text-custom-dark-blue leading-6 text-base font-inter"
                >
                  Forgot password
                </Link>
              </div>
              {checkboxError && (
                <p className="text-red-500 pt-2">You must agree to the terms</p>
              )}
              <button
                type="submit"
                className="pt-[9px] outline-none pb-[10px] text-sm leading-6 bg-dark-black text-white w-full mt-6 hover:bg-green-400 transition-all duration-300 rounded-[9px]"
              >
                Sign In
              </button>
            </form>
            {/* Google Login */}
            <Link href="https://www.google.com/" target="blank" className="pt-[10px] pb-[11px] bg-white w-full mt-[6px] rounded-[9px] border border-custom-white flex items-center gap-[10px] justify-center hover:bg-green-400 transition-all duration-300">
              <Image src="/assets/images/webp/google-icon.webp" alt="google-icon" width={20} height={20} className="mr-2" />
              <p className="text-sm leading-5 text-custom-black font-medium">Sign in with Google</p>
            </Link>
            {/* Sign Up Link */}
            <p className="font-inter lg:justify-center leading-6 flex gap-[10px] text-base md:text-center pt-[18px] text-custom-blue">
              Don’t have an account?{" "}
              <Link href="https://main-test-next.vercel.app/" className="text-custom-dark-blue">
                Sign up
              </Link>
            </p>
          </div>
          {/* Hero Image */}
          <Image src="/assets/images/webp/hero-image.webp" alt="hero-image" width={759} height={899} className="pointer-events-none xl:max-w-[759px] max-w-[530px] w-full lg:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
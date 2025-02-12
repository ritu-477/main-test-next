"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FORM_DATA } from "@/utils/helper";

const LogInForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; remember?: string }>({});

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      router.push("/dashboard");
    }
  }, [router]);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string; remember?: string } = {};
    const emailSyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailSyntax.test(formData.email.trim())) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.trim().length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (!remember) {
      newErrors.remember = "Please check the 'Remember Me' option.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "Redirecting to your dashboard...",
      timer: 2000,
      showConfirmButton: false,
    });

    if (remember) {
      localStorage.setItem("isAuthenticated", "true");
    } else {
      sessionStorage.setItem("isAuthenticated", "true");
    }

    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div className="py-[30px] max-lg:pb-24 bg-light-white">
      <div className="max-w-[1597px] mx-auto lg:px-[27px] max-lg:px-[35px]">
        <div className="flex justify-end lg:gap-[120px] flex-wrap max-2xl:justify-center">
          <div className="lg:pt-5">
            <Image src="/assets/images/webp/logo-image.webp" alt="page-logo" width={163} height={61.71} className="pointer-events-none pb-[138.9px] max-md:pb-[90px] !w-auto !h-auto object-cover" />
            <form noValidate onSubmit={handleSubmit} className="max-w-[456px]">
              <h2 className="text-3xl leading-custom-2xl font-semibold">Welcome Back</h2>
              <p className="text-sm leading-custom-xl text-custom-gray font-normal pb-[31px]">Welcome back! Please enter your details.</p>
              {FORM_DATA.map(({ id, label, type, placeholder }) => (
                <div key={id} className="pb-[18px] flex flex-col">
                  <label htmlFor={id} className="font-medium text-base leading-5 text-dark-black pb-[6px]">
                    {label}
                  </label>
                  <input type={type} id={id} value={formData[id as keyof typeof formData]} placeholder={placeholder} onChange={(e) => {
                    setFormData({ ...formData, [id]: e.target.value });
                    setErrors((prevErrors) => ({
                      ...prevErrors, [id]: "",
                    }));
                  }}
                    className="px-[14px] py-5 outline-none w-[456px] rounded-lg border border-light-gray max-md:w-[320px] shadow-[0_1px_2px_0_#1018280D] placeholder:text-custom-gray text-custom-gray"
                  />
                  {errors[id as keyof typeof errors] && <p className="text-red-500 text-sm mt-1">{errors[id as keyof typeof errors]}</p>}
                </div>
              ))}
              {/* Remember Me & Forgot Password */}
              <div className="flex md:items-center justify-between pt-[18px] max-md:flex-col max-md:gap-[14px]">
                <label htmlFor="remember" className="inline-flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" id="remember" checked={remember} onChange={(e) => { setRemember(e.target.checked); setErrors((prevErrors) => ({ ...prevErrors, remember: "", })); }}
                    className="!size-5 !bg-white !rounded-md !border !border-solid !border-custom-white"
                  />
                  <span className="font-inter leading-6 text-custom-blue">Remember for 30 days</span>
                </label>
                <Link href="/" className="text-custom-dark-blue leading-6 text-base font-inter">Forgot password</Link>
              </div>
              {/* Show error if 'Remember Me' is not checked */}
              {errors.remember && <p className="text-red-500 text-sm mt-1">{errors.remember}</p>}
              {/* Submit Button */}
              <button type="submit" className="pt-[9px] outline-none pb-[10px] text-sm leading-6 bg-dark-black text-white w-full mt-6 hover:bg-green-400 transition-all duration-300 rounded-[9px]">Sign In</button>
              {/* Google Login */}
              <Link href="https://www.google.com/" target="blank" className="pt-[10px] pb-[11px] bg-white w-full mt-[6px] rounded-[9px] border border-custom-white flex items-center gap-[10px] justify-center hover:bg-green-400 transition-all duration-300">
                <Image src="/assets/images/webp/google-icon.webp" alt="google-icon" width={20} height={20} className="mr-2" />
                <p className="text-sm leading-5 text-custom-black font-medium">Sign in with Google</p>
              </Link>
              {/* Sign Up Link */}
              <p className="font-inter lg:justify-center leading-6 flex gap-[10px] text-base md:text-center pt-[18px] text-custom-blue">
                Don’t have an account?{" "}
                <Link href="/" className="text-custom-dark-blue">Sign up</Link>
              </p>
            </form>
          </div>
          {/* Hero Image */}
          <Image src="/assets/images/webp/hero-image.webp" alt="hero-image" width={759} height={899} className="pointer-events-none xl:max-w-[759px] max-w-[530px] w-full lg:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default LogInForm;

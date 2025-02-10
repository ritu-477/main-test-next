"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
const Dashboard = () => {

    const router = useRouter(); 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      if (localStorage.getItem("isAuthenticated")) {
        router.push("/dashboard");
      }
    }, [router]);
  
    const onSubmit = (data: any) => {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      router.push("/dashboard");
    };

  return (
    <div className="flex h-screen">
    <div className="w-1/2 flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-96 p-8 shadow-lg rounded-md">
        <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
        <p className="text-gray-500 mb-6">Please enter your details.</p>
        <label className="block mb-2">Email</label>
        <input
          {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" } })}
          className="w-full p-2 border rounded mb-2"
          type="email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <label className="block mb-2">Password</label>
        <input
          {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
          className="w-full p-2 border rounded mb-2"
          type="password"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <button className="w-full bg-black text-white py-2 rounded mt-4">Sign In</button>
      </form>
    </div>
    <div className="w-1/2 bg-blue-600 flex justify-center items-center">
      <div className="text-white text-4xl font-bold">Logo</div>
    </div>
  </div>
  )
}

export default Dashboard
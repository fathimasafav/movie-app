import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log("Email:", email, "Password:", password);
    // }
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-[#0f0f0f] p-8 rounded-2xl w-full max-w-md shadow-md gap-5">
                <h1 className="text-white text-6xl font-bold text-center">Login</h1>
                <p className="text-gray-400 text-xl text-center mb-6">to MovieApp</p>
                <from >
                    <div>
                        <input
                            type="email"
                            className="w-full px-4 py-2 rounded-md bg-[#2a2a2a] text-white focus:outline-none mb-6"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            className="w-full px-4 py-2 rounded-md bg-[#2a2a2a] text-white focus:outline-none mb-6"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit"
                        className="w-full bg-[#7b61ff] hover:bg-[#684bff] text-white font-semibold py-2 rounded-md transition duration-200"
                    >Login</button>

                </from>
                <div className="flex justify-between mt-4 text-sm text-gray-400">
                    <a href="#" className="">Forgot password?</a>
                    <a href="#">Sign up</a>
                </div>
            </div>
        </div>
    )

}
export default Login
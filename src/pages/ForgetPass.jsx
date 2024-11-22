/* eslint-disable no-unused-vars */
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../provider/AuthProvider";

const ForgetPass = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage("A password reset email has been sent to your email address.");
                setEmail("");
            })
            .catch((err) => {
                setError("Failed to send reset email. Please check your email address.");
                console.error(err);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#97CBDC]">
            <div className="card bg-white w-full max-w-md shadow-2xl rounded-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-600 text-center mb-6">
                    Reset Your Password
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-neutral-700">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-4">
                        <button
                            type="submit"
                            className="btn bg-neutral-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-neutral-700 transition duration-300"
                        >
                            Send Reset Email
                        </button>
                    </div>

                    {/* Message or Error */}
                    {message && <p className="text-green-500 text-sm mt-2">{message}</p>}
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default ForgetPass;

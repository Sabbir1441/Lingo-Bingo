/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            setError(
                "Password must contain at least 6 characters, including an uppercase letter, a lowercase letter, and a number."
            );
            return;
        };


        createNewUser(email, password,)
            .then((result) => {
                const user = result.user;
                setUser(user)
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/")
                    })
                    .catch((err) => {
                        setError("Failed to update profile.");
                    });
            })
            .catch((error) => {
                const errorMessage = error.message || "An unexpected error occurred.";
                setError(errorMessage);
            });
    };

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                navigate("/");
            })
            .catch(error => {

            })
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#97CBDC]">
            <div className="card bg-white w-full max-w-md shadow-xl rounded-lg">
                <form onSubmit={handleSubmit} className="card-body px-8 py-10">
                    <h2 className="text-2xl font-bold text-neutral-600 text-center mb-6">
                        Create Your Account
                    </h2>

                    {/* Name Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-neutral-700">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text text-neutral-700">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                            required
                        />
                    </div>

                    {/* Photo URL Field */}
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text text-neutral-700">Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            type="url"
                            placeholder="Enter your photo URL"
                            className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text text-neutral-700">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                            required
                        />
                        {error && (
                            <p className="text-red-500 text-sm mt-2">
                                {error}
                            </p>
                        )}

                    </div>

                    {/* Register Button */}
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn bg-neutral-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-neutral-700 transition duration-300"
                        >
                            Register
                        </button>
                    </div>

                    <p className="text-center font-semibold mt-4">
                        Already have an account?{" "}
                        <Link to="/auth/login">
                            <span className="text-red-500">Login</span>
                        </Link>
                    </p>

                    {/* Divider */}
                    <div className="divider text-neutral-500 mt-6">OR</div>

                    {/* Google Login */}
                    <div className="flex justify-center mt-4">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline border-neutral-300 text-neutral-600 hover:bg-neutral-800 hover:text-neutral-100 flex items-center gap-2">
                            <span className="text-neutral-500 text-xl">
                                <i className="fab fa-google"></i>
                            </span>
                            Google
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error , setError ]= useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        console.log({name, email, photo, password});

        createNewUser(email, password,)
        .then((result)=>{
            const user = result.user;
            setUser(user)
            updateUserProfile({ displayName: name , photoURL: photo})
                .then(() => {
                    console.log(user)
                    navigate("/")
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
        })
    }

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

                </form>
            </div>
        </div>
    );
};

export default Register;
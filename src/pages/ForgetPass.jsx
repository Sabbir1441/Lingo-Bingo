
import { Link } from "react-router-dom";

const ForgetPass = () => {
    return (

        <div className="flex items-center justify-center min-h-screen bg-[#97CBDC]">
            <div className="card bg-white w-full max-w-md shadow-xl rounded-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-600 text-center mb-6">
                    Forgot Your Password?
                </h2>

                {/* Email Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-neutral-700">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                        required
                    />
                </div>

                {/* Reset Button */}
                <div className="form-control mt-6">
                    <button className="btn bg-neutral-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-neutral-700 transition duration-300">
                        Reset Password
                    </button>
                </div>

                {/* Link back to login */}
                <p className="text-center font-semibold mt-4">
                    Remembered your password?{" "}
                    <Link to="/auth/login" className="text-neutral-500 hover:underline">
                        Back to Login
                    </Link>
                </p>
            </div>
        </div>



    );
};

export default ForgetPass;
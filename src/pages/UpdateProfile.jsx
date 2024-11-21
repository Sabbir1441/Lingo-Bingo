
import { Link } from "react-router-dom";

const UpdateProfile = () => {
    return (

        <div className="flex items-center justify-center min-h-screen bg-[#97CBDC]">
            <div className="card bg-white w-full max-w-md shadow-2xl rounded-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-600 text-center mb-6">
                    Update Your Profile
                </h2>

                {/* Photo URL Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-neutral-700">Profile Photo URL</span>
                    </label>
                    <input
                        type="url"
                        placeholder="Enter your profile photo URL"
                        className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                        required
                    />
                </div>

                {/* Name Field */}
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text text-neutral-700">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                        required
                    />
                </div>

                {/* Update Button */}
                <div className="form-control mt-6">
                    <button className="btn bg-neutral-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-neutral-700 transition duration-300">
                        Update
                    </button>
                </div>

                {/* Link back to profile */}
                <p className="text-center font-semibold mt-4">
                    Want to go back?{" "}
                    <Link to="/profile" className="text-neutral-500 hover:underline">
                        Back to Profile
                    </Link>
                </p>
            </div>
        </div>

    );
};

export default UpdateProfile;
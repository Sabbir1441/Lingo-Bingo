
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";





const UpdateProfile = () => {


    const { user, setUser } = useContext(AuthContext); // Access current user and context setter
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const [message, setMessage] = useState(""); // To display success or error messages

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        if (!name.trim() || !photo.trim()) {
            setMessage("Both name and photo URL are required.");
            return;
        }

        // Update profile using Firebase's updateProfile
        updateProfile(user, { displayName: name, photoURL: photo })
            .then(() => {
                // Update user in context for instant UI changes
                setUser({ ...user, displayName: name, photoURL: photo });
                setMessage("Profile updated successfully!");
            })
            .catch((error) => {
                setMessage(`Error: ${error.message}`);
            });
    };


    return (

        <div className="flex items-center justify-center min-h-screen bg-[#97CBDC]">
            <div className="card bg-white w-full max-w-md shadow-2xl rounded-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-600 text-center mb-6">
                    Update Your Profile
                </h2>

                <form onSubmit={handleUpdateProfile}>
                    {/* Photo URL Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-neutral-700">Profile Photo URL</span>
                        </label>
                        <input
                            type="url"
                            placeholder="Enter your profile photo URL"
                            className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Update Button */}
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn bg-neutral-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-neutral-700 transition duration-300"
                        >
                            Update
                        </button>
                    </div>

                    {/* Success/Error Message */}
                    {message && (
                        <p
                            className={`text-center mt-4 font-semibold ${message.includes("Error") ? "text-red-500" : "text-green-500"
                                }`}
                        >
                            {message}
                        </p>
                    )}
                </form>

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
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-neutral-800">
                    Welcome, {user.displayName}!
                </h1>
                <p className="text-lg text-gray-700 mt-2">
                    Here is your profile information.
                </p>
            </div>

            <div className="mt-8 flex flex-col items-center bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                {
                    
                }
                <img
                    src={user?.photoURL || "https://via.placeholder.com/150"}
                    alt=""
                    className="w-32 h-32 rounded-full shadow-md mb-6"
                />
                <div className="text-left w-full">
                    <p className="text-lg font-semibold text-gray-800">
                        Name: <span className="font-normal">{user?.displayName || "N/A"}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mt-2">
                        Email: <span className="font-normal">{user?.email || "N/A"}</span>
                    </p>
                </div>
                <Link
                    to="/update-profile"
                    className="mt-6 px-6 py-2 bg-neutral-600 text-white font-semibold rounded-lg shadow-md hover:bg-neutral-700 transition"
                >
                    Update Profile
                </Link>
            </div>
        </div>
    );
};

export default Profile;
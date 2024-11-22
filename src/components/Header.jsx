/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="w-11/12 mx-auto text-center py-10">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Welcome, {user?.displayName}!</h1>
                <p className="text-2xl md:text-3xl text-gray-700 mb-2">
                    Dive into a world of words and unlock endless possibilities.
                </p>
                <p className="text-lg md:text-xl text-gray-600">
                    Your journey to mastering vocabulary starts here. Let's make learning fun!
                </p>
            </div>



        </div>
    );
};

export default Header;
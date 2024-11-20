import { Link } from "react-router-dom";
import logo from "../assets/images.jpeg"

const NavBar = () => {
    return (
        <div className="flex justify-between items-center  py-4 w-11/12 mx-auto">
            <img className="w-[70px] rounded-full" src={logo} />

            <ul className="flex gap-4 font-semibold text-lg text-white">
                <Link to="/">Home</Link>
                <Link to="/start-learning">Start-Learning</Link>
                <Link to="/tutorials">Tutorials</Link>
                <Link to="/about">About</Link>
            </ul>

            <div className="flex gap-4">
                <button className="font-semibold text-lg text-white">photo</button>
                <button className="font-semibold text-lg text-white">log in</button>
            </div>
        </div>
    );
};

export default NavBar;
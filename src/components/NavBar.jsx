import { NavLink } from "react-router-dom";
import logo from "../assets/images.jpg";
import "./Nav.css";

const NavBar = () => {
    return (
        <div className="flex justify-between items-center  py-4 w-11/12 mx-auto">
            <NavLink to="/"><img className="w-[70px] rounded-full" src={logo} /></NavLink>

            <ul className=" flex flex-col  md:flex-row gap-4 font-semibold text-lg text-white">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/start-learning">Start-Learning</NavLink>
                <NavLink to="/tutorials">Tutorials</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </ul>

            <div className="flex gap-4">
                <button className="font-semibold text-lg text-white">photo</button>
                <button className="btn btn-active btn-neutral">log in</button>
            </div>
        </div>
    );
};

export default NavBar;
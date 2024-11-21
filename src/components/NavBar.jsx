import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images.jpg";
import userlogo from "../assets/free-user-icon-3296-thumb.png";
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
                <img className="w-[50px]" src={userlogo} alt="" />
                <Link to="/auth/login"><button className="btn btn-active btn-neutral">log in</button></Link>
            </div>
        </div>
    );
};

export default NavBar;
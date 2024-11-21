import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AuthLayout = () => {
    return (
        <div className="bg-[#DDE8F0]">
            <div className="bg-[#018ABD]">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MainLayout = () => {
    const { user ,} = useContext(AuthContext);
    return (
        <div className="bg-[#DDE8F0]">
            {
                user && user?.email ? (<Header></Header>) : ""
            }
            
            <div className="bg-[#018ABD]">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
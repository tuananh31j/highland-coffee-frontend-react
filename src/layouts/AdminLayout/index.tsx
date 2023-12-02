import SiteBar from "../Components/SideBar";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {

    return (
        <>
            <div className="flex gap-[80px] ">
                <div className="relative w-96">
                <SiteBar />
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default LayoutAdmin;
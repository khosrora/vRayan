import { Outlet } from "react-router-dom";



const LayoutVideo = () => {
    return (
        <div class="authentication-wrapper authentication-cover">
            <div class="authentication-inner row m-0">
                <Outlet />
            </div>
        </div>
    );
}

export default LayoutVideo;
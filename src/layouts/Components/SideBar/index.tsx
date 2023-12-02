
const user = localStorage.getItem("user")
const SiteBar = () => {


    return (
        <>
            <div 
    className="transition-all  duration-700 fixed left-[294px] me-4  top-[20px] rounded-md bg-red-800 z-50 p-4">
    <i className="fa-solid fa-angles-left text-white"></i>
</div>
    
   
            <div className=" overflow-y-scroll overflow-x-visible duration-700 transition-all ease-in-out bg-red-700   h-screen  fixed">
            
            <h2 className="text-center pe-3 mx-auto mb-4 font-semibold text-4xl">Hignland
                coffee</h2>

            <nav className="flex flex-col m-5 ">
                <ul>
                    <li>
                        <div className="flex gap-2  items-center">
                            <div className=" h-10 w-10">
                                <img src={user && JSON.parse(user).user.img}
                                    className="rounded-full object-cover  w-full h-full" alt=""/>

                            </div>
                            <div className="flex gap-11 items-center">
                                <div className="">
                                    <p className="m-0 text-white">
                                        {user && JSON.parse(user).user.name}
                                    </p>
                                    <p className="font-light m-0 italic text-white">
                                    {user && JSON.parse(user).user.email}
                                    </p>
                                </div>

                            </div>

                        </div>
                    </li>
                    
                    <a className="text-white   " href="/">
                        <li className="mt-4 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg ">
                            <i className="hover:text-white fa-solid fa-house text-white"></i>
                            Trang chủ
                        </li>
                    </a>
                    <a className="text-white   " href="/admin/dashboard">
                        <li className="mt-3 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg ">
                            <i className="hover:text-white fa-solid fa-gauge text-white"></i>
                            Thống kê
                        </li>
                    </a>
                    
                    <a className="text-white  " href="/admin/category">
                        <li className="mt-3 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg">
                            <i className="hover:text-white fa-solid fa-hashtag text-white"></i>
                            Danh mục
                        </li>
                    </a>
                   
                    <a className="text-white  " href="/admin/product">
                        <li className="mt-3 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg">
                            <i className="hover:text-white fa-solid fa-mug-saucer text-white"></i>
                            Sản phẩm
                        </li>
                    </a>
                    <a className="text-white  " href="/admin/shop">
                        <li className="mt-3 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg">
                            <i className="hover:text-white fa-solid fa-shop text-white"></i>
                            Cửa hàng
                        </li>
                    </a>
                    <a className="text-white  " href="/admin/customer">
                        <li className="mt-3 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg">
                            <i className="hover:text-white fa-solid fa-people-group text-white"></i>
                            Khách hàng
                        </li>
                    </a>
                    
                    <a className="text-white  " href="/admin/banner">
                        <li className="mt-3 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg">
                            <i className="hover:text-white fa-solid fa-mountain-sun"></i>
                            Banner
                        </li>
                    </a>
                    
                </ul>
            </nav>
           
        </div>
        </>
    )
}

export default SiteBar;
// let user:null= null
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const user = localStorage.getItem("user")

const Header = () => {
    const menuUser = useRef<HTMLElement>(null);
    const userAvt = useRef<HTMLImageElement>(null);
    const logout = useRef<HTMLLIElement>(null);
    const navigate = useNavigate();
    useEffect(() => {
        
    
        // Gán sự kiện cho menuUser
        if (menuUser.current && userAvt.current && logout) {
            const handleMouseEnter = () => {
                menuUser.current && menuUser.current.classList.remove("hidden")
              };
          
              const handleMouseLeave = () => {
                menuUser.current && menuUser.current.classList.add("hidden")

              };
            const handleLogout = () => {
                localStorage.removeItem('user');
                navigate('/')
                window.location.reload()
            }
            logout.current?.addEventListener('click', handleLogout)
          userAvt.current.addEventListener('mouseenter', handleMouseEnter);
          menuUser.current.addEventListener('mouseleave', handleMouseLeave);
        }
    })
    return (
        <>
                <header className="mb-10">
        <div className="bg-red-700 flex justify-between p-4 px-10 items-center">
            <div className="w-[248px] "><div className="w-20"><NavLink to="/"><img src="/logoTab.png" alt=""/></NavLink></div></div>

            <div>
                <form action="" method="post">
                    <div><input className="border-2 z-50 rounded-s-md  w-96 py-2 px-2"
                            type="text" name="" id="" placeholder="Tìm kiếm từ khóa" />
                        <button type="submit"
                            className="text-black p-2 z-10 border-2 w-20 ms-[-6px] border-white rounded-e-md bg-white"><i
                                className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>

         
                   {user
            ? 
                        <div>
                            <div className="flex gap-4 items-center relative">
                                <span className="text-white italic  w-52 h-6 ">Xin chào! {JSON.parse(user).user.name}</span>
                                <img src={JSON.parse(user).user.img} ref={userAvt} className="userElement w-10 h-10 border rounded-full"/>
                                <span ref={menuUser} className=" menuElement  hidden absolute left-[77px]  w-40 h-48 top-4">
                                    <ul className="text-white absolute left-10 top-6  bg-white  rounded-md p-4 w-32 h-40">
                                    {JSON.parse(user).user.role == 1 ? <li className="hover:bg-slate-900 hover:text-white p-2 text-gray-900 rounded-md"><a href="/admin/product">Admin</a></li> : ''}
                                    <li ref={logout} className="hover:bg-slate-900 hover:text-white p-2 text-gray-900 rounded-md"><button className="btn-logout">Đăng xuất</button></li>
                                    </ul>
                                </span>
                            </div>
               
                        </div>
            : 
                        <div className="flex gap-4  w-[248px] justify-end">
                            <a href="/login" className="border-2 p-2 text-white rounded-md">Đăng nhập</a>
                            <a href="/register" className="border-2 p-2 text-white bg-slate-600 rounded-md">Đăngký</a>
                        </div>
                    
                
    
                   }</div>

        <nav>
        <ul className="flex  justify-between px-5  mt-10 text-lg items-center font-bold text-red-700">
        <li><NavLink to="/"
                className="hover:bg-amber-900 hover:text-white rounded-md p-2 flex items-center gap-4"><i
                    className="fa-solid fa-house"></i>
                TRANG
                CHỦ</NavLink></li>
       
       
        <li><NavLink to="/shop" className="hover:bg-amber-900 hover:text-white rounded-md p-2">CỬA HÀNG</NavLink></li>
        <li><NavLink to="/product" className="hover:bg-amber-900 hover:text-white rounded-md p-2">SẢN
                PHẨM</NavLink></li>
        <li><NavLink to="/contact" className="hover:bg-amber-900 hover:text-white rounded-md p-2">LIÊN
                HỆ</NavLink></li>
        <li><NavLink to="/profile" className="hover:bg-amber-900 hover:text-white rounded-md p-2">PROFILE</NavLink></li>
    </ul>
        </nav>

        
    </header>
        </>
    )
    
}

export default Header;
// let user:null= null
const Header = () => {
    return (
        <header>
        <div className="bg-red-700 flex justify-between p-4 px-10 items-center">
            <div className="w-[248px] "><div className="w-20"><a href="/"><img src="/logoTab.png" alt=""/></a></div></div>

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

         
                    <div className="flex gap-4  w-[248px] justify-end">
                        <a href="/login" className="border-2 p-2 text-white rounded-md">Đăng nhập</a>
                        <a href="/register" className="border-2 p-2 text-white bg-slate-600 rounded-md">Đăngký</a>
                    </div>
                
    
        </div>

        <nav>
        <ul className="flex  justify-between px-5  mt-10 text-lg items-center font-bold text-red-700">
        <li><a href="/"
                className="hover:bg-amber-900 hover:text-white rounded-md p-2 flex items-center gap-4"><i
                    className="fa-solid fa-house"></i>
                TRANG
                CHỦ</a></li>
       
       
        <li><a href="/shop" className="hover:bg-amber-900 hover:text-white rounded-md p-2">CỬA HÀNG</a></li>
        <li><a href="product" className="hover:bg-amber-900 hover:text-white rounded-md p-2">SẢN
                PHẨM</a></li>
        <li><a href="contact" className="hover:bg-amber-900 hover:text-white rounded-md p-2">LIÊN
                HỆ</a></li>
        <li><a href="/profile" className="hover:bg-amber-900 hover:text-white rounded-md p-2">PROFILE</a></li>
    </ul>
        </nav>

        
    </header>
    )
    
}

export default Header;
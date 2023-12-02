import { memo } from "react"

const Footer =() => {

    return (
        <footer className="mt-11 py-4 px-10 bg-slate-900 text-white">
      
        <div className="flex justify-between my-4 container">
            <div className="w-60 leading-7">
                <h2 className="font-semibold mb-3">HAI LẦN COFFEE CPG</h2>
                <p className="">Hai Lần coffee là dự án của sinh viên trường cao đẳng thực hành FPT
                    polytechnic</p>
                <img className="mt-3 w-20" src="/logoTab.png" alt=""/>
            </div>

            <div className="w-60 leading-7">
                <h2 className="font-semibold mb-3">THÔNG TIN CÔNG TY</h2>
                <p>
                    FPT phố Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội
                </p>
                <p>Số điện thoại: 0123456789</p>
                <p>hailan@gmail.com</p>
            </div>

            <div className="w-36 leading-8">
                <h2 className="font-semibold mb-3">MENU</h2>
                <ul className=" leading-8">
                    <li><a href="">TRANG CHỦ</a></li>
                    <li><a href="">CỬA HÀNG</a></li>
                    <li><a href="">SẢN PHẨM</a></li>
                    <li><a href="">LIÊN HỆ</a></li>
                    <li><a href="">GIỚI THIỆU</a></li>
                </ul>

            </div>

           
            <div>
                <h2 className="font-semibold mb-3">TỔNG ĐÀI HỖ TRỢ</h2>
                <div className="flex gap-4 items-center">
                    <div className="text-4xl">
                        <i className="fa-solid fa-phone-volume"></i>
                    </div>
                    <div className="leading-8">
                        <p>Lỗi sản phẩm: <span>019999999</span></p>
                        <p>Mua hàng: <span>018888888</span></p>
                        <p>hailan@gmail.com</p>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-md font-semibold">FOLLOW US</h3>
                    <div>
                        <span className="me-1"><i className="fa-brands fa-facebook-f"></i></span>
                        <span className="mx-1"><i className="fa-brands fa-twitter"></i></span>
                        <span className="mx-1"><i className="fa-brands fa-youtube"></i></span>
                        <span className="ms-1"><i className="fa-brands fa-square-instagram"></i></span>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </footer>
    )
}

export default memo(Footer)
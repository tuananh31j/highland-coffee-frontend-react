import { useEffect, useState } from "react";
import Product from "../../types/Product";
import ProductCard from "@/src/components/Product/Card";
import fetch from "../../utilities/api";
const HomePage = () => {
    const [productsList, setProductsList] = useState<Product[]>([])
    const getProducts = () => {
        fetch.getAll("products?_limit=8")
            .then(({ data }: { data: Product[] }) => {

                setProductsList(data)
                console.log(localStorage.getItem("user"));
            })
    }

    useEffect(() => {
        getProducts()
    }, [])
    return <div className="px-5">
        <div>
            <img src="/bn.jpg" className="w-full h-[500px] object-contain" alt="" />
        </div>
        <div className="flex  justify-between  my-5">
            <div className="text-center w-56">
                <img className="mx-auto my-4" src="/tietkiem.jpg" alt="" />
                <h4 className="font-semibold text-xl">Mua hàng siêu
                    tiết kiệm</h4>
                <p className="mt-1 font-light text-sm">Các sản phẩm luôn được bán với giá ưu đãi nhất
                </p>
            </div>

            <div className="text-center w-56">
                <img className="mx-auto my-4" src="/khuyenmai.jpg" alt="" />
                <h4 className="font-semibold text-xl">Khuyến mãi cực
                    lớn</h4>
                <p className="mt-1 font-light text-sm">Được hưởng chương trình và các khuyến mãi cực
                    lớn</p>
            </div>

            <div className="text-center w-56">
                <img className="mx-auto my-4" src="/chatluong.jpg" alt="" />
                <h4 className="font-semibold text-xl">Chất lượng</h4>
                <p className="mt-1 font-light text-sm">Nguyên liệu đảm bảo vệ sinh an toàn vệ sinh thực
                    phẩm</p>
            </div>

            <div className="text-center w-56">
                <img className="mx-auto my-4" src="/thanhtoan.jpg" alt="" />
                <h4 className="font-semibold text-xl">Thanh toán dễ
                    dàng</h4>
                <p className="mt-1 font-light text-sm">Trả tiền khi nhận hàng <br /><span>(COD)</span>
                </p>
            </div>
        </div>
        <h1 className="text-2xl font-bold my-10">Sản phẩm của chúng tôi:</h1>

        <div className="grid grid-cols-4 gap-5 text-center container">
            {productsList.map((item, i) => (
                <ProductCard key={i} product={item} />

            ))}
        </div>
    </div>
}

export default HomePage;
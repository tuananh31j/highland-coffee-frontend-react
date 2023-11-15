import { Product } from "../../types/Product"
type ProductCard = {
    product: Product
}

const ProductCard: React.FC<ProductCard> = ({product}) => {

    return (
        <>
            <div 
            className="hover:border-1 flex flex-col relative transition-all ease-in-out hover:border-gray-300 hover:rounded-md hover:scale-95 hover:shadow-md hover:shadow-slate-500 p-3">
            <a className="proDetails flex-shrink-0" href="/product/{item.id}"><img className="w-full object-cover h-72" src={product.image} alt=""/></a>
            <span className="absolute bg-red-700 p-1 text-white text-sm bottom-[88%] right-[78%]">7%</span>
            <div className="flex flex-col flex-1 mt-auto font-semibold my-4">
                <h1 className="text-xl  my-2">{product.title}</h1>
                <p className="text-red-700 mt-auto flex-shrink-0">
                <span className="text-lg ">{product.price.toLocaleString('vi-VN')}</span>
                        <span className="underline">đ</span>
                </p>

            </div>
            <button
                className="text-red-700 font-semibold bg-white border-2 mt-auto  border-red-700 rounded-md hover:bg-red-700 hover:text-white p-4 ">Mua
                Ngay
            </button>
        </div>
        </>
    )
}

export default ProductCard
import { useEffect, useState } from "react";
import Product from "../../types/Product";
import { useParams } from "react-router-dom";
import fetch from "../../utilities/api";
import ProductCard from "@/components/Product/Card";




const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Partial<Product | null>>(null);
    const [relatedProducts, setRelatedProducts] = useState<Partial<Product[] | null>>(null);

    const getProdetails = async () => {
        if (id) {
            const { data }: { data: Product } = await fetch.getOne(`products`, id)
            return data
        }

    }
    const getProList = async () => {
        const { data } = await fetch.getAll(`products`)
        return data;
    }

    const getPro = async () => {
        try {
            const [proDetails, proList] = await Promise.all([getProdetails(), getProList()])
            return { proDetails, proList };

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (id) {
            (async () => {
                const data = await getPro();
                const { proDetails, proList } = data as { proDetails: Product, proList: Product[] };
                const curPrice = Math.round(proDetails.price - (proDetails.price * proDetails.sale / 100)).toLocaleString('vi-VN')
                proDetails.curPrice = curPrice;
                const idCate: string = proDetails.category_id as string;
                setProduct(proDetails);
                const relatedProList = proList.filter(item => (typeof item.category_id === "object" && item.category_id._id) === idCate)
                setRelatedProducts(relatedProList.slice(0, 4));
                console.log(proList);

            })()
        }
    }, [id])

    return (
        <>
            <div className="px-5 my-5  " >
                <div className="flex gap-4 justify-evenly items-center">
                    <div className="w-full">
                        <img className="w-full h-full object-cover" src={product?.img as string} alt="" />
                    </div>
                    <div className="">
                        <h2 className="font-semibold uppercase text-3xl">{product?.name}</h2>
                        <div className="flex justify-between my-3 font-light">
                            <p>Lượt xem: {product?.view}</p>
                            <p>Mã sản phẩm: {product?._id}</p>
                        </div>
                        <p className="text-red-700 text-xl mt-auto flex-shrink-0"><span className="text-lg">{product?.curPrice}</span>
                            <span className="underline">đ</span>
                            <sub className="line-through font-light text-gray-600 text-sm "> {product?.price}đ</sub>
                        </p>
                        <p className="my-4">Mô tả: {product?.des}</p>
                    </div>
                </div>
            </div>

            <h1 className="text-2xl font-bold my-10">Sản phẩm liên quan:</h1>

            <div className="grid grid-cols-4 gap-5 text-center">
                {relatedProducts && relatedProducts.map((item, i) => (<ProductCard key={i} product={item as Product} />))}
            </div>

        </>
    )
}

export default ProductDetails;
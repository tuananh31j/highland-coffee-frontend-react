import Product from "../../types/Product"

type RowProductProps = {
    product: Product;
    index: number;
    onDelete: any
}

const RowProduct: React.FC<RowProductProps> = ({product, index, onDelete}) => {

    return (

        <>
            <tr className="border-2 hover:bg-slate-500 hover:text-white">
                <td className="border-2">{index + 1}</td>
                <td className="border-2"><img src={product.img} className="w-10 h-10 object-cover" /></td>
                <td className="border-2 w-32">{product.name}</td>
                <td className="border-2 w-16 relative" >{product.des.slice(0, 10)} {product.des.split("").length > 10 ? <span className='moreDes'>...</span> : ""}<span  className="absolute w-80 more z-10 hidden h-60 bg-white text-black border-2 border-red-700 p-4 rounded-md ">{product.des}</span></td>
                <td className="border-2">{product.sale}</td>
                <td className="border-2">{product.price}</td>
                <td className="border-2">{product.category_id.name}</td>
                <td className="border-2 w-10">{product.createAt}</td>
                <td className="border-2"><button onClick={onDelete(product._id)} className="btn-delete rounded-md bg-red-700 p-2 text-base text-white" data-id="{product.id}">Xóa</button> <a href="/admin/product/update/{product.id}"><button  className="rounded-md bg-gray-700 p-2 text-base text-white">Sửa</button></a></td>
            </tr>
        </>
    )
}

export default RowProduct;
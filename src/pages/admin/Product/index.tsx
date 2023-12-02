import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../../types/Product";
import { getProList } from "../../../services";
// import { remove } from "../../../api"
import fetch from "../../../utilities/api";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const ListProducts = () => {
  const [products, setProducts] = useState<Partial<Product[] | null>>(null);
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    swal({
      title: "Bạn có chắc là muốn xóa không??",
      icon: "warning",
      buttons: ["Hủy", "Xóa"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch
          .remove("products", id)
          .then(() => {
            products && setProducts(products.filter((item) => item && item._id !== id));
          })
          .then(() => navigate("/admin/product"));
      }
    });
  };
  useEffect(() => {
    (async () => {
      const data = await getProList();
      setProducts(data);
    })();
  });

  return (
    <>
      <div className=" transition-all ease-in-out duration-700  w-full">
        <div className=" w-full mt-24 ">
          <h1 className="text-3xl font-semibold  text-center  mb-10">
            Danh sách sản phẩm
          </h1>
          <Link to="/admin/product/add">
            <button className="bg-green-900 p-3 active:translate-y-[2px] transition-all ease-in-out my-4 rounded-md text-white">
              Thêm sản phẩm
            </button>
          </Link>
          <table className="w-full text-center border-2">
            <thead className="w-1/4">
              <tr>
                <th className="border-2 border-black">STT</th>
                <th className="border-2 border-black">Ảnh</th>
                <th className="border-2 border-black">Tên</th>
                <th className="border-2 border-black">Mô tả</th>
                <th className="border-2 border-black">Giảm giá</th>
                <th className="border-2 border-black">Giá</th>
                <th className="border-2 border-black">Danh mục</th>
                <th className="border-2 border-black">Ngày tạo</th>
                <th className="border-2 border-black">Chức năng</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {typeof products === "object" &&
                products?.map((product, index) => (
                  <tr
                    key={product?._id}
                    className="border-2 hover:bg-slate-500 hover:text-white"
                  >
                    <td className="border-2">{index + 1}</td>
                    <td className="border-2">
                      <img
                        src={product?.img as string}
                        className="w-10 h-10 object-cover"
                      />
                    </td>
                    <td className="border-2 w-32">{product?.name}</td>
                    <td className="border-2 w-16 relative">
                      {product?.des.slice(0, 10)}{" "}
                      {product && product?.des.split("").length > 10 ? (
                        <span className="moreDes">...</span>
                      ) : (
                        ""
                      )}
                      <span className="absolute w-80 more z-10 hidden h-60 bg-white text-black border-2 border-red-700 p-4 rounded-md ">
                        {product?.des}
                      </span>
                    </td>
                    <td className="border-2">{product?.sale}</td>
                    <td className="border-2">{product?.price}</td>
                    <td className="border-2">
                      {product && typeof product.category_id === 'object' && product?.category_id.name}
                    </td>
                    <td className="border-2 w-10">{product?.createAt}</td>
                    <td className="border-2">
                      <button
                        onClick={() =>
                          product?._id && handleDelete(product?._id)
                        }
                        className="btn-delete rounded-md bg-red-700 p-2 text-base text-white"
                      >
                        Xóa
                      </button>{" "}
                      <Link to={`/admin/product/edit/${product?._id}`}>
                        <button className="rounded-md bg-gray-700 p-2 text-base text-white">
                          Sửa
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListProducts;

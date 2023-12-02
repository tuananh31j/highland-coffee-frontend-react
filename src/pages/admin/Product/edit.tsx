import { useEffect, useState } from "react";
import Category from "../../../types/Category";
import fetch from "../../../utilities/api/";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

type FormPro = {
  name: string;
  des: string;
  img: File[] | string;
  price: number;
  category_id: string;
  sale: number;
};

const EditProduct = () => {
  const { id }: Readonly<Partial<{ id: string }>> = useParams();
  const [cates, setCates] = useState<Partial<Category[] | null>>(null);
  const { register, handleSubmit, formState: { errors, defaultValues }, } = useForm<FormPro>({
    defaultValues: async () => {
      const { data } = await fetch.getOne("products", id);
      return data;
    },
  });

  const image = defaultValues && defaultValues.img;
  const getAllCates = async () => {
    const { data } = await fetch.getAll("categories");
    return data;
  };
  const navigate = useNavigate();
  const onSubmit = async (values: FormPro) => {

    if (typeof values.img !== "string") {
      const formData = new FormData();
      formData.append("file", values.img[0]);
      formData.append("upload_preset", "n6ogapv9");

      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/djcimgjcc/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "aplication/form-data",
          },
        }
      );

      const product = {
        ...values,
        img: data.url,
      };

      await fetch.edit("products", id as string, product);
      navigate("/admin/product");
    } else {
      const product = {
        ...values,
        img: defaultValues && defaultValues.img,
      };
      await fetch.edit("products", id as string, product);
      await swal("Cập nhật thành công!", "", "success");
      navigate("/admin/product");
    }
  };

  //lấy toàn bộ danh mục
  useEffect(() => {
    (async () => {
      const { data } = await getAllCates();
      setCates(data);
    })();
  }, []);

  return (
    <>
      <div id="content" className=" transition-all ease-in-out   w-full">
        <div className=" w-full mt-24 ">
          <h1 className="text-3xl font-semibold  text-center  mb-10">
            Cập nhật mới sản phẩm
          </h1>
          <div>
            <img
              className="h-44 w-44 object-cover"
              src={image as string}
              alt=""
            />
          </div>
          <p className="text-green-900 noti" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-36 items-center">
              <div>
                <div>
                  <label htmlFor="name" className="text-xl font-semibold mb-2">
                    Tên sản phẩm:
                  </label>
                  <br />
                  <input
                    placeholder="Nhập tên sản phẩm"
                    className="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700"
                    type="text"
                    {...register("name", { required: true })}
                  />
                  <p className="text-red-700 errElement">
                    {errors.name &&
                      errors.name.type === "required" &&
                      "Chưa nhập tên sản phẩm!"}
                  </p>
                </div>
                <div>
                  <label htmlFor="sale" className="text-xl font-semibold mb-2">
                    Giảm giá %:
                  </label>
                  <br />
                  <input
                    placeholder="Nhập 1-99%"
                    className="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700"
                    type="text"
                    {...register("sale", { max: 100, min: 0 })}
                  />
                  <p className="text-red-700 errElement">
                    {errors.sale && "Chỉ được nhập từ 0-100!"}
                  </p>
                </div>
                <div>
                  <label htmlFor="price" className="text-xl font-semibold mb-2">
                    Giá tiền:
                  </label>
                  <br />
                  <input
                    placeholder="Nhập giá tiền"
                    className="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700"
                    type="text"
                    {...register("price", { required: true })}
                  />
                  <p className="text-red-700 errElement">
                    {errors.price &&
                      errors.price.type === "required" &&
                      "Chưa nhập giá sản phẩm!"}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="cate" className="text-xl font-semibold mb-2">
                    Danh mục:
                  </label>
                  <br />
                  <select {...register("category_id", { required: true })}>
                    <option value="">---Chọn danh mục---</option>
                    {cates &&
                      cates?.map((item, i) => (
                        <option key={i} value={item?._id}>
                          {item?.name}
                        </option>
                      ))}
                  </select>
                  <p className="text-red-700 errElement">
                    {errors.category_id &&
                      errors.category_id.type === "required" &&
                      "Chưa chọn danh mục sản phẩm!"}
                  </p>
                </div>
                <div>
                  <label htmlFor="img" className="text-xl font-semibold mb-2">
                    Ảnh sản phẩm:
                  </label>
                  <br />
                  <input
                    placeholder="Nhập tên dnah mục"
                    className="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700"
                    type="file"
                    {...register("img")}
                  />
                  <p className="text-red-700 errElement">
                    {errors.img &&
                      errors.img.type === "required" &&
                      "Chưa chọn sản phẩm!"}
                  </p>
                </div>
                <div>
                  <label htmlFor="des" className="text-xl font-semibold mb-2">
                    Mô tả:
                  </label>
                  <br />
                  <input
                    placeholder="Nhập mô tả sản phẩm"
                    className="border-2 p-3 w-full h-24  border-black rounded-md focus:border-4 focus:border-gray-700"
                    type="text"
                    {...register("des", { required: true })}
                  />
                  <p className="text-red-700 errElement">
                    {errors.des &&
                      errors.des.type === "required" &&
                      "Chưa nhập mô tả sản phẩm!"}
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-green-900 btn-submit my-10 rounded-md p-2 w-20 active:translate-y-[2px] transition-all ease-in-out duration-700 text-white">
              <span className="hidden loadElement">
                <i className="fa-solid fa-loader" />
              </span>
              <span className="textElement">Cập nhật</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;

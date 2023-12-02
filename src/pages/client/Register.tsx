import { useForm } from "react-hook-form";
import fetch from "../../utilities/api"
import { FormRegister } from "../../types/Auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

type ErrMessage = {
    email: string;
    phone: string
}

const RegisterPage = () => {
    const [err, setErr] = useState<Partial<ErrMessage | null>>(null);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormRegister>();

    const onSubmit = async (values: FormRegister) => {
        try {
            await fetch.register(values);
            await swal("Đăng ký thành công!", "Đăng nhập ngay!", "success");
            navigate('/login')

        } catch ({ response }: { response: unknown | object }) {
            const message = response.data.message;
            console.log(response);
            setErr(message)
        }
    }
    return (
        <>
            <div className="bg-[url('http://res.cloudinary.com/djcimgjcc/image/upload/v1697166021/uxkoyydgghajfp6nfu7n.jpg')] relative min-h-screen w-full bg-no-repeat bg-cover">
                <div className="backdrop-blur-sm absolute inset-0 "></div>
                <div className="relative h-screen ">
                    <div className="w-[600px] px-10 py-3 box-content absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2   bg-white border rounded-md ">
                        <div>
                            <h1 className="text-center font-semibold text-2xl mb-10">
                                Đăng ký
                            </h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex gap-5">
                                <div className="">
                                    <div className="h-[110px] mb-6">
                                        <label htmlFor="name" className="w-full my-3">
                                            Họ tên <span className="text-red-700">*</span>
                                        </label>
                                        <input
                                            className="userName border-2 rounded-md my-3  p-4 w-full"
                                            placeholder="Nhập họ tên"
                                            type="text"
                                            {...register("name", { required: true })}
                                        />
                                        <p className="text-red-700">
                                            {errors.name && errors.name.type === "required" && "Chưa điền họ tên!"}
                                        </p>
                                    </div>
                                    <div className="h-[110px] mb-6">
                                        <label htmlFor="email" className="w-full">
                                            Địa chỉ email <span className="text-red-700">*</span>
                                        </label>
                                        <input
                                            className="emailName border-2 rounded-md my-3  p-4 w-full"
                                            placeholder="Nhập địa chỉ email"
                                            type="email"
                                            {...register("email", { required: true })}
                                        />
                                        <p className="text-red-700">
                                            {errors.email && errors.email.type === "required" && "Chưa điền email!"}
                                            {!errors.email && err && err.email}
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="h-[110px] mb-6">
                                        <label htmlFor="phone" className="w-full">
                                            Số điện thoại <span className="text-red-700">*</span>
                                        </label>
                                        <input
                                            id="phone"
                                            className=" border-2 rounded-md my-3  p-4 w-full"
                                            placeholder="Nhập số điện thoại"
                                            type="text"
                                            {...register("phone", { required: true })}
                                        />
                                        <p className="text-red-700">
                                            {errors.phone && errors.phone.type === "required" && "Chưa điền số điện thoại!"}
                                            {!errors.phone && err && err.phone}
                                        </p>
                                    </div>
                                    <div className="h-[110px] mb-6">
                                        <label htmlFor="pass" className="w-full my-3">
                                            Mật khẩu <span className="text-red-700">*</span>
                                        </label>
                                        <input
                                            className="pass border-2 rounded-md my-3  p-4 w-full"
                                            placeholder="Nhập mật khẩu"
                                            type="password"
                                            {...register("password", { required: true })}
                                        />
                                        <p className="text-red-700">{errors.password && errors.password.type === "required" && "Chưa điền mật khẩu!"}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 justify-center">
                                <button className="btn-submit bg-red-700 border-2 mb-7 border-red-700 rounded-md p-4 text-white font-semibold hover:opacity-80 active:opacity-100 active:translate-y-[2px] transition-all ease-in-out">
                                    Đăng ký
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;

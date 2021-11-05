import React from "react";
import { useForm } from "../../../hooks/useForm";

export function AccountInformation() {
  let { register, handleSubmit, error } = useForm();
  const submit = (form) => {
    console.log(form);
  };

  return (
    <form className="tab1" onSubmit={handleSubmit(submit)}>
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
          className={error.name && "login-error"}
          {...register("name", { required: true })}
          type="text"
          placeholder="Nguyễn Văn A"
        />
        {error.name && <p className="errorInput">{error.name}</p>}
      </label>
      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input
          type="text"
          placeholder="0949******"
          className={error.phone && "login-error"}
          {...register("phone", { pattern: "phone" })}
        />
        {error.phone && <p className="errorInput">{error.phone}</p>}
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input
          defaultValue="vuong.dang@dna.vn"
          disabled
          type="text"
          className={error.email && "login-error"}
          {...register("email", { pattern: "email" })}
        />
        {error.email && <p className="errorInput">{error.email}</p>}
      </label>
      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <input type="text" placeholder="Facebook url" />
      </label>
      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input type="text" placeholder="Skype url" />
      </label>
      <button className="btn main rect" type="submit">LƯU LẠI</button>
    </form>
  );
}

import React, { useState } from "react";
import { useParams } from "react-router";
import { useForm } from "../../hooks/useForm";
import courseService from "../../services/courseService";

export default function Register() {
  const { slug } = useParams();

  let { register, error, handleSubmit } = useForm();
  const submit = async (form) => {
    let res = await courseService.register(slug, form)
  };

  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">Thực chiến front-end căn bản </h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai giảng:</strong> 15/11/2020
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
              </div>
              <div className="time">
                <strong>Học phí:</strong> 6.000.000 VND
              </div>
            </div>
            <form className="form" onSubmit={handleSubmit(submit)}>
              <label>
                <p>
                  Họ và tên<span>*</span>
                </p>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="Họ và tên bạn"
                />
                {error.name && (
                  <p
                    className="errorText"
                    style={{ color: "red", fontSize: "13px" }}
                  >
                    {error.name}
                  </p>
                )}
              </label>
              <label>
                <p>
                  Số điện thoại<span>*</span>
                </p>
                <input
                  {...register("phone", { pattern: "phone" })}
                  type="text"
                  name="phone"
                  placeholder="Số điện thoại"
                />
                {error.phone && (
                  <p
                    className="errorText"
                    style={{ color: "red", fontSize: "13px" }}
                  >
                    {error.phone}
                  </p>
                )}
              </label>
              <label>
                <p>
                  Email<span>*</span>
                </p>

                <input
                  {...register("email", { pattern: "email" })}
                  type="text"
                  name="email"
                  placeholder="Email của bạn"
                />
                {error.email && (
                  <p
                    className="errorText"
                    style={{ color: "red", fontSize: "13px" }}
                  >
                    {error.email}
                  </p>
                )}
              </label>
              <label>
                <p>
                  URL Facebook<span>*</span>
                </p>
                <input
                  {...register("url", { pattern: "url" })}
                  type="text"
                  name="url"
                  placeholder="https://facebook.com"
                />
                {error.url && (
                  <p
                    className="errorText"
                    style={{ color: "red", fontSize: "13px" }}
                  >
                    {error.url}
                  </p>
                )}
              </label>
              <label className="disable">
                <p>Sử dụng COIN</p>
                <div className="checkcontainer">
                  Hiện có <strong>300 COIN</strong>
                  {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                  {/* Cần ít nhất 200 COIN để giảm giá */}
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </div>
              </label>
              <label>
                <p>Hình thức thanh toán</p>
                <div className="select">
                  <div className="head">Chuyển khoản</div>
                  <div className="sub">
                    <a href="#">Chuyển khoản</a>
                    <a href="#">Thanh toán tiền mặt</a>
                  </div>
                </div>
              </label>
              <label>
                <p>Ý kiến cá nhân</p>
                <input
                  type="text"
                  placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                  name="content"
                />
              </label>
              <button type="submit" className="btn main rect">
                đăng ký
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

// import React, {useState} from 'react'

// export default function Register() {

//   //mỗi lần gõ thì nó sẽ setForm  -> rerender lại -> nhận giá trị truyền mới.

//     const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     const urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
//     const phonelPattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/

//     const [form, setForm] = useState({
//       // name:''
//     })

//     const [error, setError] =useState({})

//     const handleInputChange =(event) =>{  // xử lý sự kiện handleInputChange có biến tham số truyền vào là event. khi change vào từng ô input thì event đó sẽ bắt đc tới từng thành phần trong input đó.
//       let name= event.currentTarget.name // .currentTarget.name là tham chiếu đến input có attribute name
//       let value= event.currentTarget.value // .currentTarget.value là tham chiếu đến input có attribute value
//       setForm({
//         ...form,  //copy tạo ra object mới  ( khi copy  ra 1 object mới thi khác vùng nhớ nên giá tritrị sẽ khác nhau)
//                 // nếu setState giữ 1 giá trị bằng với giá trị ban đầu thì sẽ bị lỗi.
//        [name] : value, //attribute là name của các ô input và lấy giá trị value của  các ô đó

//       })

//     }

//     const submit  =()=>{
//         //tạo ra 1 object rỗng errorObject
//         // kiểm tra điều kiện nếu !form.name không tồn tại thì sẽ add vào errorObject
//         //setState (setError) cho errorobject vào để render lại trang
//         let errorObject ={}
//         if(!form.name){
//           errorObject.name ="vui long nhap ho va ten"
//         }
//         if(!phonelPattern.test(form.phone)){
//           errorObject.phone ="vui long nhap sdt"
//         }
//         if(!emailPattern.test(form.email)){
//           errorObject.email ="vui long nhap email"
//         }
//         if(!urlPattern.test(form.url)){
//           errorObject.url ="Url khong dc co khoang trong"
//         }

//         setError(errorObject)

//         //trường hợp ngược lại
//         //kiểm tra  nếu object errorObject lấy được từng keys nào không ===  0 nghĩa là có lỗi nào ở trên, thì alert ra.
//         if(Object.keys(errorObject).length ===  0){
//           alert('Thành công')
//         }
//     }

//     return (
//         <main className="register-course" id="main">
//         <section>
//           <div className="container">
//             <div className="wrap container">
//               <div className="main-sub-title">ĐĂNG KÝ</div>
//               <h1 className="main-title">Thực chiến front-end căn bản </h1>
//               <div className="main-info">
//                 <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
//                 <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
//                 <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
//               </div>
//               <div className="form">
//                 <label>
//                   <p>Họ và tên<span>*</span></p>
//                   <input
//                     type="text"
//                     placeholder="Họ và tên bạn"
//                     value={form.name}
//                     name="name"
//                     onChange={handleInputChange}
//                   />
//                    {
//                     error.name && <p className="errorText" style={{color:'red'}}>{error.name}</p>
//                     //nếu error.name có tồn tại thì nó sẽ rerender ra .
//                   }
//                 </label>
//                 <label>
//                   <p>Số điện thoại<span>*</span></p>
//                   <input
//                     type="text"
//                     placeholder="Số điện thoại"
//                     value={form.phone}
//                     name="phone"
//                     onChange={handleInputChange}
//                   />
//                   {
//                     error.phone && <p className="errorText" style={{color:'red'}}>{error.phone}</p>
//                   }
//                 </label>
//                 <label>
//                   <p>Email<span>*</span></p>
//                   <input
//                     type="text"
//                     placeholder="Email của bạn"
//                     value={form.email}
//                     name="email"
//                     onChange={handleInputChange}

//                   />
//                    {
//                     error.email && <p className="errorText" style={{color:'red'}}>{error.email}</p>
//                   }
//                 </label>
//                 <label>
//                   <p>URL Facebook<span>*</span></p>
//                   <input
//                     type="text"
//                     placeholder="https://facebook.com"
//                     value={form.url}
//                     name="url"
//                     onChange={handleInputChange}
//                   />
//                   {
//                     error.url && <p className="errorText" style={{color:'red'}}>{error.url}</p>
//                   }
//                 </label>
//                 <label className="disable">
//                   <p>Sử dụng COIN</p>
//                   <div className="checkcontainer">
//                     Hiện có <strong>300 COIN</strong>

//                     <input type="checkbox" defaultChecked="checked" />
//                     <span className="checkmark" />
//                   </div>
//                 </label>
//                 <label>
//                   <p>Hình thức thanh toán</p>
//                   <div className="select">
//                     <div className="head">Chuyển khoản</div>
//                     <div className="sub">
//                       <a href="#">Chuyển khoản</a>
//                       <a href="#">Thanh toán tiền mặt</a>
//                     </div>
//                   </div>
//                 </label>
//                 <label>
//                   <p>Ý kiến cá nhân</p>
//                   <input
//                     type="text"
//                     placeholder="Mong muốn cá nhân và lịch bạn có thể học."
//                     value={form.content}
//                     name="content"
//                     onChange={handleInputChange}
//                     />
//                 </label>
//                 <div onClick={submit} className="btn main rect">đăng ký</div>
//               </div>
//             </div>
//           </div>
//         </section>

//       </main>
//     )
// }

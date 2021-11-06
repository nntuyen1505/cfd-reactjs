// import { api } from "./config";

// const refershToken = async() => {
//     const refershToken = JSON.parse(localStorage.getItem("token")).refershToken;
//     let res = await fetch(`${api}/elearning/v4/refresh-token`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             refershToken,
//         }),
//     }).then((res) => res.json());

//     localStorage.setItem("token", JSON.stringify(res.data));
// };

// const handleResponse = async(res, url, option) => {
//     if (res.status === 403) {
//         await refershToken();
//         let token = JSON.parse(localStorage.getItem('token'))?.accessToken;
//         console.log('re-fetch', token)
//         return fetch(url, {
//             ...option,
//             headers: {
//                 ...option.headers,
//                 'Authorization': `Bearer ${token}`
//             }
//         }).then((res) => res.json());
//     }
//     return res.json();
// };

// const courseService = {
//     home(){
//       return fetch(`${api}/elearning/v4/home/`).then((res)=>res.json())
//     },
//     detail(slug) {
//         return fetch(`${api}/elearning/v4/course/${slug}`).then(handleResponse);
//     },
//
// };
// export default courseService;

import Register from "../pages/Register";
import { api } from "./config";

const courseService = {
  home() {
    return fetch(`${api}/elearning/v4/home`).then((res) => res.json());
  },
  courseDetail(slug) {
    return fetch(`${api}/elearning/v4/course/${slug}`).then((res) =>
      res.json()
    );
  },
  register(slug, data) {
    let token = JSON.stringify(localStorage.getItem("token"))?.accessToken;
    return fetch(`${api}/elearning/v4/course-register/${slug}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    }).then((res) => res.json);
  },
};
export default courseService;

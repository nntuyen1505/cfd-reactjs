import React from 'react'
import { Redirect, Route } from 'react-router'
import { useAuth } from '../../hooks/useAuth'


export default function PrivateRoutte(props) {
    let {user}=useAuth()
    /*Kiểm tra user nếu chưa có thì redirect về trang chủ*/
    if(!user) return <Redirect to="/"/>
    /*Nếu login rồi thì return về Route có tất cả các props ở ngoài App.js truyền vào */
    return  <Route {...props}/>
}

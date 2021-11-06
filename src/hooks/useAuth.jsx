import { useContext } from "react";
import { useSelector } from "react-redux";
import { Context } from "../App";

// export function useAuth() {
//   const context = useContext(Context);
//   return context;
// }


export const useAuth = () => useSelector((store) => store);

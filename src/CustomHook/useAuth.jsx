import { useContext } from "react"
import AuthContext from "../context/Authcontext/Authcontext"

const useAuth = () =>{
    const context = useContext(AuthContext)
    return context;
}

export default useAuth;
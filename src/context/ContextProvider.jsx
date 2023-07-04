import axiosClient from "../axios/AxiosClient";
import { useState, useContext, createContext } from "react";

const AuthContext = createContext({
    user: null,
    toke:null,
    userId:null,
    mypost:null,
    editPost:null
});


export const AuthProvider = ({children})=>{
    // const {isLogged, setIsLogged} = useState(false)

    const [user, setUser]= useState({});
    const[mypost, setPosts]=useState(null);
    const [userId, setUserId]=useState();
    const [token, setToken]=useState(localStorage.getItem('ACCESS_TOKEN'));
    const [editPost, setEditPost]=useState()

    
const myToken =(token)=>{
    setToken(token)

    if(token){
        localStorage.setItem('ACCESS_TOKEN', token);
    }

}

    return (
        <AuthContext.Provider value={{user, token, setUser, myToken, setPosts, mypost, setUserId, userId, editPost, setEditPost}}>
        {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext=()=>useContext(AuthContext)
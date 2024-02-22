import {jwtDecode} from "jwt-decode";

function isTokenValid(token){
    localStorage.setItem('token', token);
    const decoded=jwtDecode(token)

    const validTime = decoded.iat
    const expTime = decoded.exp

    if (expTime > validTime){
        return true;
    }else {
        return false
    }
}
export default isTokenValid
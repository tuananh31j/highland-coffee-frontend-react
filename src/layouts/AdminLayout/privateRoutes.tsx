import { Navigate } from "react-router-dom";

const user = localStorage.getItem('user');

type PrivateRoutesProps = {
    children: React.ReactNode;
}
const PrivateRoutes: React.FC<PrivateRoutesProps> = ({children}) => {
    if(user && JSON.parse(user).user.role)  return children;
    if(user) return <Navigate to='/' />
    return <Navigate to='/login' />
}

export default PrivateRoutes
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRoutes = () => {
    return (
        localStorage.getItem('isAuth') ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoutes
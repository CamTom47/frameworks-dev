import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router"

const NotFoundPage = () => {

    const navigate = useNavigate();


    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000);
    },[])
  return (
    <div className="absolute top-0 z-99999 h-screen w-screen bg-white flex flex-col justify-center items-center text-primary-dark gap-y-4">
      <p className="text-4xl">404 Not Found</p>
      <p className="text-2xl" >Oops! It looks like the URL you used isn't a valid route. Hold tight while we redirect you.</p>
    </div>
  )
}

export default NotFoundPage

import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage />} />
        <Route path="register" element={ <RegisterPage />} />

        {/* cualquier otra ruta que no sea alguna de las de arriba va a mostrar la de login por defecto */}
        <Route path='/*' element={ <Navigate to="/auth/login" />} />
    </Routes>
  )
}

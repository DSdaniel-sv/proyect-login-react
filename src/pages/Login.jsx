import React from 'react'
import '../pages/Login.css'

const Login = () => {
  return (
    <div className='container__login'>
        <h1>Login</h1>
        <form action="">
            <div className='box__img'>
                <img src="https://t2.uc.ltmcdn.com/es/posts/0/8/7/como_encontrar_las_mejores_formas_de_contacto_de_las_empresas_50780_orig.jpg" alt="" />
            </div>
            <div>
                <div>
                    <h1>Bienvenidos</h1>
                    <p>a la comunidad de lgrupo G18</p>
                </div>
                <div>
                    <input type="text" placeholder='Ingrese nombre: '/>
                    <input type="email" placeholder='Ingrese Email:'/>
                    <input type="password" placeholder='Ingrese Password'/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login

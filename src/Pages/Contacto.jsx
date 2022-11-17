import React from "react";
import '../Pages/Contacto.css'
import { Link } from "react-router-dom";

const Contacto = () => {
    return (
        <div className='form-width'>
            <form id="form-container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        
                        <h4 className="text-center text-uppercase anton">Contacto</h4>
                        <hr />
                        <div className="inputs-form form-group">
                            <label for="username" className="ubuntu">Nombre y apellido:</label>
                            <input type="text" name="username" id="username" className="form-control mb-4" required />
                            <label for="email_form" className="ubuntu">Correo Electrónico:</label>
                            <input type="email" name="email_form" id="email_form" className="form-control mb-4" required placeholder="ejemplo@email.com" />
                            <label for="username" className="Comentario">Comentario:</label>
                            <textarea name="" id="coment" cols="40" rows="10" placeholder="Ingrese su comentario"></textarea>
                            <button type="submit" class="btn mt-1 ubuntu" id="send-form">Enviar</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <figure className="w-100 img-form" id="box__img-message">
                            <img src="./src/assets/img/mensajeria2.webp"/>
                        </figure>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contacto;

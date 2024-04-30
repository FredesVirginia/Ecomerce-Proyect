
import Button from '@mui/material/Button';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { register } from "../Redux/actions";
export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    "name": "",
    "surname": "",
    "phone": "",
    "password": "",
    "role" : "" , 
    "confirmPassword": "",
    "address": "",
    "email": "",
    "birthday":"" ,
  });


  const [seleccionado, setSeleccionado] = useState(null);
  const [error , setError] = useState(true);



  //FUNCION PARA CAPTAR TIPO DE CLIENTE
  const handleClick = (opcion) => {
    console.log("LA OPCION ES " , opcion)
    if (opcion !== seleccionado) {
      setSeleccionado(opcion);
      setError(false);
      // Habilita el botón Save al seleccionar una opción
    }
  };








  const registerSchema = Yup.object().shape({
    birthday: Yup.date().
      required("Campo requerido"),
    email: Yup.string()
      .email('Formato Inválido')
      .required('Campo Requerido'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
      )
      .required('Campo Requerido'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Campo Requerido'),
    name: Yup.string().required('Campo Requerido'),
    surname: Yup.string().required('Campo Requerido'),
    address: Yup.string()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        'La dirección debe contener solo letras y números'
      )
      .required('Campo Requerido'),
    phone: Yup.string()
      .matches(/^\d+$/, 'El número de teléfono solo debe contener números')
      .required('Campo Requerido'),
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    if (formSubmitted) {
      console.log("EL USER ES ", user);
  
      dispatch(register(user)).then(response => {
        console.log("Los datos son ", user);
        console.log("LA respuesta de dispatch en el componente es ", response);
        
        if (response.payload == "200") {
          toast.success("Registro Exitoso");
          navigate("/");
        } else {
          toast.error("Ocurrió un error. Vuelve a intentarlo");
          // No deberías navegar aquí, ya que el registro falló. Mantente en la página de registro.
        }
      });
  
      // Reiniciamos el estado después de enviar el formulario
      setFormSubmitted(false);
    }
  }, [formSubmitted, user, dispatch, navigate]); // Este efecto se ejecutará cada vez que `user` se actualice

  const register1 = async (values) => {
    setUser({
      name: values.name,
      surname: values.surname,
      address: values.address,
      password: values.password,
      email: values.email,
      phone: values.phone,
      birthday: values.birthday,
      role: seleccionado
    });

    setFormSubmitted(true);
  };
  return (
    <div>
      <div className="fondo py-5">
        <div className=" flex   justify-center items-center h-screen">
          <div className="bg-white py-10  rounded-lg">

            <Formik
              initialValues={user}
              validationSchema={registerSchema}


              onSubmit={async (values) => {

                console.log("Se apreto algo");
                register1(values);

              }}
            >

              {({ errors, touched
              }) => (
                <Form>
                  <h2 className='text-left ml-7 text-2xl text-gray-600 mb-4'>Registro</h2>

                  <div className=" flex space-x-4 mx-10">
                    <div className='flex flex-col space-y-5 '>
                      <div className='flex flex-col'>
                        <label className="text-gray-600">Nombre</label>
                        <Field
                          id="name"
                          label="Nombre"
                          name="name"

                          placeholder="name"

                          className="py-1 px-2 border border-gray-300 rounded-md"
                        />
                        {
                          errors.name && touched.name &&
                          (
                            <ErrorMessage className="text-sm text-red-600" name='name' component='div' />
                          )
                        }
                      </div>


                      <div className='flex flex-col'>
                        <label className="text-gray-600">Apellido</label>
                        <Field
                          label="Apellido"
                          id="surname"
                          name="surname"
                          placeholder="surname"
                          className="py-1 px-2 border border-gray-300 rounded-md"

                        />

                        {
                          errors.surname && touched.surname &&
                          (
                            <ErrorMessage className="text-sm text-red-600" name='surname' component='div' />
                          )
                        }
                      </div>

                      <div className='flex flex-col'>
                        <label className="text-gray-600">Fecha de Nacimiento</label>
                        <Field
                          type="date"
                          label="Fecha de Nacimiento"
                          id="birthday"
                          name="birthday"
                          placeholder="birthday"
                          className="py-1 px-2 border border-gray-300 rounded-md"

                        />

                        {
                          errors.birthday && touched.birthday &&
                          (
                            <ErrorMessage className="text-sm text-red-600" name='birthday' component='div' />
                          )
                        }
                      </div>

                      <div className='flex flex-col'>
                        <label className="text-gray-600">Dirreccion</label>
                        <Field
                          label="Dirreccion"
                          id="address"
                          name="address"
                          placeholder="address"
                          className="py-1 px-2 border border-gray-300 rounded-md"

                        />

                        {
                          errors.address && touched.address &&
                          (
                            <ErrorMessage className="text-sm text-red-600" name='address' component='div' />
                          )
                        }
                      </div>


                    </div>
                    <div className='flex flex-col space-y-5 mx-5 '>
                      <div className='flex flex-col'>
                        <label className="text-gray-600">Correo</label>
                        <Field
                          id="email"
                          name="email"
                          label="Correo"
                          placeholder="example@outlook.com"
                          className="py-1 px-2 border border-gray-300 rounded-md"

                        />

                        {
                          errors.email && touched.email &&
                          (
                            <ErrorMessage className="text-sm text-red-600" name='email' component='div' />
                          )
                        }
                      </div>

                      <div className='flex flex-col'>
                        <label className="text-gray-600">Clave</label>
                        <Field
                          label="Clave"
                          id="password"
                          name="password"
                          placeholder="password"
                          type="password"
                          className="py-1 px-2 border border-gray-300 rounded-md"

                        />

                        {
                          errors.password && touched.password &&
                          (
                            <ErrorMessage className="text-sm text-red-600" name='password' component='div' />
                          )
                        }

                      </div>

                      <div className='flex flex-col'>
                        <label className="text-gray-600">Confirmar clave</label>
                        <Field
                          label="Confirmar Clave"
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="confirm password"
                          type="password"
                          className="py-1 px-2 border border-gray-300 rounded-md"

                        />
                        {
                          errors.confirmPassword && touched.confirmPassword &&
                          (
                            <ErrorMessage className="text-sm text-red-600" name='confirmPassword' component='div' />
                          )
                        }
                      </div>

                      <div className='flex flex-col'>
                        <label className="text-gray-600">Telefono</label>
                        <Field
                          label="Telefono"
                          id="phone"
                          name="phone"
                          placeholder="confirm password"
                          type="text"
                          className="py-1 px-2 border border-gray-300 rounded-md"

                        />
                        {
                          errors.phone && touched.phone &&
                          (
                            <ErrorMessage className="text-sm text-red-600" name='phone' component='div' />
                          )
                        }
                      </div>
                    </div>
                  </div>


                  <div className=" mx-8 mt-5">
                    <label className="text-left ml-4 text-xl text-gray-600 mb-4"> Creas esta cuenta para :</label>
                  


                    <center>
                     <div  className={`m-1 rounded-xl h[90px] text-left pl-2 py-2 cursor-pointer border border-cyan-200 ${seleccionado === 'user' ? 'bg-blue-600 text-white font-bold ' : 'bg-white text-black'
                          }`}
                        onClick={() => handleClick('user')}>

                          Para comprar productos
                     </div>

                     <div  className={`m-1 rounded-xl h[90px] text-left pl-2 py-2 cursor-pointer border border-cyan-200 ${seleccionado === 'client' ? 'bg-blue-600 text-white font-bold ' : 'bg-white text-black'
                          }`}
                        onClick={() => handleClick('client')}>
                        
                          Para vender productos
                     </div>
                    </center>

                  </div>
                  <div className="flex justify-end mr-10 mt-5">
                    <Button variant="contained" type="submit" disabled={error}>Ingresar</Button>

                  </div>
                </Form>

              )}




            </Formik>


          </div>
        </div>
      </div>
    </div>
  )
}

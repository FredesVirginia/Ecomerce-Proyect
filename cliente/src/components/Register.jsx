import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Formik , Form , ErrorMessage} from "formik";
import * as Yup from "yup";
import {useState} from "react";
export default function Register() {

  const [user , setUser] = useState({
    "name":"",
    "surname":"",
    "phone" : "",
    "password" : "",
    "confirmPassword":"",
   "address" :"",
   "email":""
  });

  const registerSchema = Yup.object().shape({
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
  
  return (
    <div>
     <div className="fondo">
     <div className="m-10 flex   justify-center items-center h-screen">
      <div className="bg-white py-10 w-[400px] rounded-lg">
       
           <Formik 
           initialValues={user}
           validationSchema={registerSchema}
           onSubmit={async (values) => {
             await new Promise((r) => setTimeout(r, 500));
             alert(JSON.stringify(values, null, 2));
           }}
         >
           {({ errors, touched, isSubmitting }) => (
             <Form className="bg-red-300 flex space-x-4 mx-5">
             
           

            
             <div>
             <TextField
                 id="name"
                 label="Nombre"
                 name="name"
                 placeholder="name"
                 value={user.name}
                 onChange={(e) => setUser({ ...user, name: e.target.value })}
                 error={errors.name && touched.name}
                 helperText={errors.name && touched.name && errors.name}
               />
               {errors.name && touched.name && (
                 <ErrorMessage name="name" component="div" />
               )}

             
               <TextField
               label="Apellido"
                 id="surname"
                 name="surname"
                 placeholder="surname"
                 value={user.surname}
                 onChange={(e) => setUser({ ...user, surname: e.target.value })}
                 error={errors.surname && touched.surname}
                 helperText={errors.surname && touched.surname && errors.surname}
               />
               {errors.surname && touched.surname && (
                 <ErrorMessage name="surname" component="div" />
               )}

             
               <TextField
               label="Dirreccion"
                 id="address"
                 name="address"
                 placeholder="address"
                 value={user.address}
                 onChange={(e) => setUser({ ...user, address: e.target.value })}
                 error={errors.address && touched.address}
                 helperText={errors.address && touched.address && errors.address}
               />
               {errors.address && touched.address && (
                 <ErrorMessage name="address" component="div" />
               )}

            
               <TextField
               label="Telefono"
                 id="phone"
                 name="phone"
                 placeholder="phone"
                 value={user.phone}
                 onChange={(e) => setUser({ ...user, phone: e.target.value })}
                 error={errors.phone && touched.phone}
                 helperText={errors.phone && touched.phone && errors.phone}
               />
               {errors.phone && touched.phone && (
                 <ErrorMessage name="phone" component="div" />
               )}
             </div>
               <div>
             <TextField
                 id="email"
                 name="email"
                 label="Correo"
                 placeholder="example@outlook.com"
                 value={user.email}
                 onChange={(e) => setUser({ ...user, email: e.target.value })}
                 error={errors.email && touched.email}
                 helperText={errors.email && touched.email && errors.email}
               />
               {errors.email && touched.email && (
                 <ErrorMessage name="email" component="div" />
               )}

               
               <TextField
               label="Clave"
                 id="password"
                 name="password"
                 placeholder="password"
                 type="password"
                 value={user.password}
                 onChange={(e) => setUser({ ...user, password: e.target.value })}
                 error={errors.password && touched.password}
                 helperText={errors.password && touched.password && errors.password}
               />
               {errors.password && touched.password && (
                 <ErrorMessage name="password" component="div" />
               )}

            
               <TextField
               label="Confirmar Clave"
                 id="confirmPassword"
                 name="confirmPassword"
                 placeholder="confirm password"
                 type="password"
                 value={user.confirmPassword}
                 onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                 error={errors.confirmPassword && touched.confirmPassword}
                 helperText={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
               />
               {errors.confirmPassword && touched.confirmPassword && (
                 <ErrorMessage name="confirmPassword" component="div" />
               )}
             </div>

               <Button variant="contained" type="submit" disabled={isSubmitting}>Ingresar</Button>
               {isSubmitting ? <p>Registering...</p> : null}
             </Form>
           )}
         </Formik>


      </div>
    </div>
    </div>
    </div>
  )
}
